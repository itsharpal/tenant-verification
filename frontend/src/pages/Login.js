import React, { useState } from "react";
import {
  Shield,
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  User,
  Home,
  Star,
  UserCheck,
  CheckCircle,
  Sparkles,Link
} from "lucide-react";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [role, setRole] = useState("tenant");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    setTimeout(() => {
      alert(`Welcome back! Logged in as ${role}: ${form.email}`);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-10">
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .input-focus:focus {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.15);
        }
        .role-option.active {
          transform: scale(1.02);
        }
        .loading-spinner {
          border: 3px solid #f3f4f6;
          border-top: 3px solid #6366f1;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch min-h-[calc(100vh-5rem)]">
          {/* Left side without the outer container */}
          <div className="hidden lg:flex flex-col max-w-lg w-full animate-fade-up">
            <div>
              <h1 className="text-5xl font-extrabold mb-4 leading-tight">
                <span className="gradient-text">Welcome Back!</span>
                <br />
                <span className="text-gray-900">Continue Your Journey</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6 max-w-md">
                Access your verified rental profile and connect with trusted landlords or
                tenants.
              </p>

              <ul className="max-w-md space-y-3 mb-6">
                <li className="flex items-center gap-3 text-gray-700 text-base">
                  <CheckCircle className="text-green-500" />
                  Instant verification status
                </li>
                <li className="flex items-center gap-3 text-gray-700 text-base">
                  <Shield className="text-green-500" />
                  Secure document management
                </li>
                <li className="flex items-center gap-3 text-gray-700 text-base">
                  <Sparkles className="text-green-500" />
                  Real-time property matching
                </li>
              </ul>
            </div>

            <div className="max-w-md bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-green-500 flex justify-center items-center text-white font-semibold">
                  RS
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Rahul Sharma</h4>
                  <p className="text-gray-600 text-sm">Software Engineer</p>
                </div>
              </div>
              <p className="italic text-gray-700 m-0">
                "DwellVerify made finding my dream apartment effortless. The verification
                process gave landlords confidence, and I was instantly approved!"
              </p>
              <div className="flex mt-4 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400" />
                ))}
              </div>
            </div>
          </div>

          {/* Right side login form */}
          <div className="flex flex-col h-full justify-center animate-fade-up">
            <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md mx-auto">
              <div className="lg:hidden text-center mb-6">
                <div className="inline-flex items-center gap-2">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex justify-center items-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-indigo-600 text-2xl font-bold">DwellVerify</span>
                </div>
              </div>

              <div className="text-center lg:text-left mb-8">
                <h2 className="text-3xl font-bold mb-1 text-gray-900">Sign In</h2>
                <p className="text-base text-gray-600">
                  Enter your credentials to access your account.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Role Selection */}
                <div>
                  <label className="block cursor-pointer text-sm font-semibold text-gray-700">
                    I am a
                  </label>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <button
                      type="button"
                      onClick={() => setRole("tenant")}
                      className={`role-option flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 px-4 py-3 text-gray-600 transition-colors duration-200 ${
                        role === "tenant"
                          ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                          : "border-gray-300 hover:bg-indigo-50 hover:border-indigo-400"
                      }`}
                    >
                      <User className="h-5 w-5" />
                      <span className="font-semibold">Tenant</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setRole("landlord")}
                      className={`role-option flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 px-4 py-3 text-gray-600 transition-colors duration-200 ${
                        role === "landlord"
                          ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                          : "border-gray-300 hover:bg-indigo-50 hover:border-indigo-400"
                      }`}
                    >
                      <Home className="h-5 w-5" />
                      <span className="font-semibold">Landlord</span>
                    </button>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block mb-2 cursor-pointer text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full rounded-xl border border-gray-300 px-10 py-3 transition-colors duration-200 placeholder-gray-400 ${
                        errors.email ? "border-red-500 bg-red-50" : "bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 flex items-center gap-1 text-red-600 text-sm">
                        <span className="h-4 w-4 rounded-full bg-red-600 text-white flex items-center justify-center text-xs">!</span>
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Password */}
                <div className="relative">
                  <label htmlFor="password" className="block mb-2 cursor-pointer text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className={`w-full rounded-xl border border-gray-300 px-10 py-3 transition-colors duration-200 placeholder-gray-400 ${
                        errors.password ? "border-red-500 bg-red-50" : "bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      tabIndex={-1}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-500"
                      aria-label={`${showPassword ? "Hide" : "Show"} password`}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1 flex items-center gap-1 text-red-600 text-sm">
                      <span className="h-4 w-4 rounded-full bg-red-600 text-white flex items-center justify-center text-xs">!</span>
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Remember & Forgot */}
                <div className="flex items-center justify-between">
                  <label className="inline-flex items-center gap-2 cursor-pointer text-gray-700 select-none">
                    <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="text-indigo-600 text-sm hover:text-indigo-800 font-medium">
                    Forgot password?
                  </a>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group flex w-full justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-lg font-semibold text-white transition-transform duration-200 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isLoading ? (
                    <>
                      <span className="loading-spinner" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign In <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>

              {/* Signup */}
              <p className="mt-8 text-center text-gray-600">
                Don&apos;t have an account?{" "}
                <Link to="/register" className="text-indigo-600 font-semibold hover:underline">
                  Create Account
                </Link>
              </p>

              {/* Demo credentials */}
              <div className="mt-6 rounded-lg bg-yellow-50 p-4 text-xs text-yellow-700">
                <h4 className="mb-2 font-semibold">Demo Credentials:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div>Tenant:</div>
                    <div>tenant@demo.com</div>
                    <div>password123</div>
                  </div>
                  <div>
                    <div>Landlord:</div>
                    <div>landlord@demo.com</div>
                    <div>password123</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
