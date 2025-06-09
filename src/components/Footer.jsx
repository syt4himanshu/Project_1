import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Trophy, 
  Share2, 
  ChevronRight 
} from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Challenges', path: '/challenges' },
    { label: 'Community', path: '/community' },
    { label: 'Resources', path: '/resources' },
    { label: 'Profile', path: '/profile' }
  ];

  const supportLinks = [
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Trophy className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">FitSphere</span>
            </div>
            <p className="text-gray-300 mb-4">
              Connecting fitness enthusiasts to move together and thrive together. 
              Our mission is to make fitness social, accessible, and enjoyable for everyone.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleNavigation('/share')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ label, path }) => (
                <li key={label}>
                  <button 
                    onClick={() => handleNavigation(path)}
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map(({ label, path }) => (
                <li key={label}>
                  <button 
                    onClick={() => handleNavigation(path)}
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 FitSphere. All rights reserved. Move Together, Thrive Together.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
