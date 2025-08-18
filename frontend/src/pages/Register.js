import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '', phone: '' });
  const [role, setRole] = useState('tenant');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send form + role to backend
    // For demo: persist minimal auth state and role in localStorage
    localStorage.setItem('auth', 'true');
    localStorage.setItem('role', role);
    localStorage.setItem('username', form.username || '');
    localStorage.setItem('phone', form.phone || '');
    // navigate to role-specific dashboard
    navigate(`/dashboard/${role}`);
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input name="username" value={form.username} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input name="password" type="password" value={form.password} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Register as</label>
          <div className="role-toggle" role="tablist" aria-label="Register role">
            <button
              type="button"
              className={`role-option${role === 'tenant' ? ' active' : ''}`}
              aria-pressed={role === 'tenant'}
              onClick={() => setRole('tenant')}
            >
              Tenant
            </button>
            <button
              type="button"
              className={`role-option${role === 'landlord' ? ' active' : ''}`}
              aria-pressed={role === 'landlord'}
              onClick={() => setRole('landlord')}
            >
              Landlord
            </button>
          </div>
          <input type="hidden" name="role" value={role} />
        </div>

        <button className="btn" type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

