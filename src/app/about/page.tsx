import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About NE Tourism</h1>
          <p className="text-xl">Your gateway to the unexplored Northeast India</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              NE Tourism was born from a passion to showcase the incredible beauty and rich cultural heritage of Northeast India to the world. Founded by travel enthusiasts who fell in love with the region's pristine landscapes and warm hospitality, we are committed to providing authentic and sustainable tourism experiences.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              With over a decade of experience in the tourism industry, we have helped thousands of travelers explore the hidden gems of the Seven Sisters and Sikkim. Our deep-rooted connections with local communities ensure that your journey is not just a tour, but an immersive cultural experience.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe in responsible tourism that benefits local communities while preserving the natural beauty and cultural integrity of the region. Every tour we organize is designed to create meaningful connections between travelers and the destinations they visit.
            </p>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800"
              alt="Northeast India landscape"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                <CheckCircleIcon className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Local Expertise</h3>
              <p className="text-gray-600">
                Our team consists of local guides who know every trail, waterfall, and cultural nuance
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                <CheckCircleIcon className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Authentic Experiences</h3>
              <p className="text-gray-600">
                We focus on authentic cultural interactions, not just tourist attractions
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                <CheckCircleIcon className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Safety First</h3>
              <p className="text-gray-600">
                Your safety is our priority with experienced guides and well-planned itineraries
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                <CheckCircleIcon className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Sustainable Tourism</h3>
              <p className="text-gray-600">
                We practice responsible tourism that benefits local communities
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                <CheckCircleIcon className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Customizable Tours</h3>
              <p className="text-gray-600">
                Tailor-made itineraries to match your preferences and budget
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                <CheckCircleIcon className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock assistance during your entire journey
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-teal-600 mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-teal-600 mb-2">5000+</div>
            <div className="text-gray-600">Happy Travelers</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
            <div className="text-gray-600">Tour Packages</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-teal-600 mb-2">8</div>
            <div className="text-gray-600">States Covered</div>
          </div>
        </div>

        <div className="bg-teal-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-xl mb-8">
            Let us help you create unforgettable memories in Northeast India
          </p>
          <a
            href="/packages"
            className="inline-block bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Browse Tour Packages
          </a>
        </div>
      </div>
    </div>
  );
}
