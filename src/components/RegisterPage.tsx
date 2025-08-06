import React from 'react';
import { ArrowLeft, Users, Mic, Target, ExternalLink } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const registrationOptions = [
    {
      type: 'Speaker',
      icon: Mic,
      title: 'Register as a Speaker',
      description: 'Share your expertise and inspire fellow leaders at the summit. Join our lineup of transformational speakers.',
      features: [
        'Speaking opportunity at the summit',
        'Full summit access',
        'Speaker networking events',
        'Professional headshots and bio inclusion',
        'Recording of your session'
      ],
      color: 'from-amber-500 to-orange-500',
      bgColor: 'from-amber-50 to-orange-50',
      borderColor: 'border-amber-200',
      link: 'https://clearvisionleader.com/?gf_page=preview&id=6'
    },
    {
      type: 'Coach',
      icon: Target,
      title: 'Register as a Coach',
      description: 'Guide and mentor attendees through their leadership journey. Facilitate POD sessions and provide personalized guidance.',
      features: [
        'Lead POD (Pause + Plan) sessions',
        'Full summit access',
        'Coach training materials',
        'Networking with fellow coaches',
        'Continuing education credits'
      ],
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-50 to-teal-50',
      borderColor: 'border-emerald-200',
      link: 'https://clearvisionleader.com/?gf_page=preview&id=5'
    },
    {
      type: 'Attendee',
      icon: Users,
      title: 'Register as an Attendee',
      description: 'Join fellow leaders for this transformative wellness and leadership experience. Your journey to clarity starts here.',
      features: [
        'Full 3-day summit access',
        'All wellness sessions',
        'POD session participation',
        'Welcome reception and meals',
        '90-day follow-up session'
      ],
      color: 'from-sky-500 to-blue-500',
      bgColor: 'from-sky-50 to-blue-50',
      borderColor: 'border-sky-200',
      link: 'https://clearvisionleader.com/?gf_page=preview&id=1'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-sky-600 to-emerald-600 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-3">
            {/* Top line - Logo and Title */}
            <div className="flex items-center justify-between mb-2 text-white">
              <img src="/cv logo .png" alt="Clear Vision Summit Logo" className="h-24 w-auto object-contain" />
              <span className="font-bold text-2xl md:text-3xl absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap">Clear Vision Summit 2026</span>
              <div></div>
            </div>
            
            {/* Bottom line - Back to Home */}
            <div className="flex items-center justify-center">
              <Link 
                to="/" 
                className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors font-medium"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-emerald-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-emerald-600">Registration</span> Path
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Whether you're here to share your expertise, guide others, or transform your own leadership journey, 
              we have the perfect registration option for you.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-8 text-lg text-gray-700 font-medium">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                <span>January 30 – February 1, 2026</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                <span>The Island Resort, Ft. Walton Beach, FL</span>
              </div>
            </div>
          </div>

          {/* Registration Options */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {registrationOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${option.bgColor} border ${option.borderColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                >
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{option.description}</p>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
                    <ul className="space-y-2">
                      {option.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2 text-gray-700">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <a
                      href={option.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center space-x-2 bg-gradient-to-r ${option.color} text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105`}
                    >
                      <span>Register as {option.type}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Information */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About Registration?</h3>
              <p className="text-gray-600 mb-6">
                Not sure which registration type is right for you? Our team is here to help you choose the perfect path for your summit experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:ClearvisionConference@gmail.com" 
                  className="text-sky-600 hover:text-sky-700 font-medium flex items-center justify-center space-x-2"
                >
                  <span>📧</span>
                  <span>ClearvisionConference@gmail.com</span>
                </a>
                <a 
                  href="tel:+18504993261" 
                  className="text-sky-600 hover:text-sky-700 font-medium flex items-center justify-center space-x-2"
                >
                  <span>📞</span>
                  <span>(850) 499-3261</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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

export default RegisterPage;