import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, collection, addDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
import LoadingSpinner from '../components/LoadingSpinner';
import { MapPin, ArrowLeft, Package, User } from 'lucide-react';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  
  // Form State
  const [buyerName, setBuyerName] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [orderQuantity, setOrderQuantity] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, 'products', id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError('Product not found');
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError('Failed to load product details');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    setSubmitLoading(true);
    setError('');
    
    try {
      if (parseInt(orderQuantity) <= 0) {
        throw new Error('Quantity must be greater than 0');
      }
      
      await addDoc(collection(db, 'orders'), {
        productId: product.id,
        buyerName,
        buyerPhone,
        quantity: orderQuantity,
        status: 'Pending',
        createdAt: new Date().toISOString()
      });
      
      setSuccess(true);
      setBuyerName('');
      setBuyerPhone('');
      setOrderQuantity('');
    } catch (err) {
      console.error("Error submitting order:", err);
      setError(err.message || 'Failed to submit order request. Please try again.');
    } finally {
      setSubmitLoading(false);
    }
  };

  if (loading) return <LoadingSpinner fullScreen />;

  if (error || !product) {
    return (
      <div className="container page-section" style={{ textAlign: 'center' }}>
        <h2 style={{ color: 'var(--error)' }}>{error || 'Product not found'}</h2>
        <button className="btn btn-outline" onClick={() => navigate('/marketplace')} style={{ marginTop: '1rem' }}>
          Back to Marketplace
        </button>
      </div>
    );
  }

  return (
    <div className="container page-section">
      <button 
        className="btn" 
        style={{ background: 'none', border: 'none', color: 'var(--text-light)', padding: 0, marginBottom: '2rem' }}
        onClick={() => navigate('/marketplace')}
      >
        <ArrowLeft size={20} /> Back to Marketplace
      </button>

      <div className="grid" style={{ gridTemplateColumns: 'minmax(0, 1fr)', gap: '3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          {/* Image */}
          <div style={{ backgroundColor: '#e2e8f0', borderRadius: 'var(--radius-lg)', overflow: 'hidden', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {product.imageUrl ? (
              <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <span style={{ color: '#a0aec0', fontSize: '1.25rem' }}>No Image Available</span>
            )}
          </div>

          {/* Details & Form */}
          <div>
            <div style={{ display: 'inline-block', backgroundColor: 'var(--light-green)', color: 'var(--primary-green)', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.875rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              {product.category}
            </div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{product.name}</h1>
            
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--dark-green)', marginBottom: '1.5rem' }}>
              ${parseFloat(product.price).toFixed(2)} <span style={{ fontSize: '1rem', color: 'var(--text-light)', fontWeight: 'normal' }}>per {product.unit || 'unit'}</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-dark)' }}>
                <Package size={20} color="var(--primary-green)" />
                <span style={{ fontWeight: '500' }}>Available:</span> {product.quantity}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-dark)' }}>
                <User size={20} color="var(--primary-green)" />
                <span style={{ fontWeight: '500' }}>Farmer:</span> {product.farmerName}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-dark)' }}>
                <MapPin size={20} color="var(--primary-green)" />
                <span style={{ fontWeight: '500' }}>Location:</span> {product.location}
              </div>
            </div>

            <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem' }}>Description</h3>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              {product.description || 'No description provided.'}
            </p>

            {/* Order Form */}
            <div className="card" style={{ padding: '2rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', boxShadow: 'none' }}>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Request Order</h3>
              
              {success ? (
                <div style={{ backgroundColor: 'var(--light-green)', color: 'var(--dark-green)', padding: '1.5rem', borderRadius: 'var(--radius-md)', textAlign: 'center', border: '1px solid #c6f6d5' }}>
                  <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>Request Sent!</h4>
                  <p style={{ margin: 0, opacity: 0.9 }}>The Culti Mart team has received your order and will contact you shortly.</p>
                  <button className="btn btn-outline" style={{ marginTop: '1.5rem', backgroundColor: 'white' }} onClick={() => setSuccess(false)}>
                    Make another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitOrder}>
                  {error && <div style={{ color: 'var(--error)', marginBottom: '1rem', fontSize: '0.875rem', padding: '0.75rem', backgroundColor: '#fff5f5', borderRadius: '0.25rem', border: '1px solid #feb2b2' }}>{error}</div>}
                  
                  <div className="input-group">
                    <label className="input-label">Business / Your Name</label>
                    <input 
                      type="text" 
                      className="input-field" 
                      value={buyerName}
                      onChange={(e) => setBuyerName(e.target.value)}
                      required
                      placeholder="e.g. John's Restaurant"
                    />
                  </div>
                  
                  <div className="input-group">
                    <label className="input-label">Phone Number</label>
                    <input 
                      type="tel" 
                      className="input-field" 
                      value={buyerPhone}
                      onChange={(e) => setBuyerPhone(e.target.value)}
                      required
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  
                  <div className="input-group" style={{ marginBottom: '2rem' }}>
                    <label className="input-label">Quantity Needed</label>
                    <input 
                      type="number" 
                      className="input-field" 
                      value={orderQuantity}
                      onChange={(e) => setOrderQuantity(e.target.value)}
                      required
                      placeholder="e.g. 50"
                      min="1"
                      max={product.quantity}
                    />
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      Max available: <span style={{ fontWeight: 'bold' }}>{product.quantity}</span>
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    style={{ width: '100%', padding: '0.875rem 1rem', fontSize: '1.125rem' }}
                    disabled={submitLoading}
                  >
                    {submitLoading ? 'Sending Request...' : 'Submit Order Request'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
