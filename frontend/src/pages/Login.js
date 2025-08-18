import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [role, setRole] = useState('tenant');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: authenticate against backend
    // For demo: persist minimal auth state and role
    localStorage.setItem('auth', 'true');
    localStorage.setItem('role', role);
    localStorage.setItem('email', form.email || '');
    // navigate to role-specific dashboard
    navigate(`/dashboard/${role}`);
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input name="password" type="password" value={form.password} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Login as</label>
          <div className="role-toggle" role="tablist" aria-label="Login role">
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

        <button className="btn" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
