'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { tourPackages, states, categories } from '@/data/packages';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function PackagesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('All States');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const filteredPackages = tourPackages.filter((pkg) => {
    const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesState = selectedState === 'All States' || pkg.state === selectedState;
    const matchesCategory = selectedCategory === 'All Categories' || pkg.category === selectedCategory;
    
    return matchesSearch && matchesState && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Tour Packages</h1>
          <p className="text-xl">Discover amazing experiences across Northeast India</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Packages
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by destination, activity..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                />
                <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State
              </label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
              >
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mb-4 text-gray-600">
          Showing {filteredPackages.length} {filteredPackages.length === 1 ? 'package' : 'packages'}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <Link
              key={pkg.id}
              href={`/packages/${pkg.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden card-hover"
            >
              <div className="relative h-56">
                <Image
                  src={pkg.images[0]}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-white text-teal-600 px-3 py-1 rounded-full text-sm font-semibold">
                  {pkg.state}
                </div>
                <div className="absolute top-4 right-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {pkg.difficulty}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{pkg.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{pkg.category}</p>
                <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                  {pkg.description}
                </p>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm text-gray-600">
                    <span>⏱️ {pkg.duration}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span>👥 {pkg.groupSize}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <div>
                    <div className="text-sm text-gray-600">Starting from</div>
                    <div className="text-2xl font-bold text-teal-600">
                      ₹{pkg.price.toLocaleString('en-IN')}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-yellow-500">
                      ⭐ {pkg.rating}
                    </div>
                    <div className="text-xs text-gray-600">
                      {pkg.reviews} reviews
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No packages found</h3>
            <p className="text-gray-600">Try adjusting your filters or search query</p>
          </div>
        )}
      </div>
    </div>
  );
}
