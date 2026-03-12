import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3
              className="
    text-2xl font-bold mb-4 
    bg-gradient-to-r from-[#0CA7E6] via-[#4EE3FF] to-[#003366] 
    bg-clip-text text-transparent
    tracking-wide
  "
            >
              PT. Tech Solusions Group
            </h3>
            <p className="text-gray-400 mb-4">
              Crafting innovative software solutions that transform businesses
              and drive digital success.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[#1877F2] hover:text-blue-400 transition-colors"
              >
                <Facebook size={20} />
              </a>

              <a
                href="#"
                className="text-[#C13584] hover:text-blue-400 transition-colors"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://wa.me/6285746358657"
                className="text-green-400 hover:text-blue-400 transition-colors"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-[#0ca7e6] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-[#0ca7e6] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-[#0ca7e6]transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-gray-400 hover:text-[#0ca7e6] transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-red-400 hover:text-[#0ca7e6] transition-colors"
                >
                  Terms & Policies
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-[#0ca7e6] transition-colors">
                Web Development
              </li>
              <li className="text-gray-400 hover:text-[#0ca7e6] transition-colors">
                Mobile Apps
              </li>
              <li className="text-gray-400 hover:text-[#0ca7e6] transition-colors">
                SEO Solutions
              </li>
              <li className="text-gray-400 hover:text-[#0ca7e6] transition-colors">
                UI/UX Design
              </li>
              <li className="text-gray-400 hover:text-[#0ca7e6] transition-colors">
                Logo Design
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-gray-400">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>123 Tech Street, Silicon Valley, CA 94025</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone size={20} />
                <a
                  href="tel:+6285746358657"
                  className="hover:text-[#0ca7e6] transition-colors"
                >
                  <span>+62 857 4635 8657</span>
                </a>
              </li>
              <li className="group list-none">
                <a
                  href="mailto:tsolusions@gmail.com"
                  className="inline-flex items-center gap-3 text-gray-400 transition-all duration-200 ease-in-out hover:text-[#0ca7e6]"
                >
                  {/* Icon Container with fixed centering */}
                  <span className="flex items-center justify-center">
                    <Mail size={20} strokeWidth={1.5} />
                  </span>

                  {/* Text with subtle tracking for professionalism */}
                  <span className="text-sm font-medium tracking-wide">
                    tsolusions@gmail.com
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 PT. Tech Solusions Group . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
