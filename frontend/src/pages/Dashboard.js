import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function TenantView({ onLogout }) {
  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Tenant Dashboard</h2>
        <div>
          <button className="btn secondary" onClick={onLogout}>Logout</button>
        </div>
      </div>
      <p className="lead">Your verifications, rental history, and applications in one place.</p>
      <div className="dashboard-grid" style={{ marginTop: '0.8rem' }}>
        <div className="card">
          <h4>Verification Status</h4>
          <p>Profile verified: <strong>Pending</strong></p>
        </div>
        <div className="card">
          <h4>Applications</h4>
          <p>No active applications</p>
        </div>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <Link to="/register" className="btn secondary">Edit Profile</Link>
      </div>
    </div>
  );
}

function LandlordView({ onLogout }) {
  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Landlord Dashboard</h2>
        <div>
          <button className="btn secondary" onClick={onLogout}>Logout</button>
        </div>
      </div>
      <p className="lead">Manage properties, view tenant verifications, and get insurance options.</p>
      <div className="dashboard-grid" style={{ marginTop: '0.8rem' }}>
        <div className="card">
          <h4>Properties</h4>
          <p>You have <strong>0</strong> listed properties</p>
        </div>
        <div className="card">
          <h4>Recent Verifications</h4>
          <p>No recent verifications</p>
        </div>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <Link to="/register" className="btn secondary">Add Property</Link>
      </div>
    </div>
  );
}

function Dashboard() {
  const { role } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    if (!auth || auth !== 'true') {
      // not authenticated — redirect to login
      navigate('/login', { replace: true });
    }
  }, [navigate]);

  const storedRole = localStorage.getItem('role');
  const userRole = role || storedRole || null;

  const handleLogout = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    navigate('/', { replace: true });
  };

  if (!userRole) {
    return (
      <div className="container center">
        <h2>Choose Dashboard</h2>
        <p className="lead">Select whether you want the Tenant or Landlord dashboard.</p>
        <div style={{ display: 'flex', gap: '0.8rem', marginTop: '1rem', justifyContent: 'center' }}>
          <Link to="/dashboard/tenant" className="btn">Tenant</Link>
          <Link to="/dashboard/landlord" className="btn secondary">Landlord</Link>
        </div>
      </div>
    );
  }

  if (userRole === 'tenant') return <TenantView onLogout={handleLogout} />;
  if (userRole === 'landlord') return <LandlordView onLogout={handleLogout} />;

  return (
    <div className="container center">
      <h2>Unknown role</h2>
      <p className="lead">Role "{userRole}" is not recognized.</p>
      <Link to="/" className="btn secondary">Home</Link>
    </div>
  );
}

export default Dashboard;
