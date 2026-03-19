import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebase';
import LoadingSpinner from '../components/LoadingSpinner';
import { Package, ShoppingCart, Users, Sprout } from 'lucide-react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ products: 0, orders: 0, users: 0, farmers: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Run all count queries simultaneously
        const [productsSnap, ordersSnap, usersSnap, farmersSnap] = await Promise.all([
          getDocs(collection(db, 'products')),
          getDocs(collection(db, 'orders')),
          getDocs(collection(db, 'users')),
          getDocs(collection(db, 'farmers'))
        ]);
        
        setStats({
          products: productsSnap.size,
          orders: ordersSnap.size,
          users: usersSnap.size,
          farmers: farmersSnap.size
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <LoadingSpinner fullScreen />;

  return (
    <div className="container page-section">
      <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>Admin Dashboard</h1>
      
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        <div className="card" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ backgroundColor: '#ebf8ff', color: '#3182ce', padding: '1rem', borderRadius: '50%' }}>
            <Package size={32} />
          </div>
          <div>
            <h3 style={{ color: 'var(--text-light)', fontSize: '1rem', marginBottom: '0.25rem' }}>Total Products</h3>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', lineHeight: 1 }}>{stats.products}</div>
          </div>
        </div>
        
        <div className="card" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ backgroundColor: 'var(--light-green)', color: 'var(--primary-green)', padding: '1rem', borderRadius: '50%' }}>
            <ShoppingCart size={32} />
          </div>
          <div>
            <h3 style={{ color: 'var(--text-light)', fontSize: '1rem', marginBottom: '0.25rem' }}>Order Requests</h3>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', lineHeight: 1 }}>{stats.orders}</div>
          </div>
        </div>
        
        <div className="card" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ backgroundColor: 'rgba(151, 90, 22, 0.1)', color: 'var(--earth-brown)', padding: '1rem', borderRadius: '50%' }}>
            <Sprout size={32} />
          </div>
          <div>
            <h3 style={{ color: 'var(--text-light)', fontSize: '1rem', marginBottom: '0.25rem' }}>Farmers</h3>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', lineHeight: 1 }}>{stats.farmers}</div>
          </div>
        </div>
        
        <div className="card" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ backgroundColor: '#f3e8ff', color: '#805ad5', padding: '1rem', borderRadius: '50%' }}>
            <Users size={32} />
          </div>
          <div>
            <h3 style={{ color: 'var(--text-light)', fontSize: '1rem', marginBottom: '0.25rem' }}>Users</h3>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', lineHeight: 1 }}>{stats.users}</div>
          </div>
        </div>
      </div>
      
      <h2 style={{ marginBottom: '1.5rem' }}>Management Links</h2>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        <Link to="/admin/orders" className="card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'transform 0.2s', borderLeft: '4px solid var(--primary-green)' }}>
          <span style={{ fontSize: '1.25rem', fontWeight: '500' }}>Manage Orders</span>
          <ShoppingCart size={24} color="var(--primary-green)" />
        </Link>
        <Link to="/admin/products" className="card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'transform 0.2s', borderLeft: '4px solid #3182ce' }}>
          <span style={{ fontSize: '1.25rem', fontWeight: '500' }}>Manage Products</span>
          <Package size={24} color="#3182ce" />
        </Link>
        <Link to="/admin/farmers" className="card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'transform 0.2s', borderLeft: '4px solid var(--earth-brown)' }}>
          <span style={{ fontSize: '1.25rem', fontWeight: '500' }}>Manage Farmers</span>
          <Sprout size={24} color="var(--earth-brown)" />
        </Link>
      </div>
    </div>
  );
}
