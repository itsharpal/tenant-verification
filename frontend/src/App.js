import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { 
  Shield, 
  Star, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Play,
  MessageSquare,
  Award,
  Lock,
  Lightbulb,
  Heart,
  Menu,
  X
} from 'lucide-react';
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";



// Interactive Navbar Component
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-10 w-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-indigo-600">DwellVerify</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-indigo-600 transition">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-indigo-600 transition">How it Works</a>
            <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 transition">Reviews</a>
            <Link to="/login" className="text-indigo-600 hover:text-indigo-700 font-medium">Sign In</Link>
            <Link to="/register" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition">
              Get Started
            </Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-700">Features</a>
              <a href="#how-it-works" className="block px-3 py-2 text-gray-700">How it Works</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700">Reviews</a>
              <Link to="/login" className="block px-3 py-2 text-indigo-600">Sign In</Link>
              <Link to="/register" className="block px-3 py-2 bg-indigo-600 text-white rounded-lg text-center">Get Started</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress === 1) {
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return <span id={`counter-${end}`}>{count}{suffix}</span>;
}

// Interactive Feature Card
function FeatureCard({ icon: Icon, title, description, color, delay }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer animate-fade-in-up`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${color} mb-4 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

// Testimonial Card
function TestimonialCard({ name, role, content, avatar, rating }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{content}"</p>
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
          {avatar}
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
}

// Main Home Component
function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Property Owner, Mumbai",
      content: "DwellVerify helped me find reliable tenants quickly. The verification process gave me complete confidence.",
      avatar: "PS",
      rating: 5
    },
    {
      name: "Amit Kumar",
      role: "Software Engineer, Bangalore",
      content: "As a tenant, I loved how transparent the process was. Got my dream apartment with a lower deposit!",
      avatar: "AK",
      rating: 5
    },
    {
      name: "Meera Patel",
      role: "Marketing Manager, Delhi",
      content: "The AI scoring system is brilliant. It's like CIBIL for rentals - exactly what the market needed.",
      avatar: "MP",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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

      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-full mb-6">
                <Award className="h-5 w-5 text-indigo-600" />
                <span className="text-indigo-600 font-medium">Trusted by 10,000+ Users</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="gradient-text">Tenant Verification</span>
                <br />
                <span className="text-gray-900">for Modern India</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                AI-powered verification platform that builds trust between landlords and tenants. 
                Lower deposits, faster approvals, zero disputes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/register"
                  className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Start Free Verification
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button
                  onClick={() => setShowVideo(true)}
                  className="group border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Free to start</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>2-minute setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Instant verification</span>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="relative animate-float">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <Shield className="h-8 w-8" />
                      <span className="text-xl font-bold">Verification Report</span>
                    </div>
                    <div className="bg-green-400 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Verified ✓
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Credit Score</span>
                      <span className="font-bold text-2xl">785</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Identity Verified</span>
                      <CheckCircle className="h-6 w-6 text-green-400" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Income Verified</span>
                      <CheckCircle className="h-6 w-6 text-green-400" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Rental History</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-full p-4 shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                <Heart className="h-8 w-8 text-red-500" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-indigo-600 mb-2">
                  <AnimatedCounter end={10000} suffix="+" />
                </div>
                <p className="text-gray-600">Verified Users</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-indigo-600 mb-2">
                  <AnimatedCounter end={98} suffix="%" />
                </div>
                <p className="text-gray-600">Approval Rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-indigo-600 mb-2">
                  <AnimatedCounter end={50} suffix="%" />
                </div>
                <p className="text-gray-600">Deposit Reduction</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-indigo-600 mb-2">
                  <AnimatedCounter end={24} />
                </div>
                <p className="text-gray-600">Hour Verification</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Why Choose DwellVerify?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of rental verification with our comprehensive, AI-powered platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Shield}
              title="AI-Powered Security"
              description="Advanced algorithms verify identity, income, and background checks in real-time with 99.9% accuracy."
              color="from-blue-500 to-indigo-600"
              delay={100}
            />
            <FeatureCard
              icon={TrendingUp}
              title="Dynamic Credit Scoring"
              description="Our proprietary Tenant Bureau Score gives you a complete picture beyond traditional credit reports."
              color="from-green-500 to-emerald-600"
              delay={200}
            />
            <FeatureCard
              icon={Users}
              title="Community Reviews"
              description="Build trust through mutual ratings and reviews from verified landlords and tenants."
              color="from-purple-500 to-pink-600"
              delay={300}
            />
            <FeatureCard
              icon={Lock}
              title="Data Protection"
              description="Bank-level encryption and GDPR compliance ensure your personal information stays secure."
              color="from-red-500 to-orange-600"
              delay={400}
            />
            <FeatureCard
              icon={Lightbulb}
              title="Smart Matching"
              description="AI matches compatible tenants with landlords based on preferences and compatibility scores."
              color="from-yellow-500 to-orange-500"
              delay={500}
            />
            <FeatureCard
              icon={MessageSquare}
              title="24/7 Support"
              description="Get instant help through our AI chatbot or connect with human experts anytime."
              color="from-indigo-500 to-purple-600"
              delay={600}
            />
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50 -mx-6 px-6 rounded-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">How It Works</span>
            </h2>
            <p className="text-xl text-gray-600">Get verified in 3 simple steps</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Sign Up & Upload Documents",
                description: "Create your profile and securely upload your documents for verification",
                icon: Users
              },
              {
                step: "02", 
                title: "AI Verification Process",
                description: "Our AI analyzes your data across multiple sources to create your trust score",
                icon: Shield
              },
              {
                step: "03",
                title: "Connect & Rent",
                description: "Get matched with verified landlords/tenants and start renting with confidence",
                icon: Heart
              }
            ].map((item, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 text-yellow-800 rounded-full flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">What Our Users Say</span>
            </h2>
            <p className="text-xl text-gray-600">Join thousands of satisfied landlords and tenants</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentTestimonial ? 'scale-105 ring-4 ring-indigo-200' : 'opacity-70'
                  }`}
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-16 text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Rental Experience?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join the rental revolution. Get verified, build trust, and rent with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Verification
              </Link>
              <a
                href="#features"
                className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-4xl w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">DwellVerify Demo</h3>
              <button
                onClick={() => setShowVideo(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-8 w-8" />
              </button>
            </div>
            <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Play className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
                <p className="text-gray-600">Demo video would play here</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Placeholder components for routing
// function Register() {
//   return (
//     <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
//       <div className="text-center">
//         <h1 className="text-3xl font-bold text-gray-800 mb-4">Register Page</h1>
//         <p className="text-gray-600">Registration form will be implemented here</p>
//       </div>
//     </div>
//   );
// }

// function Login() {
//   return (
//     <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
//       <div className="text-center">
//         <h1 className="text-3xl font-bold text-gray-800 mb-4">Login Page</h1>
//         <p className="text-gray-600">Login form will be implemented here</p>
//       </div>
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
//       <div className="text-center">
//         <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>
//         <p className="text-gray-600">User dashboard will be implemented here</p>
//       </div>
//     </div>
//   );
// }

// Main App Component
function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
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