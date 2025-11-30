import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <h1 className="text-2xl font-bold text-white">MyStore</h1>
          <p className="mt-3 text-sm">
            Best online shopping experience with premium quality products.
            Fast delivery. Secure payment.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white">Quick Links</h2>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Products</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h2 className="text-lg font-semibold text-white">Support</h2>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Returns</a></li>
            <li><a href="#" className="hover:text-white">Shipping</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h2 className="text-lg font-semibold text-white">Follow Us</h2>
          <ul className="mt-3 space-y-2">
            <li className="hover:text-white">Facebook</li>
            <li className="hover:text-white">Instagram</li>
            <li className="hover:text-white">Twitter</li>

          </ul>
          <div className="flex items-center gap-4 mt-4">
            <Facebook className="cursor-pointer hover:text-white" />
            <Instagram className="cursor-pointer hover:text-white" />
            <Twitter className="cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>

      <hr className="border-gray-700 mt-10" />

      {/* Bottom Text */}
      <p className="text-center text-sm text-gray-400 mt-6">
        © {new Date().getFullYear()} Online Clothes. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
