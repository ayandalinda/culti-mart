import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import logo from '../images/cultimartlogo.svg';

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-black/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00df81]/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & About (Takes up more space) */}
          <div className="lg:col-span-5 space-y-6 pr-8">
            <Link to="/" className="flex items-center gap-3 font-bold text-2xl text-gray-900 tracking-tight">
              <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center backdrop-blur-md border border-black/5">
                <img src={logo} alt="Culti Mart Logo" className="h-7 w-auto" />
              </div>
              Culti Mart
            </Link>
            <p className="text-gray-600 font-medium text-lg leading-relaxed max-w-sm">
              The first truly decentralized agricultural marketplace in Africa. Built for farmers, designed for everyone.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-black/5 border border-black/5 flex items-center justify-center text-gray-600 hover:bg-black/10 hover:text-[#059669] transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black/5 border border-black/5 flex items-center justify-center text-gray-600 hover:bg-black/10 hover:text-[#059669] transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black/5 border border-black/5 flex items-center justify-center text-gray-600 hover:bg-black/10 hover:text-[#059669] transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-widest">Platform</h3>
            <ul className="space-y-4">
              <li><Link to="/marketplace" className="text-gray-600 font-medium text-base hover:text-[#059669] transition-colors">Marketplace</Link></li>
              <li><Link to="/farmers" className="text-gray-600 font-medium text-base hover:text-[#059669] transition-colors">For Farmers</Link></li>
              <li><Link to="/buyers" className="text-gray-600 font-medium text-base hover:text-[#059669] transition-colors">For Buyers</Link></li>
              <li><Link to="/pricing" className="text-gray-600 font-medium text-base hover:text-[#059669] transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-widest">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-600 font-medium text-base hover:text-[#059669] transition-colors">About Us</Link></li>
              <li><Link to="/impact" className="text-gray-600 font-medium text-base hover:text-[#059669] transition-colors">Our Impact</Link></li>
              <li><Link to="/careers" className="text-gray-600 font-medium text-base hover:text-[#059669] transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-600 font-medium text-base hover:text-[#059669] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-widest">Stay Updated</h3>
            <p className="text-gray-600 font-medium text-sm mb-4">Get the latest news and updates from our fields.</p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-black/5 border border-black/5 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:border-[#059669] transition-colors placeholder:text-gray-500 font-medium" 
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#00df81] rounded-lg flex items-center justify-center text-white hover:bg-[#00c974] transition-colors shadow-sm">
                <ArrowRight size={16} />
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 font-medium text-sm">
            &copy; {new Date().getFullYear()} Culti Mart by Enactus UKZN. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500 font-medium">
            <Link to="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
