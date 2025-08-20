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

function LandlordDashboard() {
  const [notifications, setNotifications] = useState(2);
  const [userData] = useState({
    username: 'Sarah Wilson',
    email: 'sarah.wilson@example.com'
  });

  const handleLogout = () => {
    console.log('Logging out...');
  };

  const handleNavigation = (page) => {
    console.log(`Navigating to: ${page}`);
  };
  
  const stats = [
    { title: 'Properties', value: '3', subtitle: '2 occupied, 1 vacant', icon: Home, color: 'bg-blue-500' },
    { title: 'Monthly Income', value: '$4,200', subtitle: 'From all properties', icon: DollarSign, color: 'bg-green-500' },
    { title: 'Applications', value: '7', subtitle: 'Pending review', icon: FileText, color: 'bg-purple-500' },
    { title: 'Occupancy Rate', value: '67%', subtitle: '2 of 3 properties', icon: TrendingUp, color: 'bg-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <header className="bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
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
                <div className="bg-purple-500 p-2 rounded-full">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-gray-900">{userData.username}</p>
                  <p className="text-xs text-gray-500">Landlord</p>
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
                  onClick={() => handleNavigation('add-property')}
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
                  onClick={() => handleNavigation('properties')}
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
                  onClick={() => handleNavigation('applications')}
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
                  onClick={() => handleNavigation('add-property')}
                  className="flex items-center w-full p-4 text-left bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 rounded-xl transition-all duration-200 border border-purple-200"
                >
                  <div className="bg-purple-500 p-2 rounded-lg">
                    <Plus className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-3 font-medium text-purple-900">Add New Property</span>
                </button>
                <button 
                  onClick={() => handleNavigation('screen-tenants')}
                  className="flex items-center w-full p-4 text-left bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-xl transition-all duration-200 border border-blue-200"
                >
                  <div className="bg-blue-500 p-2 rounded-lg">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-3 font-medium text-blue-900">Screen Tenants</span>
                </button>
                <button 
                  onClick={() => handleNavigation('reports')}
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

export default LandlordDashboard;