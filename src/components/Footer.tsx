
import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/lovable-uploads/6fe61edd-5291-4a7c-ae2c-c7553d32a4b1.png"
                alt="RENAO ROBOTICS Logo"
                className="h-8"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Leading provider of advanced software solutions, industrial robotics, 
              and automation systems since 2023.
            </p>
            <p className="text-sm text-gray-400">
              GSTIN: 03ABFFR9260H1Z4
            </p>
            <div className="mt-4">
              <a 
                href="https://in.linkedin.com/company/renao-robotics-private-limited"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>Follow us on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-sm">roboticsrenao@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm">+91 8168158446</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                <span className="text-sm">
                  HNO. 975, Street no. 7, Dashmesh Nagar,<br />
                  Ludhiana, Punjab - 141003
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block text-sm text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="/about" className="block text-sm text-gray-300 hover:text-white transition-colors">About Us</a>
              <a href="/services" className="block text-sm text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="/contact" className="block text-sm text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2023 RENAO ROBOTICS PRIVATE LIMITED. All rights reserved. | www.renaorobotics.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
