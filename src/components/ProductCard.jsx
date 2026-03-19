import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: '200px', backgroundColor: '#e2e8f0', position: 'relative', overflow: 'hidden' }}>
        {product.imageUrl ? (
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a0aec0' }}>
            No Image Available
          </div>
        )}
        <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', backgroundColor: 'var(--white)', padding: '0.2rem 0.6rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--dark-green)' }}>
          {product.category}
        </div>
      </div>
      
      <div style={{ padding: '1.25rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>{product.name}</h3>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-green)' }}>
            ${parseFloat(product.price).toFixed(2)}
          </span>
          <span style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>
            {product.quantity} avail.
          </span>
        </div>
        
        <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center', color: 'var(--text-light)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
          <MapPin size={16} />
          {product.location}
        </div>
        
        <div style={{ marginTop: 'auto' }}>
          <Link 
            to={`/product/${product.id}`} 
            className="btn btn-outline" 
            style={{ width: '100%', justifyContent: 'center' }}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
