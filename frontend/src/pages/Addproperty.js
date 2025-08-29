import React, { useState } from 'react';
import { 
  ArrowLeft,
  Home,
  MapPin,
  DollarSign,
  Calendar,
  Camera,
  Plus,
  X,
  CheckCircle,
  User,
  Bell,
  LogOut,FileText
} from 'lucide-react';

function AddProperty() {
  const [formData, setFormData] = useState({
    propertyName: '',
    propertyType: '',
    address: '',  
    city: '',
    state: '',
    zipCode: '',
    country: 'India',
    bedrooms: '',
    bathrooms: '',
    squareFootage: '',
    yearBuilt: '',
    parkingSpaces: '',
    furnishedStatus: '',
    petPolicy: '',
    smokingPolicy: '',
    monthlyRent: '',
    securityDeposit: '',
    applicationFee: '',
    petDeposit: '',
    lateFeePenalty: '',
    leaseTerms: '',
    availableFrom: '',
    amenities: [],
    utilities: [],
    description: '',
    images: [],
    nearbySchools: '',
    transportation: '',
    neighborhood: '',
    specialInstructions: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notifications] = useState(2);
  const userData = {
    username: 'Sarah Wilson',
    email: 'sarah.wilson@example.com'
  };

  const countries = ['India', 'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France', 'Japan', 'Singapore', 'UAE', 'Other'];
  const indianStates = ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Ladakh','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal','Delhi'];
  const usStates = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

  const propertyTypes = ['Apartment','House','Condo','Townhouse','Studio','Duplex','Room','Villa','Penthouse','Flat','Bungalow'];
  const furnishedOptions = ['Furnished', 'Unfurnished', 'Semi-furnished'];
  const petPolicyOptions = ['Pets Allowed','No Pets','Cats Only','Dogs Only','Small Pets Only'];
  const smokingOptions = ['No Smoking', 'Smoking Allowed', 'Designated Areas Only'];
  const leaseOptions = ['6 months', '1 year', '2 years', 'Month-to-month', 'Flexible'];
  const amenitiesOptions = ['Air Conditioning', 'Heating', 'Dishwasher', 'Washer/Dryer', 'Balcony/Patio', 'Garden', 'Pool', 'Gym', 'Parking','Storage','Elevator','Security System','Fireplace','Hardwood Floors','Carpet','Tile Floors','Walk-in Closet','Central Air','Ceiling Fans','Bay Windows','Skylight','Power Backup','CCTV','Intercom','Clubhouse','Children Play Area','Senior Citizen Area','Library'];
  const utilitiesOptions = ['Electricity','Gas','Water','Internet','Cable TV','Trash Collection','Sewer','Heating','Hot Water','Society Maintenance','Security Services'];

  const getStatesForCountry = country => {
    switch(country) {
      case 'India': return indianStates;
      case 'United States': return usStates;
      default: return [];
    }
  };

  const getCurrencySymbol = country => {
    switch(country) {
      case 'India': return '₹';
      case 'United States': 
      case 'Canada': 
      case 'Australia': return '$';
      case 'United Kingdom': return '£';
      case 'UAE': return 'AED';
      default: return '$';
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]:value }));
    if(errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
    if(field === 'country') setFormData(prev => ({ ...prev, state: '' }));
  };

  const handleArrayChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value) ? prev[field].filter(item => item !== value) : [...prev[field], value]
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if(!formData.propertyName.trim()) newErrors.propertyName = "Property name is required";
    if(!formData.propertyType) newErrors.propertyType = "Property type is required";
    if(!formData.address.trim()) newErrors.address = "Address is required";
    if(!formData.city.trim()) newErrors.city = "City is required";
    if(!formData.state.trim()) newErrors.state = "State is required";
    if(!formData.zipCode.trim()) newErrors.zipCode = "ZIP/PIN code is required";
    if(!formData.monthlyRent) newErrors.monthlyRent = "Monthly rent is required";
    if(!formData.bedrooms) newErrors.bedrooms = "Number of bedrooms is required";
    if(!formData.bathrooms) newErrors.bathrooms = "Number of bathrooms is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!validateForm()) return;
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // simulate api call
      alert('Property added successfully!');
      // Reset form
      setFormData({
        propertyName: '', propertyType: '', address: '', city: '', state: '', zipCode: '', country: 'India',
        bedrooms: '', bathrooms: '', squareFootage: '', yearBuilt: '', parkingSpaces: '', furnishedStatus: '',
        petPolicy: '', smokingPolicy: '', monthlyRent: '', securityDeposit: '', applicationFee: '',
        petDeposit: '', lateFeePenalty: '', leaseTerms: '', availableFrom: '', amenities: [], utilities: [],
        description: '', images: [], nearbySchools: '', transportation: '', neighborhood: '', specialInstructions: ''
      });
    } catch(error) {
      alert('Error adding property. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // const Header = (
  //   <header className="bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //       <div className="flex items-center justify-between h-16">
  //         <div className="flex items-center">
  //           <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
  //             <Home className="h-6 w-6 text-white" />
  //           </div>
  //           <span className="ml-3 text-xl font-bold text-gray-900">RentVerify</span>
  //         </div>
  //         <div className="flex items-center space-x-4">
  //           <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
  //             <Bell className="h-5 w-5" />
  //             {notifications > 0 && (
  //               <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
  //                 {notifications}
  //               </span>
  //             )}
  //           </button>
  //           <div className="flex items-center space-x-3">
  //             <div className="bg-purple-500 p-2 rounded-full">
  //               <User className="h-5 w-5 text-white" />
  //             </div>
  //             <div className="hidden sm:block">
  //               <p className="text-sm font-medium text-gray-900">{userData.username}</p>
  //               <p className="text-xs text-gray-500">Landlord</p>
  //             </div>
  //           </div>
  //           <button 
  //             onClick={() => console.log('Logging out...')}
  //             className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
  //           >
  //             <LogOut className="h-5 w-5" />
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </header>
  // );

  return (
    <div className="min-h-screen bg-gray-50">
     {/* {Header} */}
      <main className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8 pt-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Home className="h-6 w-6 text-purple-700 mr-2" /> Add New Property
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Basic Information */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
              <Home className="h-5 w-5 mr-2 text-purple-600" /> Basic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="propertyName" className="block text-sm font-medium text-gray-700 mb-2">Property Name <span className="text-red-500">*</span></label>
                <input
                  id="propertyName"
                  type="text"
                  value={formData.propertyName}
                  onChange={e => handleInputChange('propertyName', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors ${errors.propertyName ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Sunset Apartments #12A"
                />
                {errors.propertyName && <p className="mt-1 text-sm text-red-600">{errors.propertyName}</p>}
              </div>
              <div>
                <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">Property Type <span className="text-red-500">*</span></label>
                <select
                  id="propertyType"
                  value={formData.propertyType}
                  onChange={e => handleInputChange('propertyType', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors ${errors.propertyType ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Select property type</option>
                  {propertyTypes.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
                {errors.propertyType && <p className="mt-1 text-sm text-red-600">{errors.propertyType}</p>}
              </div>
              <div className="md:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Address <span className="text-red-500">*</span></label>
                <input
                  id="address"
                  type="text"
                  value={formData.address}
                  onChange={e => handleInputChange('address', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="123 Main St, City"
                />
                {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">City <span className="text-red-500">*</span></label>
                <input
                  id="city"
                  type="text"
                  value={formData.city}
                  onChange={e => handleInputChange('city', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="City name"
                />
                {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">Country <span className="text-red-500">*</span></label>
                <select
                  id="country"
                  value={formData.country}
                  onChange={e => handleInputChange('country', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                >
                  {countries.map(country => <option key={country} value={country}>{country}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">State <span className="text-red-500">*</span></label>
                {getStatesForCountry(formData.country).length > 0 ? (
                  <select
                    id="state"
                    value={formData.state}
                    onChange={e => handleInputChange('state', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors ${errors.state ? 'border-red-500' : 'border-gray-300'}`}
                  >
                    <option value="">Select state</option>
                    {getStatesForCountry(formData.country).map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    id="state"
                    type="text"
                    value={formData.state}
                    onChange={e => handleInputChange('state', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors ${errors.state ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter state"
                  />
                )}
                {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state}</p>}
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">ZIP/Postal Code <span className="text-red-500">*</span></label>
                <input
                  id="zipCode"
                  type="text"
                  value={formData.zipCode}
                  onChange={e => handleInputChange('zipCode', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors ${errors.zipCode ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="ZIP or postal code"
                />
                {errors.zipCode && <p className="mt-1 text-sm text-red-600">{errors.zipCode}</p>}
              </div>
            </div>
          </section>

          {/* Property Details */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
              <Home className="h-5 w-5 mr-2 text-purple-600" /> Property Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-2">Bedrooms<span className="text-red-500">*</span></label>
                <select
                  id="bedrooms"
                  value={formData.bedrooms}
                  onChange={e => handleInputChange('bedrooms', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors ${errors.bedrooms ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Select bedrooms</option>
                  {[0, 1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num === 0 ? 'Studio' : `${num} Bedroom${num > 1 ? 's' : ''}`}</option>
                  ))}
                </select>
                {errors.bedrooms && <p className="mt-1 text-sm text-red-600">{errors.bedrooms}</p>}
              </div>
              <div>
                <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700 mb-2">Bathrooms<span className="text-red-500">*</span></label>
                <select
                  id="bathrooms"
                  value={formData.bathrooms}
                  onChange={e => handleInputChange('bathrooms', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors ${errors.bathrooms ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Select bathrooms</option>
                  {[1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map(num => (
                    <option key={num} value={num}>{num} Bathroom{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
                {errors.bathrooms && <p className="mt-1 text-sm text-red-600">{errors.bathrooms}</p>}
              </div>
              <div>
                <label htmlFor="squareFootage" className="block text-sm font-medium text-gray-700 mb-2">Square Footage</label>
                <input
                  id="squareFootage"
                  type="number"
                  value={formData.squareFootage}
                  onChange={e => handleInputChange('squareFootage', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                  placeholder="e.g., 1200"
                />
              </div>
              {/* Add more fields as needed, following pattern */}
            </div>
          </section>

          {/* Financial Information */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
              <DollarSign className="h-5 w-5 mr-2 text-purple-600" /> Financial Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="monthlyRent" className="block text-sm font-medium text-gray-700 mb-2">Monthly Rent<span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    {getCurrencySymbol(formData.country)}
                  </div>
                  <input
                    id="monthlyRent"
                    type="number"
                    value={formData.monthlyRent}
                    onChange={e => handleInputChange('monthlyRent', e.target.value)}
                    className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors ${errors.monthlyRent ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="e.g., 25000"
                    min="0"
                  />
                </div>
                {errors.monthlyRent && <p className="mt-1 text-sm text-red-600">{errors.monthlyRent}</p>}
              </div>
              {/* Add other financial fields similarly */}
            </div>
          </section>

          {/* Amenities & Utilities */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-purple-600" /> Amenities & Utilities
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">Property Amenities</label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {amenitiesOptions.map(amenity => (
                    <label key={amenity} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.amenities.includes(amenity)}
                        onChange={() => handleArrayChange('amenities', amenity)}
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="ml-3 text-sm text-gray-700">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">Utilities Included</label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {utilitiesOptions.map(utility => (
                    <label key={utility} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.utilities.includes(utility)}
                        onChange={() => handleArrayChange('utilities', utility)}
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="ml-3 text-sm text-gray-700">{utility}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Property Description and Additional Info */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-purple-600" /> Property Description & Additional Info
            </h3>
            <textarea
              value={formData.description}
              onChange={e => handleInputChange('description', e.target.value)}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              placeholder="Describe your property, highlights, neighborhood, etc."
            />
            {/* Add other text areas for nearbySchools, transportation, neighborhood, specialInstructions as needed */}
          </section>

          {/* Property Images */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
              <Camera className="h-5 w-5 mr-2 text-purple-600" /> Property Images
            </h3>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-purple-400 transition-colors cursor-pointer">
              <Camera className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <label htmlFor="images" className="block text-lg font-medium text-gray-900 cursor-pointer">
                Upload property images
              </label>
              <input
                id="images"
                type="file"
                multiple
                accept="image/*"
                className="sr-only"
                onChange={e => {
                  const files = Array.from(e.target.files);
                  setFormData(prev => ({ ...prev, images: [...prev.images, ...files] }));
                }}
              />
              {formData.images.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-4">Selected Images ({formData.images.length})</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {formData.images.map((file, index) => (
                      <div key={index} className="relative bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                        <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                        <button
                          type="button"
                          onClick={() => {
                            const newImages = formData.images.filter((_, i) => i !== index);
                            setFormData(prev => ({ ...prev, images: newImages }));
                          }}
                          className="absolute top-2 right-2 text-red-400 hover:text-red-600 transition-colors"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Form Actions */}
          <div className="mt-8 flex justify-between max-w-4xl mx-auto">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="px-6 py-3 border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all"
            >
              Cancel
            </button>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => alert('Property saved as draft!')}
                className="px-6 py-3 border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all"
              >
                Save as Draft
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-medium hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Adding Property...
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    Add Property
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default AddProperty;
