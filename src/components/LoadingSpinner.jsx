import React from 'react';

export default function LoadingSpinner({ fullScreen = false }) {
  const content = (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
      <div className="spinner" style={{ width: '40px', height: '40px', borderWidth: '4px' }}></div>
      <p style={{ color: 'var(--text-light)', fontWeight: '500' }}>Loading fresh produce...</p>
    </div>
  );

  if (fullScreen) {
    return (
      <div style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        {content}
      </div>
    );
  }
  
  return content;
}
