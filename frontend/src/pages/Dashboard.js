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

function TenantView({ onLogout, userData, onNavigate }) {
  const [notifications, setNotifications] = useState(3);
  
  const stats = [
    { title: 'Applications', value: '2', subtitle: 'Active applications', icon: FileText, color: 'bg-blue-500' },
    { title: 'Rent Due', value: '$1,200', subtitle: 'Next payment in 5 days', icon: DollarSign, color: 'bg-green-500' },
    { title: 'Maintenance', value: '1', subtitle: 'Open requests', icon: Settings, color: 'bg-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Home className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-semibold text-gray-900">RentVerify</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-500 transition-colors">
                <Bell className="h-6 w-6" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">{userData.username}</span>
              </div>
              <button 
                onClick={onLogout}
                className="flex items-center px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
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
                  onClick={() => onNavigate('verification')}
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
                  onClick={() => onNavigate('search')}
                  className="flex items-center w-full p-4 text-left bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-xl transition-all duration-200 border border-blue-200"
                >
                  <div className="bg-blue-500 p-2 rounded-lg">
                    <Search className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-3 font-medium text-blue-900">Search Properties</span>
                </button>
                <button 
                  onClick={() => onNavigate('applications')}
                  className="flex items-center w-full p-4 text-left bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-xl transition-all duration-200 border border-green-200"
                >
                  <div className="bg-green-500 p-2 rounded-lg">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-3 font-medium text-green-900">My Applications</span>
                </button>
                <button 
                  onClick={() => onNavigate('profile')}
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

function LandlordView({ onLogout, userData, onNavigate }) {
  const [notifications, setNotifications] = useState(2);
  
  const stats = [
    { title: 'Properties', value: '3', subtitle: '2 occupied, 1 vacant', icon: Home, color: 'bg-blue-500' },
    { title: 'Monthly Income', value: '$4,200', subtitle: 'From all properties', icon: DollarSign, color: 'bg-green-500' },
    { title: 'Applications', value: '7', subtitle: 'Pending review', icon: FileText, color: 'bg-purple-500' },
    { title: 'Occupancy Rate', value: '67%', subtitle: '2 of 3 properties', icon: TrendingUp, color: 'bg-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Home className="h-8 w-8 text-purple-600 mr-3" />
              <h1 className="text-xl font-semibold text-gray-900">RentVerify Pro</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-500 transition-colors">
                <Bell className="h-6 w-6" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">{userData.username}</span>
              </div>
              <button 
                onClick={onLogout}
                className="flex items-center px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {userData.username}!</h2>
          <p className="text-gray-600 text-lg">Manage your properties, review tenant applications, and track your rental business performance.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
          {/* Properties Overview */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Property Portfolio</h3>
                <button 
                  onClick={() => onNavigate('add-property')}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Property
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="p-5 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border-l-4 border-green-500 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-green-500 p-2 rounded-lg">
                        <Home className="h-5 w-5 text-white" />
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold text-gray-900">Sunset Apartments #12A</p>
                        <p className="text-sm text-gray-600">2BR/2BA • $1,200/month</p>
                        <p className="text-xs text-gray-500 flex items-center mt-1">
                          <User className="h-3 w-3 mr-1" />
                          Tenant: Sarah Wilson
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      Occupied
                    </span>
                  </div>
                </div>
                
                <div className="p-5 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border-l-4 border-green-500 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-green-500 p-2 rounded-lg">
                        <Home className="h-5 w-5 text-white" />
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold text-gray-900">Downtown Loft #5</p>
                        <p className="text-sm text-gray-600">1BR/1BA • $1,800/month</p>
                        <p className="text-xs text-gray-500 flex items-center mt-1">
                          <User className="h-3 w-3 mr-1" />
                          Tenant: Michael Chen
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      Occupied
                    </span>
                  </div>
                </div>
                
                <div className="p-5 bg-gradient-to-r from-red-50 to-red-100 rounded-xl border-l-4 border-red-500 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-red-500 p-2 rounded-lg">
                        <Home className="h-5 w-5 text-white" />
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold text-gray-900">Garden View Condo #8B</p>
                        <p className="text-sm text-gray-600">3BR/2BA • $2,200/month</p>
                        <p className="text-xs text-gray-500">Available for rent</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                      Vacant
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <button 
                  onClick={() => onNavigate('properties')}
                  className="text-purple-600 hover:text-purple-700 text-sm font-medium hover:underline transition-colors"
                >
                  View all properties →
                </button>
              </div>
            </div>
          </div>

          {/* Applications & Insights */}
          <div className="space-y-6">
            {/* Recent Applications */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Recent Applications</h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">7 New</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                  <div>
                    <p className="font-medium text-gray-900">Sarah Johnson</p>
                    <p className="text-xs text-gray-600">Garden View Condo #8B</p>
                    <p className="text-xs text-blue-600 font-medium mt-1">Score: 850</p>
                  </div>
                  <span className="bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded-full">New</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200">
                  <div>
                    <p className="font-medium text-gray-900">Michael Chen</p>
                    <p className="text-xs text-gray-600">Garden View Condo #8B</p>
                    <p className="text-xs text-green-600 font-medium mt-1">Score: 780</p>
                  </div>
                  <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">Approved</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg border border-yellow-200">
                  <div>
                    <p className="font-medium text-gray-900">Emma Davis</p>
                    <p className="text-xs text-gray-600">Downtown Loft #5</p>
                    <p className="text-xs text-yellow-600 font-medium mt-1">Score: 720</p>
                  </div>
                  <span className="bg-yellow-500 text-white text-xs font-medium px-2 py-1 rounded-full">Review</span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-200">
                <button 
                  onClick={() => onNavigate('applications')}
                  className="text-purple-600 hover:text-purple-700 text-sm font-medium hover:underline transition-colors"
                >
                  View all applications →
                </button>
              </div>
            </div>

            {/* Monthly Insights */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">This Month</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center">
                    <div className="bg-green-500 p-2 rounded-lg">
                      <DollarSign className="h-4 w-4 text-white" />
                    </div>
                    <span className="ml-3 text-sm text-gray-600">Rent Collected</span>
                  </div>
                  <span className="font-semibold text-green-600">$3,000</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center">
                    <div className="bg-blue-500 p-2 rounded-lg">
                      <FileText className="h-4 w-4 text-white" />
                    </div>
                    <span className="ml-3 text-sm text-gray-600">New Applications</span>
                  </div>
                  <span className="font-semibold text-blue-600">12</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center">
                    <div className="bg-purple-500 p-2 rounded-lg">
                      <TrendingUp className="h-4 w-4 text-white" />
                    </div>
                    <span className="ml-3 text-sm text-gray-600">Property Views</span>
                  </div>
                  <span className="font-semibold text-purple-600">89</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center">
                    <div className="bg-orange-500 p-2 rounded-lg">
                      <Settings className="h-4 w-4 text-white" />
                    </div>
                    <span className="ml-3 text-sm text-gray-600">Maintenance Requests</span>
                  </div>
                  <span className="font-semibold text-orange-600">3</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => onNavigate('add-property')}
                  className="flex items-center w-full p-4 text-left bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 rounded-xl transition-all duration-200 border border-purple-200"
                >
                  <div className="bg-purple-500 p-2 rounded-lg">
                    <Plus className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-3 font-medium text-purple-900">Add New Property</span>
                </button>
                <button 
                  onClick={() => onNavigate('screen-tenants')}
                  className="flex items-center w-full p-4 text-left bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-xl transition-all duration-200 border border-blue-200"
                >
                  <div className="bg-blue-500 p-2 rounded-lg">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-3 font-medium text-blue-900">Screen Tenants</span>
                </button>
                <button 
                  onClick={() => onNavigate('reports')}
                  className="flex items-center w-full p-4 text-left bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-xl transition-all duration-200 border border-green-200"
                >
                  <div className="bg-green-500 p-2 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-3 font-medium text-green-900">View Reports</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Dashboard() {
  const [currentView, setCurrentView] = useState(null); // null, 'tenant', or 'landlord'
  const [userData, setUserData] = useState({
    username: 'John Doe',
    email: 'john.doe@example.com'
  });

  const handleLogout = () => {
    setCurrentView(null);
    // In a real app, this would clear authentication and redirect
    console.log('Logging out...');
  };

  const handleNavigation = (page) => {
    console.log(`Navigating to: ${page}`);
    // In a real app, this would use router navigation
  };

  if (!currentView) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-200 max-w-md w-full mx-4">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl mx-auto w-fit mb-6">
              <Home className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Choose Your Dashboard</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">Select whether you're a tenant looking for properties or a landlord managing rentals.</p>
            
            <div className="space-y-4">
              <button 
                onClick={() => setCurrentView('tenant')}
                className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <User className="h-5 w-5 mr-3" />
                I'm a Tenant
                <span className="ml-auto text-blue-200 text-sm">→</span>
              </button>
              <button 
                onClick={() => setCurrentView('landlord')}
                className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <Home className="h-5 w-5 mr-3" />
                I'm a Landlord
                <span className="ml-auto text-purple-200 text-sm">→</span>
              </button>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                Need help? <button className="text-blue-600 hover:text-blue-700 font-medium">Contact Support</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'tenant') return <TenantView onLogout={handleLogout} userData={userData} onNavigate={handleNavigation} />;
  if (currentView === 'landlord') return <LandlordView onLogout={handleLogout} userData={userData} onNavigate={handleNavigation} />;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 max-w-md w-full mx-4 text-center">
        <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Unknown Role</h2>
        <p className="text-gray-600 mb-6">The selected role is not recognized.</p>
        <button 
          onClick={() => setCurrentView(null)}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-medium rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <Home className="h-5 w-5 mr-2" />
          Return Home
        </button>
      </div>
    </div>
  );
}

export default Dashboard;