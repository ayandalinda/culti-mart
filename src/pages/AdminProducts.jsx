import React, { useState, useEffect } from 'react';
import { collection, query, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../services/firebase';
import LoadingSpinner from '../components/LoadingSpinner';
import { Plus, Trash2 } from 'lucide-react';

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  
  // New Product Form State
  const [formData, setFormData] = useState({
    name: '', category: 'Vegetables', price: '', quantity: '', imageUrl: '', location: '', farmerName: '', description: '', unit: 'lb'
  });

  const categories = ['Vegetables', 'Fruits', 'Grains', 'Dairy', 'Meat', 'Other'];

  const fetchProducts = async () => {
    try {
      const q = query(collection(db, 'products'));
      const querySnapshot = await getDocs(q);
      const productsData = querySnapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      setProducts(productsData);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, 'products'), {
        ...formData,
        price: parseFloat(formData.price),
        createdAt: new Date().toISOString()
      });
      setShowAddForm(false);
      setFormData({ name: '', category: 'Vegetables', price: '', quantity: '', imageUrl: '', location: '', farmerName: '', description: '', unit: 'lb' });
      await fetchProducts();
    } catch (error) {
      console.error("Error adding product:", error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteDoc(doc(db, 'products', id));
        setProducts(products.filter(p => p.id !== id));
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  if (loading && products.length === 0) return <LoadingSpinner fullScreen />;

  return (
    <div className="container page-section">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ margin: 0, fontSize: '2.5rem' }}>Manage Products</h1>
        <button 
          className="btn btn-primary" 
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? 'Cancel' : <><Plus size={20} /> Add Product</>}
        </button>
      </div>

      {showAddForm && (
        <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Add New Product</h2>
          <form onSubmit={handleAddProduct} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1rem' }}>
            <div className="input-group">
              <label className="input-label">Name</label>
              <input type="text" className="input-field" name="name" value={formData.name} onChange={handleInputChange} required />
            </div>
            <div className="input-group">
              <label className="input-label">Category</label>
              <select className="input-field" name="category" value={formData.category} onChange={handleInputChange}>
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="input-group">
              <label className="input-label">Price</label>
              <input type="number" step="0.01" className="input-field" name="price" value={formData.price} onChange={handleInputChange} required />
            </div>
            <div className="input-group">
              <label className="input-label">Quantity Display (e.g. "50 lbs")</label>
              <input type="text" className="input-field" name="quantity" value={formData.quantity} onChange={handleInputChange} required />
            </div>
            <div className="input-group">
              <label className="input-label">Pricing Unit (e.g. "lb", "box")</label>
              <input type="text" className="input-field" name="unit" value={formData.unit} onChange={handleInputChange} required />
            </div>
            <div className="input-group">
              <label className="input-label">Farmer Name</label>
              <input type="text" className="input-field" name="farmerName" value={formData.farmerName} onChange={handleInputChange} required />
            </div>
            <div className="input-group">
              <label className="input-label">Location</label>
              <input type="text" className="input-field" name="location" value={formData.location} onChange={handleInputChange} required />
            </div>
            <div className="input-group" style={{ gridColumn: '1 / -1' }}>
              <label className="input-label">Image URL</label>
              <input type="url" className="input-field" name="imageUrl" value={formData.imageUrl} onChange={handleInputChange} placeholder="https://..." />
            </div>
            <div className="input-group" style={{ gridColumn: '1 / -1' }}>
              <label className="input-label">Description</label>
              <textarea className="input-field" name="description" value={formData.description} onChange={handleInputChange} required rows="3"></textarea>
            </div>
            <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Saving...' : 'Save Product'}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="card" style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead style={{ backgroundColor: '#f7fafc', borderBottom: '1px solid var(--border-color)' }}>
            <tr>
              <th style={{ padding: '1rem', fontWeight: '500' }}>Product</th>
              <th style={{ padding: '1rem', fontWeight: '500' }}>Category</th>
              <th style={{ padding: '1rem', fontWeight: '500' }}>Price</th>
              <th style={{ padding: '1rem', fontWeight: '500' }}>Farmer</th>
              <th style={{ padding: '1rem', fontWeight: '500', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                    {p.imageUrl && <img src={p.imageUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                  </div>
                  <span style={{ fontWeight: '500' }}>{p.name}</span>
                </td>
                <td style={{ padding: '1rem' }}>{p.category}</td>
                <td style={{ padding: '1rem' }}>${p.price} / {p.unit}</td>
                <td style={{ padding: '1rem' }}>{p.farmerName}</td>
                <td style={{ padding: '1rem', textAlign: 'right' }}>
                  <button onClick={() => handleDelete(p.id)} style={{ background: 'none', border: 'none', color: 'var(--error)', cursor: 'pointer', padding: '0.5rem' }}>
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="5" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-light)' }}>
                  No products found. Add some to get started!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
