import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function Home() {
  return (
    <div className="template-bg">
      <div className="template-main">
        <div className="template-content">
          {/* Hero */}
          <header className="template-hero">
            <div className="template-hero-left">
              <div className="template-logo-row">
                <img className="template-logo" src="/icons/rocket.svg" alt="DwellVerify" />
                <span className="template-brand">DwellVerify</span>
              </div>
              <h1 className="template-title">
                <span className="template-title-highlight">Tenant Verification</span>
                <span className="template-title-main">for Modern Renting</span>
              </h1>
              <h2 className="template-subtitle">
                AI-powered, multi-source verification and trust-building for landlords and tenants.<br />
                Lower deposits. Fewer disputes. More confidence.
              </h2>
              <div className="template-cta-row">
                <Link to="/register" className="template-btn template-btn-primary">Get Started</Link>
                <Link to="/login" className="template-btn template-btn-secondary">Sign In</Link>
              </div>
              <div className="template-note">
                <span>Trusted by property owners &amp; tenants across India</span>
              </div>
            </div>
            <div className="template-hero-right">
              <img src="/images/object/12.svg" alt="Verification Illustration" className="template-hero-img" />
            </div>
          </header>

          {/* Info Cards Section */}
          <main className="template-info-cards">
            <div className="template-card-row">
              <div className="template-card">
                <h3>🔒 Secure, AI-Driven Checks</h3>
                <p>Instantly verify identity, financials, and rental history. No more unreliable paperwork or fake references.</p>
              </div>
              <div className="template-card">
                <h3>💡 Tenant Bureau Score</h3>
                <p>Get a single, transparent score for every tenant—like a CIBIL for renting, built on real data.</p>
              </div>
              <div className="template-card">
                <h3>🤝 Mutual Feedback</h3>
                <p>Landlords and tenants rate each other, building a trusted rental community over time.</p>
              </div>
              <div className="template-card">
                <h3>🛡️ Insurance Options</h3>
                <p>Landlords can opt for monthly insurance to cover property damage or fraud—no need for huge deposits.</p>
              </div>
            </div>
          </main>

          {/* How it works */}
          <section className="template-howitworks">
            <h2 className="template-section-title">How DwellVerify Works</h2>
            <div className="template-steps-row">
              <div className="template-step">
                <span className="template-step-num">1</span>
                <div>
                  <h4>Register &amp; Complete Profile</h4>
                  <p>Sign up as a tenant or landlord and upload your details for verification.</p>
                </div>
              </div>
              <div className="template-step">
                <span className="template-step-num">2</span>
                <div>
                  <h4>AI Verification &amp; Scoring</h4>
                  <p>Our system checks your identity, financials, and references to generate a bureau score.</p>
                </div>
              </div>
              <div className="template-step">
                <span className="template-step-num">3</span>
                <div>
                  <h4>Rent with Confidence</h4>
                  <p>Landlords and tenants connect, transact, and review each other—backed by real data and optional insurance.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="template-final-cta">
            <h2>Ready to build trust in your next rental?</h2>
            <Link to="/register" className="template-btn template-btn-primary template-btn-lg">Start Your Verification</Link>
          </section>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/:role" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
