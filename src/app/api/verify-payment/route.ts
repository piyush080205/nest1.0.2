import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    const razorpaySecret = process.env.RAZORPAY_SECRET;

    if (!razorpaySecret || razorpaySecret === 'your_razorpay_secret') {
      console.log('Demo mode: Payment verification skipped');
      return NextResponse.json({
        verified: true,
        message: 'Demo payment verification successful',
        demo: true,
      });
    }

    const generatedSignature = crypto
      .createHmac('sha256', razorpaySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    if (generatedSignature === razorpay_signature) {
      console.log('Payment verified successfully:', {
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
      });

      return NextResponse.json({
        verified: true,
        message: 'Payment verified successfully',
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
      });
    } else {
      console.error('Payment verification failed: Signature mismatch');
      return NextResponse.json(
        {
          verified: false,
          error: 'Payment verification failed',
        },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error('Error verifying payment:', error);
    return NextResponse.json(
      {
        verified: false,
        error: 'Payment verification error',
        message: error.message,
      },
      { status: 500 }
    );
  }
}
