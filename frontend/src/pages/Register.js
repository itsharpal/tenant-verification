import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Shield,
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  CheckCircle,
  Home,
  UserCheck,
  ArrowRight,
  Sparkles
} from 'lucide-react';

function Register() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    phone: ''
  });
  const [role, setRole] = useState('tenant');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    navigate(`/dashboard/${role}`);
  };

  const isFieldValid = (field) => {
    switch (field) {
      case 'username': return form.username.length >= 3;
      case 'email': return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
      case 'phone': return /^\+?[\d\s-()]{10,}$/.test(form.phone);
      case 'password': return form.password.length >= 6;
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-10">
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch min-h-[calc(100vh-5rem)]">
          {/* Left Side - Branding & Info */}
          <div className="flex flex-col w-full gap-8 animate-fade-in-up h-full">
            {/* Logo & Title */}
            <Link to="/" className="flex items-center gap-2 mb-5 text-indigo-600 hover:text-indigo-700 transition-colors">
              {/* <div className="h-10 w-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div> */}
              {/* <span className="text-2xl font-bold">DwellVerify</span> */}
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold mb-3">
              <span className="gradient-text">Join the Future</span><br />
              <span className="text-gray-900">of Rental Trust</span>
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Create your verified profile and connect with trusted {role === 'tenant' ? 'landlords' : 'tenants'} in minutes.
            </p>
            <div className="flex flex-col gap-3 my-2">
              {[
                { icon: CheckCircle, text: "Instant verification process" },
                { icon: Shield, text: "Bank-level security & privacy" },
                { icon: Sparkles, text: "AI-powered trust scoring" }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <benefit.icon className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">{benefit.text}</span>
                </div>
              ))}
            </div>
            {/* Floating illustration (optional: put mt-auto if you want it pinned to bottom) */}
            <div className="hidden lg:block mt-4 relative">
              <div className="animate-float">
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-6 max-w-xs mx-auto shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                      <UserCheck className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Verification Status</div>
                      <div className="text-sm text-gray-600">Real-time updates</div>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Registration Form */}
          <div className="animate-fade-in-up flex flex-col h-full justify-center">
            <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md mx-auto">
              {/* Role Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">I want to register as:</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: 'tenant', icon: User, label: 'Tenant', desc: 'Looking for a place to rent' },
                    { value: 'landlord', icon: Home, label: 'Landlord', desc: 'Have properties to rent' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setRole(option.value)}
                      className={`relative p-4 rounded-2xl border-2 transition-all duration-300 text-left group ${
                        role === option.value
                          ? 'border-indigo-500 bg-indigo-50 transform scale-105'
                          : 'border-gray-200 hover:border-indigo-200 hover:bg-indigo-25'
                      }`}
                    >
                      {role === option.value && (
                        <div className="absolute -top-1 -right-1 h-6 w-6 bg-indigo-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                      )}
                      <option.icon className={`h-6 w-6 mb-2 transition-colors ${
                        role === option.value ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-400'
                      }`} />
                      <div className={`font-medium transition-colors ${
                        role === option.value ? 'text-indigo-800' : 'text-gray-800'
                      }`}>
                        {option.label}
                      </div>
                      <div className={`text-sm transition-colors ${
                        role === option.value ? 'text-indigo-600' : 'text-gray-500'
                      }`}>
                        {option.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Username Field */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <div className={`relative transition-all duration-300 ${focusedField === 'username' ? 'transform scale-105' : ''}`}>
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className={`h-5 w-5 transition-colors ${focusedField === 'username' || form.username ? 'text-indigo-500' : 'text-gray-400'}`} />
                    </div>
                    <input
                      type="text"
                      name="username"
                      value={form.username}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('username')}
                      onBlur={() => setFocusedField('')}
                      placeholder="Enter your full name"
                      required
                      className={`w-full pl-12 pr-12 py-3 rounded-xl border-2 transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none ${
                        focusedField === 'username'
                          ? 'border-indigo-500 shadow-lg'
                          : 'border-gray-200 focus:border-indigo-300'
                      }`}
                    />
                    {form.username && (
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                        <CheckCircle className={`h-5 w-5 ${isFieldValid('username') ? 'text-green-500' : 'text-gray-300'}`} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'transform scale-105' : ''}`}>
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className={`h-5 w-5 transition-colors ${focusedField === 'email' || form.email ? 'text-indigo-500' : 'text-gray-400'}`} />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      placeholder="your.email@example.com"
                      required
                      className={`w-full pl-12 pr-12 py-3 rounded-xl border-2 transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none ${
                        focusedField === 'email'
                          ? 'border-indigo-500 shadow-lg'
                          : 'border-gray-200 focus:border-indigo-300'
                      }`}
                    />
                    {form.email && (
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                        <CheckCircle className={`h-5 w-5 ${isFieldValid('email') ? 'text-green-500' : 'text-gray-300'}`} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Phone Field */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Phone Number</label>
                  <div className={`relative transition-all duration-300 ${focusedField === 'phone' ? 'transform scale-105' : ''}`}>
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Phone className={`h-5 w-5 transition-colors ${focusedField === 'phone' || form.phone ? 'text-indigo-500' : 'text-gray-400'}`} />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField('')}
                      placeholder="+91 98765 43210"
                      required
                      className={`w-full pl-12 pr-12 py-3 rounded-xl border-2 transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none ${
                        focusedField === 'phone'
                          ? 'border-indigo-500 shadow-lg'
                          : 'border-gray-200 focus:border-indigo-300'
                      }`}
                    />
                    {form.phone && (
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                        <CheckCircle className={`h-5 w-5 ${isFieldValid('phone') ? 'text-green-500' : 'text-gray-300'}`} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Password</label>
                  <div className={`relative transition-all duration-300 ${focusedField === 'password' ? 'transform scale-105' : ''}`}>
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className={`h-5 w-5 transition-colors ${focusedField === 'password' || form.password ? 'text-indigo-500' : 'text-gray-400'}`} />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('password')}
                      onBlur={() => setFocusedField('')}
                      placeholder="Create a strong password"
                      required
                      className={`w-full pl-12 pr-12 py-3 rounded-xl border-2 transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none ${
                        focusedField === 'password'
                          ? 'border-indigo-500 shadow-lg'
                          : 'border-gray-200 focus:border-indigo-300'
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-indigo-500 transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {form.password && (
                    <div className="flex items-center gap-2 text-sm">
                      <div className={`h-1 flex-1 rounded-full ${
                        form.password.length >= 8 ? 'bg-green-400' :
                          form.password.length >= 6 ? 'bg-yellow-400' : 'bg-red-400'
                      }`}></div>
                      <span className={`text-xs ${
                        form.password.length >= 8 ? 'text-green-600' :
                          form.password.length >= 6 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {form.password.length >= 8 ? 'Strong' :
                          form.password.length >= 6 ? 'Medium' : 'Weak'}
                      </span>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 px-8 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 focus:outline-none focus:ring-4 focus:ring-indigo-200"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                      Creating Account...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      Create My Account
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                  {!isLoading && (
                    <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  )}
                </button>

                <div className="text-center pt-4 border-t border-gray-100">
                  <p className="text-gray-600">
                    Already have an account?{' '}
                    <Link
                      to="/login"
                      className="text-indigo-600 hover:text-indigo-700 font-medium hover:underline transition-colors"
                    >
                      Sign in here
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
          {/* End Form */}
        </div>
      </div>
    </div>
  );
}

export default Register;
