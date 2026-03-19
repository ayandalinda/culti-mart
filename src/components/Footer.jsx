import React from 'react';
import { Sprout } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a202c', color: 'white', padding: '3rem 0', marginTop: 'auto' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-green)', marginBottom: '1rem' }}>
          <Sprout size={32} />
          <h2 style={{ color: 'white', margin: 0, fontSize: '1.5rem' }}>Culti Mart</h2>
        </div>
        <p style={{ opacity: 0.7, maxWidth: '400px', marginBottom: '2rem' }}>
          Connecting small-scale farmers directly with local businesses, restaurants, and food vendors for the freshest produce.
        </p>
        <div style={{ fontSize: '0.875rem', color: '#a0aec0', borderTop: '1px solid #2d3748', paddingTop: '1.5rem', width: '100%', maxWidth: '600px' }}>
          &copy; {new Date().getFullYear()} Culti Mart. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
