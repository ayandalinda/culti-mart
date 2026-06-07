import React from 'react';

export default function CTA() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
      <a 
        href="#download" 
        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition-all duration-200 flex items-center justify-center min-w-[200px]"
      >
        Download the App
      </a>
      <a 
        href="https://wa.me/yourwhatsappnumber" 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-6 py-3 bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-medium rounded-lg shadow-sm transition-all duration-200 flex items-center justify-center min-w-[200px]"
      >
        Order via WhatsApp
      </a>
    </div>
  );
}
