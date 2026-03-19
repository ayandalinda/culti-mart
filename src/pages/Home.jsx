import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, ShieldCheck, Truck } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        backgroundColor: 'var(--dark-green)', 
        color: 'white', 
        padding: '5rem 1rem', 
        textAlign: 'center',
        background: 'linear-gradient(rgba(39, 103, 73, 0.9), rgba(39, 103, 73, 0.9)), url("https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80") center/cover'
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ color: 'white', fontSize: '3.5rem', marginBottom: '1.5rem', letterSpacing: '-1px' }}>
            Fresh Produce Direct from Local Farmers
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '2.5rem', lineHeight: 1.6 }}>
            The premier B2B marketplace connecting restaurants, food vendors, and local stores with quality agricultural products.
          </p>
          <Link to="/marketplace" className="btn btn-primary" style={{ backgroundColor: 'var(--light-earth)', color: 'var(--dark-green)', fontSize: '1.125rem', padding: '0.75rem 2rem' }}>
            Browse Marketplace <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="page-section bg-white" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Why Choose Culti Mart?</h2>
            <p style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}>We ensure transparency, quality, and fair prices for both farmers and buyers.</p>
          </div>
          
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="card" style={{ padding: '2.5rem 2rem', textAlign: 'center', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'inline-flex', backgroundColor: 'var(--light-green)', color: 'var(--primary-green)', padding: '1.5rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
                <Leaf size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Farm Fresh Quality</h3>
              <p style={{ color: 'var(--text-light)' }}>Produce sourced directly from local farmers, ensuring maximum freshness and nutritional value.</p>
            </div>
            
            <div className="card" style={{ padding: '2.5rem 2rem', textAlign: 'center', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'inline-flex', backgroundColor: 'rgba(151, 90, 22, 0.1)', color: 'var(--earth-brown)', padding: '1.5rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
                <ShieldCheck size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Vetted Suppliers</h3>
              <p style={{ color: 'var(--text-light)' }}>Every farmer on our platform is personally vetted by the Culti Mart team for quality assurance.</p>
            </div>
            
            <div className="card" style={{ padding: '2.5rem 2rem', textAlign: 'center', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'inline-flex', backgroundColor: '#ebf8ff', color: '#3182ce', padding: '1.5rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
                <Truck size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Simplified Ordering</h3>
              <p style={{ color: 'var(--text-light)' }}>Browse available inventory and request orders with just a few clicks. We handle the rest.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-section" style={{ backgroundColor: 'var(--light-green)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Ready to source better ingredients?</h2>
          <p style={{ color: 'var(--text-light)', marginBottom: '2rem', fontSize: '1.125rem' }}>
            Join our network of buyers and get access to the freshest local produce.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/marketplace" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem' }}>
              View Products
            </Link>
            <Link to="/login" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem', backgroundColor: 'white' }}>
              Login to Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
