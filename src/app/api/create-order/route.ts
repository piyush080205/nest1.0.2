import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { tourPackages } from '@/data/packages';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount: clientAmount, packageId, fullName, email, phone, numberOfTravelers, travelDate, specialRequests } = body;

    if (!packageId || typeof packageId !== 'string') {
      return NextResponse.json(
        { error: 'Invalid package ID' },
        { status: 400 }
      );
    }

    if (!Number.isInteger(numberOfTravelers) || numberOfTravelers < 1 || numberOfTravelers > 15) {
      console.error('Invalid numberOfTravelers:', {
        packageId,
        numberOfTravelers,
        email,
        timestamp: new Date().toISOString(),
      });
      
      return NextResponse.json(
        { 
          error: 'Invalid number of travelers',
          message: 'Number of travelers must be between 1 and 15',
        },
        { status: 400 }
      );
    }

    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return NextResponse.json(
        { error: 'Invalid full name' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== 'string' || !/^[0-9]{10}$/.test(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number - must be 10 digits' },
        { status: 400 }
      );
    }

    if (!travelDate || typeof travelDate !== 'string') {
      return NextResponse.json(
        { error: 'Invalid travel date' },
        { status: 400 }
      );
    }

    const tourPackage = tourPackages.find(pkg => pkg.id === packageId);
    
    if (!tourPackage) {
      console.error('Package not found:', packageId);
      return NextResponse.json(
        { error: 'Package not found' },
        { status: 404 }
      );
    }

    const serverCalculatedAmount = tourPackage.price * numberOfTravelers;

    if (typeof clientAmount !== 'number' || clientAmount <= 0) {
      console.error('Invalid client amount:', {
        packageId,
        clientAmount,
        email,
        timestamp: new Date().toISOString(),
      });
      
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      );
    }

    if (Math.abs(clientAmount - serverCalculatedAmount) > 1) {
      console.error('Amount mismatch detected - possible tampering attempt:', {
        packageId,
        packageTitle: tourPackage.title,
        clientAmount,
        serverCalculatedAmount,
        numberOfTravelers,
        packagePrice: tourPackage.price,
        email,
        timestamp: new Date().toISOString(),
      });
      
      return NextResponse.json(
        { 
          error: 'Amount mismatch',
          message: 'The booking amount does not match the package price. Please refresh and try again.',
        },
        { status: 400 }
      );
    }

    const amount = serverCalculatedAmount;

    const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY;
    const razorpaySecret = process.env.RAZORPAY_SECRET;

    if (!razorpayKey || !razorpaySecret || razorpayKey === 'your_razorpay_key' || razorpaySecret === 'your_razorpay_secret') {
      console.warn('Razorpay credentials not configured properly. Using demo mode.');
      
      const demoOrderId = `demo_order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      console.log('Demo booking request received:', {
        orderId: demoOrderId,
        packageId,
        packageTitle: tourPackage.title,
        fullName,
        email,
        phone,
        numberOfTravelers,
        travelDate,
        amount,
      });

      return NextResponse.json({
        orderId: demoOrderId,
        amount: amount * 100,
        currency: 'INR',
        message: 'Demo order created - Please configure Razorpay API keys in .env.local',
        demo: true,
      });
    }

    const razorpay = new Razorpay({
      key_id: razorpayKey,
      key_secret: razorpaySecret,
    });

    const options = {
      amount: amount * 100,
      currency: 'INR',
      receipt: `receipt_${packageId}_${Date.now()}`,
      notes: {
        packageId,
        packageTitle: tourPackage.title,
        packagePrice: tourPackage.price.toString(),
        fullName,
        email,
        phone,
        numberOfTravelers: numberOfTravelers.toString(),
        travelDate,
        specialRequests: specialRequests || '',
        serverCalculatedAmount: amount.toString(),
      },
    };

    const order = await razorpay.orders.create(options);

    console.log('Razorpay order created successfully:', {
      orderId: order.id,
      packageId,
      packageTitle: tourPackage.title,
      fullName,
      email,
      numberOfTravelers,
      amount: order.amount,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      message: 'Order created successfully',
    });
  } catch (error: any) {
    console.error('Error creating Razorpay order:', error);
    
    return NextResponse.json(
      {
        error: 'Failed to create order',
        message: error.message || 'An unexpected error occurred',
        details: process.env.NODE_ENV === 'development' ? error.toString() : undefined,
      },
      { status: 500 }
    );
  }
}
