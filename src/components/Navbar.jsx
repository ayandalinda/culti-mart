import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, User, Menu, X, ArrowRight } from 'lucide-react';
import logo from '../images/cultimartlogo.svg';

export default function Navbar() {
  const { currentUser, isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-6 transition-all duration-300">
      <nav className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${scrolled ? 'glass-nav shadow-md py-3 px-6' : 'bg-transparent py-4 px-2'}`}>
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center backdrop-blur-md border border-black/5 group-hover:bg-black/10 transition-all">
              <img src={logo} alt="Culti Mart Logo" className="h-6 w-auto" />
            </div>
            <span className="font-bold text-xl text-gray-900 tracking-tight">
              Culti Mart
            </span>
          </Link>

          {/* Centered Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {['Home', 'Marketplace', 'About', 'Impact'].map((item) => (
              <Link 
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                className="px-5 py-2 rounded-full text-sm font-semibold text-gray-600 hover:text-gray-900 hover:bg-black/5 transition-all"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Actions & CTA */}
          <div className="hidden lg:flex items-center space-x-3 shrink-0">
            {currentUser ? (
              <div className="flex items-center gap-3">
                {isAdmin && (
                  <Link to="/admin" className="px-4 py-2 rounded-full text-sm font-semibold text-gray-600 hover:text-gray-900 hover:bg-black/5 transition-all">
                    Admin
                  </Link>
                )}
                <button onClick={handleLogout} className="w-10 h-10 rounded-full bg-black/5 border border-black/5 flex items-center justify-center text-gray-600 hover:text-red-500 hover:bg-black/10 transition-all">
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
              <Link to="/login" className="px-5 py-2 rounded-full text-sm font-semibold text-gray-600 hover:text-gray-900 hover:bg-black/5 transition-all">
                Sign In
              </Link>
            )}
            <a href="#download" className="group flex items-center gap-2 px-6 py-2.5 bg-[#00df81] hover:bg-[#00c974] text-black text-sm font-bold rounded-full shadow-[0_4px_14px_rgba(0,223,129,0.3)] hover:shadow-[0_6px_20px_rgba(0,223,129,0.4)] transition-all">
              Get App <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 rounded-full bg-black/5 border border-black/5 flex items-center justify-center text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-all duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-10 right-8 text-gray-900 p-2">
            <X size={32} />
          </button>
          
          {['Home', 'Marketplace', 'About', 'Impact'].map((item) => (
            <Link 
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl font-bold text-gray-900 hover:text-[#00df81] transition-colors"
            >
              {item}
            </Link>
          ))}
          
          <div className="w-full max-w-sm h-px bg-black/10 my-4"></div>
          
          {currentUser ? (
            <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="text-xl font-semibold text-red-500">
              Sign Out
            </button>
          ) : (
            <Link to="/login" onClick={() => setIsMenuOpen(false)} className="text-xl font-semibold text-gray-600">
              Sign In
            </Link>
          )}
          
          <a href="#download" onClick={() => setIsMenuOpen(false)} className="w-full max-w-sm py-4 bg-[#00df81] text-black text-center text-lg font-bold rounded-full mt-4">
            Download App
          </a>
        </div>
      </div>
    </div>
  );
}
