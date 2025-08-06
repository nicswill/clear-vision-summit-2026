import React, { useState } from 'react';
import { ArrowLeft, Users, CheckCircle, User, Mail, Phone, Building, FileText, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const AttendeeRegistration: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    title: '',
    city: '',
    state: '',
    industry: '',
    teamSize: '',
    leadershipRole: '',
    yearsInLeadership: '',
    biggestChallenge: '',
    summitGoals: '',
    wellnessInterests: '',
    networkingPreference: '',
    dietaryRestrictions: '',
    accommodationNeeds: '',
    emergencyContact: '',
    emergencyPhone: '',
    hearAboutUs: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Attendee registration submitted:', formData);
    alert('Thank you for registering! We will send you confirmation details soon.');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-sky-600 to-emerald-600 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-3">
            <div className="flex items-center justify-between mb-2 text-white">
              <img src="/cv logo .png" alt="Clear Vision Summit Logo" className="h-24 w-auto object-contain" />
              <span className="font-bold text-2xl md:text-3xl absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap">Clear Vision Summit 2026</span>
              <div></div>
            </div>
            
            <div className="flex items-center justify-center">
              <Link 
                to="/register" 
                className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors font-medium"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Registration Options</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-blue-50"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Attendee <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">Registration</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto">
              Join fellow leaders for this transformative wellness and leadership experience. Your journey to clarity starts here.
            </p>

            <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-sky-800 mb-3">What's Included in Your Registration:</h3>
              <div className="grid md:grid-cols-2 gap-3 text-sky-700">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Full 3-day summit access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">All wellness sessions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">POD session participation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Welcome reception and meals</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">90-day follow-up session</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Summit materials and resources</span>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <User className="w-5 h-5 text-sky-600" />
                  <span>Personal Information</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <Building className="w-5 h-5 text-sky-600" />
                  <span>Professional Information</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Organization/Company *</label>
                    <input
                      type="text"
                      name="organization"
                      required
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Job Title *</label>
                    <input
                      type="text"
                      name="title"
                      required
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                    <input
                      type="text"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      placeholder="e.g., Technology, Healthcare, Finance"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Team Size</label>
                    <select
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    >
                      <option value="">Select team size</option>
                      <option value="1-5">1-5 people</option>
                      <option value="6-20">6-20 people</option>
                      <option value="21-100">21-100 people</option>
                      <option value="100+">100+ people</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Leadership Information */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <Users className="w-5 h-5 text-sky-600" />
                  <span>Leadership Background</span>
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Leadership Role *</label>
                    <select
                      name="leadershipRole"
                      required
                      value={formData.leadershipRole}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    >
                      <option value="">Select your role</option>
                      <option value="ceo">CEO/President</option>
                      <option value="executive">C-Level Executive</option>
                      <option value="vp">Vice President</option>
                      <option value="director">Director</option>
                      <option value="manager">Manager/Team Lead</option>
                      <option value="supervisor">Supervisor</option>
                      <option value="emerging">Emerging Leader</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Years in Leadership</label>
                    <select
                      name="yearsInLeadership"
                      value={formData.yearsInLeadership}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    >
                      <option value="">Select experience</option>
                      <option value="0-1">0-1 years</option>
                      <option value="2-5">2-5 years</option>
                      <option value="6-10">6-10 years</option>
                      <option value="11-20">11-20 years</option>
                      <option value="20+">20+ years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">What's your biggest leadership challenge right now? *</label>
                    <textarea
                      name="biggestChallenge"
                      rows={3}
                      required
                      value={formData.biggestChallenge}
                      onChange={handleInputChange}
                      placeholder="Share what you're struggling with most as a leader..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">What do you hope to achieve at this summit? *</label>
                    <textarea
                      name="summitGoals"
                      rows={3}
                      required
                      value={formData.summitGoals}
                      onChange={handleInputChange}
                      placeholder="What are your goals and expectations for the summit?"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    />
                  </div>
                </div>
              </div>

              {/* Wellness & Preferences */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-sky-600" />
                  <span>Wellness & Preferences</span>
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Wellness Activities You're Most Interested In</label>
                    <textarea
                      name="wellnessInterests"
                      rows={2}
                      value={formData.wellnessInterests}
                      onChange={handleInputChange}
                      placeholder="e.g., mindfulness, beach walks, breathwork, yoga, etc."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Networking Preference</label>
                    <select
                      name="networkingPreference"
                      value={formData.networkingPreference}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    >
                      <option value="">Select preference</option>
                      <option value="structured">Structured networking activities</option>
                      <option value="organic">Organic/informal networking</option>
                      <option value="small-groups">Small group discussions</option>
                      <option value="one-on-one">One-on-one conversations</option>
                      <option value="minimal">Minimal networking</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-sky-600" />
                  <span>Additional Information</span>
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Dietary Restrictions/Allergies</label>
                    <input
                      type="text"
                      name="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={handleInputChange}
                      placeholder="Please list any dietary restrictions or allergies"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Special Accommodation Needs</label>
                    <textarea
                      name="accommodationNeeds"
                      rows={2}
                      value={formData.accommodationNeeds}
                      onChange={handleInputChange}
                      placeholder="Any accessibility needs or special accommodations"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact Name</label>
                      <input
                        type="text"
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact Phone</label>
                      <input
                        type="tel"
                        name="emergencyPhone"
                        value={formData.emergencyPhone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">How did you hear about us?</label>
                    <select
                      name="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    >
                      <option value="">Select source</option>
                      <option value="social-media">Social Media</option>
                      <option value="colleague">Colleague/Friend Referral</option>
                      <option value="email">Email Newsletter</option>
                      <option value="website">Website/Google Search</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  onClick={() => window.open('https://clearvisionleader.com/?gf_page=preview&id=6', '_blank')}
                  className="bg-gradient-to-r from-sky-600 to-blue-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:from-sky-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Complete Attendee Registration
                </button>
                <p className="text-gray-600 mt-4 text-sm">
                  You'll receive a confirmation email with payment details and next steps.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <img src="/cv logo .png" alt="Clear Vision Summit Logo" className="h-10 w-auto object-contain" />
              <span className="font-bold text-xl">Clear Vision Leadership Wellness Summit</span>
            </div>
            <p className="text-gray-400 mb-8">January 30 – February 1, 2026 • Ft. Walton Beach, Florida</p>
            
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">&copy; 2026 Clear Vision Leadership Wellness Summit. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AttendeeRegistration;