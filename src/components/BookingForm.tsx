'use client';

import { useState } from 'react';
import { TourPackage } from '@/types';
import { XMarkIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

interface BookingFormProps {
  packageData: TourPackage;
  onClose: () => void;
}

export default function BookingForm({ packageData, onClose }: BookingFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    numberOfTravelers: 1,
    travelDate: '',
    specialRequests: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const totalAmount = packageData.price * formData.numberOfTravelers;

      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: totalAmount,
          packageId: packageData.id,
          ...formData,
        }),
      });

      const data = await response.json();

      if (data.orderId) {
        if (typeof window !== 'undefined' && (window as any).Razorpay) {
          const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
            amount: data.amount,
            currency: 'INR',
            name: 'NE Tourism',
            description: packageData.title,
            order_id: data.orderId,
            handler: async function (response: any) {
              try {
                const verifyResponse = await fetch('/api/verify-payment', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                  }),
                });

                const verifyData = await verifyResponse.json();

                if (verifyData.verified) {
                  toast.success('Payment verified! Booking confirmed. We will contact you shortly.');
                  onClose();
                } else {
                  toast.error('Payment verification failed. Please contact support.');
                }
              } catch (error) {
                console.error('Payment verification error:', error);
                toast.error('An error occurred during verification. Please contact support with your payment ID.');
              }
            },
            prefill: {
              name: formData.fullName,
              email: formData.email,
              contact: formData.phone,
            },
            theme: {
              color: '#0d9488',
            },
            modal: {
              ondismiss: function() {
                setIsSubmitting(false);
              }
            },
          };

          const rzp = new (window as any).Razorpay(options);
          rzp.open();
        } else {
          toast.success('Booking request submitted! We will contact you shortly.');
          onClose();
        }
      }
    } catch (error) {
      console.error('Booking error:', error);
      toast.error('Booking failed. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalAmount = packageData.price * formData.numberOfTravelers;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Book Your Tour</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-lg mb-2">{packageData.title}</h3>
            <div className="flex justify-between text-sm text-gray-600">
              <span>{packageData.duration}</span>
              <span>₹{packageData.price.toLocaleString('en-IN')} per person</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                placeholder="10-digit mobile number"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Travelers *
                </label>
                <input
                  type="number"
                  name="numberOfTravelers"
                  value={formData.numberOfTravelers}
                  onChange={handleChange}
                  min="1"
                  max="15"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Travel Date *
                </label>
                <input
                  type="date"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Special Requests (Optional)
              </label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                placeholder="Any dietary restrictions, accessibility needs, or special requests..."
              ></textarea>
            </div>

            <div className="bg-teal-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total Amount:</span>
                <span className="text-2xl font-bold text-teal-600">
                  ₹{totalAmount.toLocaleString('en-IN')}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                For {formData.numberOfTravelers} {formData.numberOfTravelers === 1 ? 'person' : 'people'}
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Processing...' : 'Proceed to Payment'}
            </button>

            <p className="text-xs text-gray-600 text-center">
              By proceeding, you agree to our terms and conditions. A confirmation email will be sent after payment.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
