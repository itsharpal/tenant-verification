import React, { useState } from 'react';
import { 
  User, 
  Home, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  Plus, 
  Settings,
  LogOut,
  Calendar,
  DollarSign,
  TrendingUp,
  Bell,
  Search,
  MapPin,
  Clock
} from 'lucide-react';

function TenantDashboard() {
  const [notifications, setNotifications] = useState(3);
  const [userData] = useState({
    username: 'John Doe',
    email: 'john.doe@example.com'
  });

  const handleLogout = () => {
    console.log('Logging out...');
  };

  const handleNavigation = (page) => {
    console.log(`Navigating to: ${page}`);
  };
  
  const stats = [
    { title: 'Applications', value: '2', subtitle: 'Active applications', icon: FileText, color: 'bg-blue-500' },
    { title: 'Rent Due', value: '$1,200', subtitle: 'Next payment in 5 days', icon: DollarSign, color: 'bg-green-500' },
    { title: 'Maintenance', value: '1', subtitle: 'Open requests', icon: Settings, color: 'bg-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <header className="bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Home className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">RentVerify</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="h-5 w-5" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>
              
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500 p-2 rounded-full">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-gray-900">{userData.username}</p>
                  <p className="text-xs text-gray-500">Tenant</p>
                </div>
              </div>
              
              <button 
                onClick={handleLogout}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 pt-24">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {userData.username}!</h2>
          <p className="text-gray-600 text-lg">Here's what's happening with your rental applications and verifications.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <div className="flex items-center">
                <div className={`${stat.color} p-3 rounded-xl shadow-lg`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Verification Status */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Verification Status</h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  Pending Review
                </span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-5 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border-l-4 border-green-500">
                  <div className="flex items-center">
                    <div className="bg-green-500 p-2 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">Identity Verification</p>
                      <p className="text-sm text-gray-600">Documents uploaded and verified</p>
                    </div>
                  </div>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">Completed</span>
                </div>
                
                <div className="flex items-center justify-between p-5 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl border-l-4 border-yellow-500">
                  <div className="flex items-center">
                    <div className="bg-yellow-500 p-2 rounded-lg">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">Income Verification</p>
                      <p className="text-sm text-gray-600">Processing pay stubs and bank statements</p>
                    </div>
                  </div>
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">In Review</span>
                </div>
                
                <div className="flex items-center justify-between p-5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border-l-4 border-gray-400">
                  <div className="flex items-center">
                    <div className="bg-gray-400 p-2 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">Credit Check</p>
                      <p className="text-sm text-gray-600">Pending income verification completion</p>
                    </div>
                  </div>
                  <span className="bg-gray-400 text-white px-3 py-1 rounded-full text-sm font-medium">Waiting</span>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <button 
                  onClick={() => handleNavigation('verification')}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Update Documents
                </button>
              </div>
            </div>
          </div>

          {/* Quick Actions & Activity */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => handleNavigation('search')}
                  className="flex items-center w-full p-4 text-left bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-xl transition-all duration-200 border border-blue-200"
                >
                  <div className="bg-blue-500 p-2 rounded-lg">
                    <Search className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-3 font-medium text-blue-900">Search Properties</span>
                </button>
                <button 
                  onClick={() => handleNavigation('applications')}
                  className="flex items-center w-full p-4 text-left bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-xl transition-all duration-200 border border-green-200"
                >
                  <div className="bg-green-500 p-2 rounded-lg">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-3 font-medium text-green-900">My Applications</span>
                </button>
                <button 
                  onClick={() => handleNavigation('profile')}
                  className="flex items-center w-full p-4 text-left bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-xl transition-all duration-200 border border-gray-200"
                >
                  <div className="bg-gray-500 p-2 rounded-lg">
                    <Settings className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-3 font-medium text-gray-900">Edit Profile</span>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex-shrink-0 w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Documents uploaded successfully</p>
                    <p className="text-xs text-gray-500 flex items-center mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      2 hours ago
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex-shrink-0 w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Application submitted to Sunset Apartments</p>
                    <p className="text-xs text-gray-500 flex items-center mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      1 day ago
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex-shrink-0 w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Profile information updated</p>
                    <p className="text-xs text-gray-500 flex items-center mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      3 days ago
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommended Properties */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Recommended for You</h3>
              <div className="space-y-3">
                <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-900">Modern Studio Downtown</h4>
                    <span className="text-lg font-bold text-blue-600">$950</span>
                  </div>
                  <p className="text-sm text-gray-600 flex items-center mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    Downtown District, 0.3 mi from work
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">96% Match</span>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TenantDashboard;