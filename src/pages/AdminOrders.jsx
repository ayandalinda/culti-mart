import React, { useState, useEffect } from 'react';
import { collection, query, getDocs, doc, updateDoc, orderBy } from 'firebase/firestore';
import { db } from '../services/firebase';
import LoadingSpinner from '../components/LoadingSpinner';

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Assume sorting by createdAt
        const q = query(collection(db, 'orders'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const ordersData = querySnapshot.docs.map(d => ({ id: d.id, ...d.data() }));
        setOrders(ordersData);
      } catch (error) {
        console.error("Error fetching orders:", error);
        // Fallback if index missing for sorting
        try {
            const qFallback = query(collection(db, 'orders'));
            const fallbackSnap = await getDocs(qFallback);
            const fallbackData = fallbackSnap.docs.map(d => ({ id: d.id, ...d.data() }));
            setOrders(fallbackData.sort((a,b) => (b.createdAt || '').localeCompare(a.createdAt || '')));
        } catch (err2) {
            console.error(err2);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleUpdateStatus = async (id, newStatus) => {
    try {
      await updateDoc(doc(db, 'orders', id), { status: newStatus });
      setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Pending': return { bg: '#feebc8', color: '#c05621' }; // Orange
      case 'Contacted': return { bg: '#ebf8ff', color: '#3182ce' }; // Blue
      case 'Completed': return { bg: '#c6f6d5', color: '#276749' }; // Green
      default: return { bg: '#e2e8f0', color: '#4a5568' }; // Gray
    }
  };

  if (loading) return <LoadingSpinner fullScreen />;

  return (
    <div className="container page-section">
      <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>Manage Orders</h1>

      <div className="card" style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead style={{ backgroundColor: '#f7fafc', borderBottom: '1px solid var(--border-color)' }}>
            <tr>
              <th style={{ padding: '1rem', fontWeight: '500' }}>Date</th>
              <th style={{ padding: '1rem', fontWeight: '500' }}>Buyer Name</th>
              <th style={{ padding: '1rem', fontWeight: '500' }}>Contact</th>
              <th style={{ padding: '1rem', fontWeight: '500' }}>Product ID</th>
              <th style={{ padding: '1rem', fontWeight: '500' }}>Qty</th>
              <th style={{ padding: '1rem', fontWeight: '500' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(o => {
              const statusStyle = getStatusColor(o.status);
              return (
                <tr key={o.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '1rem' }}>
                    {o.createdAt ? new Date(o.createdAt).toLocaleDateString() : 'N/A'}
                  </td>
                  <td style={{ padding: '1rem', fontWeight: '500' }}>{o.buyerName}</td>
                  <td style={{ padding: '1rem' }}>{o.buyerPhone}</td>
                  <td style={{ padding: '1rem', fontSize: '0.875rem', color: 'var(--text-light)' }}>
                    {o.productId.substring(0, 8)}...
                  </td>
                  <td style={{ padding: '1rem', fontWeight: 'bold' }}>{o.quantity}</td>
                  <td style={{ padding: '1rem' }}>
                    <select 
                      value={o.status || 'Pending'} 
                      onChange={(e) => handleUpdateStatus(o.id, e.target.value)}
                      style={{
                        padding: '0.25rem 0.5rem',
                        borderRadius: '1rem',
                        border: 'none',
                        backgroundColor: statusStyle.bg,
                        color: statusStyle.color,
                        fontWeight: 'bold',
                        fontSize: '0.875rem',
                        cursor: 'pointer',
                        outline: 'none'
                      }}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                </tr>
              );
            })}
            {orders.length === 0 && (
              <tr>
                <td colSpan="6" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-light)' }}>
                  No order requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
