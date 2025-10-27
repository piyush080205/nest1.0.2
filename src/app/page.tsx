import Link from 'next/link';
import Image from 'next/image';
import { tourPackages } from '@/data/packages';

export default function Home() {
  const featuredPackages = tourPackages.slice(0, 3);

  return (
    <div>
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-purple-600 opacity-90"></div>
        <Image
          src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1200"
          alt="Northeast India"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover the Incredible Northeast India
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Explore untouched landscapes, rich cultures, and breathtaking adventures
          </p>
          <Link
            href="/packages"
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Explore Tour Packages
          </Link>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Northeast India?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the unexplored beauty of the Seven Sisters and Sikkim
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-teal-600 text-4xl mb-4">🏔️</div>
              <h3 className="text-xl font-semibold mb-2">Majestic Mountains</h3>
              <p className="text-gray-600">
                From the Himalayas to rolling hills, experience breathtaking mountain landscapes
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-teal-600 text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-semibold mb-2">Rich Culture</h3>
              <p className="text-gray-600">
                Discover diverse indigenous tribes, festivals, and ancient traditions
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-teal-600 text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold mb-2">Pristine Nature</h3>
              <p className="text-gray-600">
                Explore untouched forests, waterfalls, and unique wildlife sanctuaries
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Tour Packages
            </h2>
            <p className="text-lg text-gray-600">
              Handpicked experiences for unforgettable journeys
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
              <Link
                key={pkg.id}
                href={`/packages/${pkg.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden card-hover"
              >
                <div className="relative h-48">
                  <Image
                    src={pkg.images[0]}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {pkg.state}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4">{pkg.category}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-gray-600">
                      <span className="text-sm">From</span>
                      <div className="text-2xl font-bold text-teal-600">
                        ₹{pkg.price.toLocaleString('en-IN')}
                      </div>
                      <span className="text-sm">per person</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">{pkg.duration}</div>
                      <div className="text-sm text-yellow-500">
                        ⭐ {pkg.rating} ({pkg.reviews})
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/packages"
              className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              View All Packages
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-8">
            Let us help you plan the perfect Northeast India experience
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
