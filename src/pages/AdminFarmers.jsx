import React, { useState, useEffect } from 'react';
import { collection, query, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
import LoadingSpinner from '../components/LoadingSpinner';
import { Plus } from 'lucide-react';

export default function AdminFarmers() {
  const [farmers, setFarmers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '', location: '', contact: '', produceType: ''
  });

  const fetchFarmers = async () => {
    try {
      const q = query(collection(db, 'farmers'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      setFarmers(data);
    } catch (error) {
      console.error("Error fetching farmers:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFarmers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddFarmer = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, 'farmers'), formData);
      setShowAddForm(false);
      setFormData({ name: '', location: '', contact: '', produceType: '' });
      await fetchFarmers();
    } catch (error) {
      console.error("Error adding farmer:", error);
      setLoading(false);
    }
  };

  if (loading && farmers.length === 0) return <LoadingSpinner fullScreen />;

  return (
    <div className="container page-section">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ margin: 0, fontSize: '2.5rem' }}>Manage Farmers</h1>
        <button 
          className="btn btn-primary" 
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? 'Cancel' : <><Plus size={20} /> Add Farmer</>}
        </button>
      </div>

      {showAddForm && (
        <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Add New Farmer Profile</h2>
          <form onSubmit={handleAddFarmer} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1rem' }}>
            <div className="input-group">
              <label className="input-label">Full Name / Farm Name</label>
              <input type="text" className="input-field" name="name" value={formData.name} onChange={handleInputChange} required />
            </div>
            <div className="input-group">
              <label className="input-label">Location</label>
              <input type="text" className="input-field" name="location" value={formData.location} onChange={handleInputChange} required />
            </div>
            <div className="input-group">
              <label className="input-label">Contact Information</label>
              <input type="text" className="input-field" name="contact" value={formData.contact} onChange={handleInputChange} required placeholder="Phone or Email" />
            </div>
            <div className="input-group">
              <label className="input-label">Primary Produce Type</label>
              <input type="text" className="input-field" name="produceType" value={formData.produceType} onChange={handleInputChange} required placeholder="e.g. Organic Vegetables" />
            </div>
            
            <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Saving...' : 'Save Profile'}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="card" style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead style={{ backgroundColor: '#f7fafc', borderBottom: '1px solid var(--border-color)' }}>
            <tr>
              <th style={{ padding: '1rem', fontWeight: '500' }}>Name</th>
              <th style={{ padding: '1rem', fontWeight: '500' }}>Location</th>
              <th style={{ padding: '1rem', fontWeight: '500' }}>Contact</th>
              <th style={{ padding: '1rem', fontWeight: '500' }}>Produce Type</th>
            </tr>
          </thead>
          <tbody>
            {farmers.map(f => (
              <tr key={f.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '1rem', fontWeight: '500' }}>{f.name}</td>
                <td style={{ padding: '1rem' }}>{f.location}</td>
                <td style={{ padding: '1rem' }}>{f.contact}</td>
                <td style={{ padding: '1rem' }}>{f.produceType}</td>
              </tr>
            ))}
            {farmers.length === 0 && (
              <tr>
                <td colSpan="4" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-light)' }}>
                  No farmer profiles found. Add some to get started!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
