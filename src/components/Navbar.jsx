import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Sprout, LogOut, User } from 'lucide-react';

export default function Navbar() {
  const { currentUser, isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <nav style={{ backgroundColor: 'var(--primary-green)', color: 'white', padding: '1rem 0', boxShadow: 'var(--shadow-md)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.5rem', letterSpacing: '-0.5px' }}>
          <Sprout size={28} />
          Culti Mart
        </Link>
        
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Link to="/" style={{ fontWeight: '500', transition: 'opacity 0.2s', opacity: 0.9 }}>Home</Link>
          <Link to="/marketplace" style={{ fontWeight: '500', transition: 'opacity 0.2s', opacity: 0.9 }}>Marketplace</Link>
          
          {currentUser ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {isAdmin && (
                <Link to="/admin" style={{ fontWeight: '500', backgroundColor: 'rgba(255,255,255,0.2)', padding: '0.3rem 0.8rem', borderRadius: 'var(--radius-md)', transition: 'background 0.2s' }}>
                  Admin
                </Link>
              )}
              <button onClick={handleLogout} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontWeight: '500', fontSize: '1rem', opacity: 0.9 }}>
                <LogOut size={18} /> Logout
              </button>
            </div>
          ) : (
            <Link to="/login" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: '500', backgroundColor: 'var(--white)', color: 'var(--primary-green)', padding: '0.5rem 1.25rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', transition: 'transform 0.2s' }}>
              <User size={18} /> Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
