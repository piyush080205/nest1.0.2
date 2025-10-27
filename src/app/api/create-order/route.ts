import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, packageId, fullName, email, phone, numberOfTravelers, travelDate } = body;

    const orderId = `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    console.log('Booking request received:', {
      orderId,
      packageId,
      fullName,
      email,
      phone,
      numberOfTravelers,
      travelDate,
      amount,
    });

    return NextResponse.json({
      orderId,
      amount: amount * 100,
      currency: 'INR',
      message: 'Order created successfully',
    });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}
