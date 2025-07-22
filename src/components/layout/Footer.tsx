import React from "react";
import { Phone, Mail } from "lucide-react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <h2 className="text-2xl text-blue-400 font-bold">MEDDICAL</h2>
            <p className="text-gray-400">
              Leading the Way in Medical Excellence, Trusted care.
            </p>
          </div>

          {/* Important Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Important Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Agreement
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Doctor
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Tel: 0277-051-937-256</li>
              <li>Email: fbdnews@digital.com</li>
              <li>Admissions from some place</li>
              <li>Some country</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-2 w-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-l"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white mt-12 pt-8 text-center text-gray-400 flex justify-between">
          <p>© 2021 Healthinfo name All Rights Reserved by PNTEC-LTD</p>
          <div className="flex justify-center space-x-3 mt-auto">
            <Facebook className="w-6 h-6 text-white bg-blue-400 p-1 rounded-xl hover:text-gray-600 cursor-pointer" />
            <Twitter className="w-6 h-6 text-white bg-blue-400 p-1 rounded-xl hover:text-gray-600 cursor-pointer" />
            <Instagram className="w-6 h-6 text-white bg-blue-400 p-1 rounded-xl hover:text-gray-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
