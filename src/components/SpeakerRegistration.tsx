import React, { useState } from 'react';
import { ArrowLeft, Mic, CheckCircle, User, Mail, Phone, Building, FileText, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const SpeakerRegistration: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    title: '',
    city: '',
    state: '',
    website: '',
    speakingExperience: '',
    topicProposal: '',
    audienceSize: '',
    speakingStyle: '',
    techRequirements: '',
    bio: '',
    headshot: '',
    socialMedia: '',
    previousEvents: '',
    dietaryRestrictions: '',
    emergencyContact: '',
    emergencyPhone: ''
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
    console.log('Speaker registration submitted:', formData);
    alert('Thank you for your speaker application! We will review and contact you soon.');
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
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mic className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Speaker <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Registration</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto">
              Share your expertise and inspire fellow leaders at the Clear Vision Leadership Wellness Summit. Join our lineup of transformational speakers.
            </p>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-amber-800 mb-3">What's Included as a Speaker:</h3>
              <div className="grid md:grid-cols-2 gap-3 text-amber-700">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Speaking opportunity at the summit</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Full summit access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Speaker networking events</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Professional headshots and bio inclusion</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Recording of your session</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Speaker appreciation dinner</span>
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
                  <User className="w-5 h-5 text-amber-600" />
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <Building className="w-5 h-5 text-amber-600" />
                  <span>Professional Information</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Organization/Company</label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Website/LinkedIn Profile</label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="https://"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                </div>
              </div>

              {/* Speaking Experience */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <Mic className="w-5 h-5 text-amber-600" />
                  <span>Speaking Experience</span>
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Speaking Experience Level *</label>
                    <select
                      name="speakingExperience"
                      required
                      value={formData.speakingExperience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    >
                      <option value="">Select experience level</option>
                      <option value="beginner">Beginner (0-5 speaking engagements)</option>
                      <option value="intermediate">Intermediate (6-20 speaking engagements)</option>
                      <option value="experienced">Experienced (21-50 speaking engagements)</option>
                      <option value="expert">Expert (50+ speaking engagements)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Proposed Topic/Presentation Title *</label>
                    <input
                      type="text"
                      name="topicProposal"
                      required
                      value={formData.topicProposal}
                      onChange={handleInputChange}
                      placeholder="What would you like to speak about?"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Largest Audience You've Spoken To</label>
                    <select
                      name="audienceSize"
                      value={formData.audienceSize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    >
                      <option value="">Select audience size</option>
                      <option value="1-25">1-25 people</option>
                      <option value="26-100">26-100 people</option>
                      <option value="101-500">101-500 people</option>
                      <option value="500+">500+ people</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Speaking Style/Format Preference</label>
                    <select
                      name="speakingStyle"
                      value={formData.speakingStyle}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    >
                      <option value="">Select preferred format</option>
                      <option value="keynote">Keynote Presentation</option>
                      <option value="workshop">Interactive Workshop</option>
                      <option value="panel">Panel Discussion</option>
                      <option value="fireside">Fireside Chat</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Technical Requirements</label>
                    <textarea
                      name="techRequirements"
                      rows={3}
                      value={formData.techRequirements}
                      onChange={handleInputChange}
                      placeholder="Any specific AV, tech, or setup requirements for your presentation..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                </div>
              </div>

              {/* Bio and Media */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <Video className="w-5 h-5 text-amber-600" />
                  <span>Bio and Media</span>
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Professional Bio (150-200 words) *</label>
                    <textarea
                      name="bio"
                      rows={5}
                      required
                      value={formData.bio}
                      onChange={handleInputChange}
                      placeholder="Please provide a professional bio that we can use for marketing materials..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Professional Headshot URL</label>
                    <input
                      type="url"
                      name="headshot"
                      value={formData.headshot}
                      onChange={handleInputChange}
                      placeholder="Link to your professional headshot (high resolution preferred)"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Social Media Handles</label>
                    <input
                      type="text"
                      name="socialMedia"
                      value={formData.socialMedia}
                      onChange={handleInputChange}
                      placeholder="Twitter, LinkedIn, Instagram handles for promotion"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Previous Speaking Events</label>
                    <textarea
                      name="previousEvents"
                      rows={3}
                      value={formData.previousEvents}
                      onChange={handleInputChange}
                      placeholder="List some notable events where you've spoken..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-amber-600" />
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact Phone</label>
                      <input
                        type="tel"
                        name="emergencyPhone"
                        value={formData.emergencyPhone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  onClick={() => window.open('https://clearvisionleader.com/?gf_page=preview&id=1', '_blank')}
                  className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Complete Speaker Registration
                </button>
                <p className="text-gray-600 mt-4 text-sm">
                  We'll review your application and contact you within 48 hours.
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

export default SpeakerRegistration;