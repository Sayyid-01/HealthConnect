import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, FileText, Clock, Users, Search, ChevronRight, Star, CheckCircle, ExternalLink, Headphones } from 'lucide-react';

const SupportHelp = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLiveChatOpen, setIsLiveChatOpen] = useState(false);

  const supportOptions = [
    {
      id: 'live-chat',
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      status: 'Available now',
      statusColor: 'text-green-600',
      action: 'Start Chat',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      id: 'phone',
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      status: '+91 98765 43210',
      statusColor: 'text-slate-600',
      action: 'Call Now',
      gradient: 'from-green-400 to-green-600'
    },
    {
      id: 'email',
      icon: Mail,
      title: 'Email Support',
      description: 'Send us your questions anytime',
      status: 'support@healthconnect.com',
      statusColor: 'text-slate-600',
      action: 'Send Email',
      gradient: 'from-purple-400 to-purple-600'
    },
    {
      id: 'help-center',
      icon: FileText,
      title: 'Help Center',
      description: 'Browse our knowledge base',
      status: '150+ articles',
      statusColor: 'text-slate-600',
      action: 'Browse',
      gradient: 'from-orange-400 to-orange-600'
    }
  ];

  const faqItems = [
    {
      question: 'How do I upload a new prescription?',
      answer: 'Go to My Prescriptions and click the "Upload New Prescription" button. You can take a photo or upload an existing image.',
      category: 'Prescriptions'
    },
    {
      question: 'How can I change my password?',
      answer: 'Navigate to Settings > Security > Change Password. You\'ll need your current password to set a new one.',
      category: 'Account'
    },
    {
      question: 'What file formats are supported for prescriptions?',
      answer: 'We support JPG, PNG, PDF, and HEIC formats. Files should be clear and readable for best results.',
      category: 'Technical'
    },
    {
      question: 'How do I contact my doctor through the app?',
      answer: 'Use the Messages feature to send secure messages to your healthcare providers directly through the platform.',
      category: 'Communication'
    },
    {
      question: 'Is my health data secure?',
      answer: 'Yes, we use enterprise-grade encryption and comply with healthcare privacy regulations to protect your data.',
      category: 'Privacy'
    }
  ];

  const supportHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 4:00 PM' }
  ];

  const filteredFAQs = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSupportAction = (optionId) => {
    switch(optionId) {
      case 'live-chat':
        setIsLiveChatOpen(true);
        break;
      case 'phone':
        window.open('tel:+919876543210');
        break;
      case 'email':
        window.open('mailto:support@healthconnect.com');
        break;
      case 'help-center':
        // Navigate to help center
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Headphones className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Support & Help Center
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We're here to help you every step of the way. Get the support you need, when you need it.
          </p>
        </div>

        {/* Support Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {supportOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <div
                key={option.id}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleSupportAction(option.id)}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${option.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                  {option.title}
                </h3>
                <p className="text-slate-600 text-sm mb-3">{option.description}</p>
                <p className={`text-sm font-medium ${option.statusColor} mb-4`}>
                  {option.status}
                </p>
                <button className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white py-2 px-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg">
                  {option.action}
                </button>
              </div>
            );
          })}
        </div>

        {/* Support Hours Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-6 h-6 text-teal-600" />
            <h2 className="text-xl font-bold text-slate-800">Support Hours</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {supportHours.map((schedule, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-4">
                <p className="font-semibold text-slate-700">{schedule.day}</p>
                <p className="text-slate-600">{schedule.hours}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Frequently Asked Questions</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-5 hover:bg-slate-100 transition-colors duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium bg-teal-100 text-teal-700 px-2 py-1 rounded-full">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-slate-800 mb-2">{faq.question}</h3>
                    <p className="text-slate-600 text-sm">{faq.answer}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 ml-4 mt-1" />
                </div>
              </div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-600 mb-2">No results found</h3>
              <p className="text-slate-500">Try searching with different keywords</p>
            </div>
          )}
        </div>

        {/* Contact Form Section */}
        <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
              />
              <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300">
                <option>Select Issue Type</option>
                <option>Technical Support</option>
                <option>Account Issues</option>
                <option>Billing Questions</option>
                <option>Feature Request</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <textarea
                placeholder="Describe your issue or question..."
                rows={6}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 resize-none"
              ></textarea>
            </div>
          </div>
          <button className="mt-6 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">
            Send Message
          </button>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-6 text-white">
            <CheckCircle className="w-8 h-8 mb-3" />
            <h3 className="text-lg font-bold mb-2">System Status</h3>
            <p className="text-green-100 text-sm mb-3">All systems operational</p>
            <button className="text-white hover:text-green-100 flex items-center gap-1 text-sm font-medium">
              View Details <ExternalLink className="w-4 h-4" />
            </button>
          </div>
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-6 text-white">
            <Users className="w-8 h-8 mb-3" />
            <h3 className="text-lg font-bold mb-2">Community</h3>
            <p className="text-blue-100 text-sm mb-3">Connect with other users</p>
            <button className="text-white hover:text-blue-100 flex items-center gap-1 text-sm font-medium">
              Join Discussion <ExternalLink className="w-4 h-4" />
            </button>
          </div>
          <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl p-6 text-white">
            <Star className="w-8 h-8 mb-3" />
            <h3 className="text-lg font-bold mb-2">Feedback</h3>
            <p className="text-purple-100 text-sm mb-3">Help us improve our service</p>
            <button className="text-white hover:text-purple-100 flex items-center gap-1 text-sm font-medium">
              Share Feedback <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Live Chat Modal */}
      {isLiveChatOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-800">Live Chat</h3>
              <button 
                onClick={() => setIsLiveChatOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                ×
              </button>
            </div>
            <p className="text-slate-600 mb-4">
              Connect with our support team for instant assistance.
            </p>
            <div className="flex gap-2">
              <button 
                onClick={() => setIsLiveChatOpen(false)}
                className="flex-1 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white py-2 px-4 rounded-xl font-medium transition-all duration-300"
              >
                Start Chat
              </button>
              <button 
                onClick={() => setIsLiveChatOpen(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportHelp;