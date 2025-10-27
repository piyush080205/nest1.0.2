'use client';

import { useState } from 'react';
import Image from 'next/image';
import { tourPackages } from '@/data/packages';
import { notFound } from 'next/navigation';
import BookingForm from '@/components/BookingForm';
import { CheckIcon, ClockIcon, UsersIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function PackageDetailPage({ params }: { params: { id: string } }) {
  const [showBooking, setShowBooking] = useState(false);
  const pkg = tourPackages.find((p) => p.id === params.id);

  if (!pkg) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-96">
        <Image
          src={pkg.images[0]}
          alt={pkg.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{pkg.title}</h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full">
                📍 {pkg.state}
              </span>
              <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full">
                ⏱️ {pkg.duration}
              </span>
              <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full">
                ⭐ {pkg.rating} ({pkg.reviews} reviews)
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed">{pkg.description}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pkg.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Day-by-Day Itinerary</h2>
              <div className="space-y-6">
                {pkg.itinerary.map((day) => (
                  <div key={day.day} className="border-l-4 border-teal-600 pl-6 pb-6">
                    <div className="flex items-center mb-2">
                      <div className="bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">
                        {day.day}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{day.title}</h3>
                        <p className="text-sm text-gray-600">{day.description}</p>
                      </div>
                    </div>
                    <ul className="mt-3 space-y-2 ml-13">
                      {day.activities.map((activity, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start">
                          <span className="text-teal-600 mr-2">•</span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-4 text-teal-600">Inclusions</h2>
                <ul className="space-y-2">
                  {pkg.inclusions.map((item, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <CheckIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-4 text-red-600">Exclusions</h2>
                <ul className="space-y-2">
                  {pkg.exclusions.map((item, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="text-red-600 mr-2 flex-shrink-0">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Photo Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {pkg.images.map((image, index) => (
                  <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${pkg.title} - Image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-8 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-sm text-gray-600">Starting from</div>
                <div className="text-4xl font-bold text-teal-600 my-2">
                  ₹{pkg.price.toLocaleString('en-IN')}
                </div>
                <div className="text-sm text-gray-600">per person</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-700">
                  <ClockIcon className="h-5 w-5 text-teal-600 mr-3" />
                  <div>
                    <div className="font-semibold">Duration</div>
                    <div className="text-sm">{pkg.duration}</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-700">
                  <UsersIcon className="h-5 w-5 text-teal-600 mr-3" />
                  <div>
                    <div className="font-semibold">Group Size</div>
                    <div className="text-sm">{pkg.groupSize}</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-700">
                  <MapPinIcon className="h-5 w-5 text-teal-600 mr-3" />
                  <div>
                    <div className="font-semibold">Difficulty</div>
                    <div className="text-sm">{pkg.difficulty}</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-teal-600 mr-3">🗓️</span>
                  <div>
                    <div className="font-semibold">Best Season</div>
                    <div className="text-sm">{pkg.season}</div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowBooking(!showBooking)}
                className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Book This Package
              </button>

              <div className="mt-6 text-center text-sm text-gray-600">
                <p>Need help? Call us at</p>
                <a href="tel:+911234567890" className="text-teal-600 font-semibold">
                  +91-1234567890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showBooking && (
        <BookingForm
          packageData={pkg}
          onClose={() => setShowBooking(false)}
        />
      )}
    </div>
  );
}
