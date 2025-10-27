import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-teal-400">NE</span> Tourism
            </h3>
            <p className="text-gray-400">
              Explore the incredible beauty and rich culture of Northeast India with our curated tour packages.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Destinations</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Meghalaya</li>
              <li>Assam</li>
              <li>Arunachal Pradesh</li>
              <li>Sikkim</li>
              <li>Nagaland</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <FontAwesomeIcon icon={faYoutube} className="h-6 w-6" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Email: info@netourism.com<br />
              Phone: +91-1234567890
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} NE Tourism. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
