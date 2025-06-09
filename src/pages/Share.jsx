import React from 'react';
import { Share2, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import Button from '../components/Button';

const SharePage = () => {
  const shareLinks = [
    {
      platform: 'Facebook',
      icon: Facebook,
      color: 'bg-blue-600',
      url: 'https://facebook.com/sharer/sharer.php?u=https://fitsphere.com'
    },
    {
      platform: 'Twitter',
      icon: Twitter,
      color: 'bg-sky-500',
      url: 'https://twitter.com/intent/tweet?url=https://fitsphere.com&text=Join%20me%20on%20FitSphere!'
    },
    {
      platform: 'Instagram',
      icon: Instagram,
      color: 'bg-pink-600',
      url: 'https://instagram.com'
    },
    {
      platform: 'LinkedIn',
      icon: Linkedin,
      color: 'bg-blue-700',
      url: 'https://www.linkedin.com/shareArticle?mini=true&url=https://fitsphere.com'
    }
  ];

  const handleShare = (url) => {
    window.open(url, '_blank', 'width=600,height=400');
  };

  const handleEmailShare = () => {
    const subject = 'Join me on FitSphere!';
    const body = 'I think you would love FitSphere - a community of fitness enthusiasts helping each other stay motivated and achieve their goals. Check it out: https://fitsphere.com';
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Share2 className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Share FitSphere</h1>
          <p className="text-xl text-gray-600">
            Help others discover the power of community fitness
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Share with Friends</h2>
            <p className="text-gray-600 mb-8">
              Invite your friends to join FitSphere and start your fitness journey together
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {shareLinks.map(({ platform, icon: Icon, color, url }) => (
              <button
                key={platform}
                onClick={() => handleShare(url)}
                className={`flex flex-col items-center justify-center p-6 rounded-lg ${color} text-white hover:opacity-90 transition-opacity`}
              >
                <Icon className="h-8 w-8 mb-2" />
                <span className="font-medium">{platform}</span>
              </button>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={handleEmailShare}
              variant="outline"
              className="flex items-center justify-center space-x-2 mx-auto"
            >
              <Mail className="h-5 w-5" />
              <span>Share via Email</span>
            </Button>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Why Share FitSphere?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Community Support</h3>
              <p className="text-gray-600">
                Join a supportive community of like-minded fitness enthusiasts
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Stay Motivated</h3>
              <p className="text-gray-600">
                Challenge yourself and others to achieve fitness goals together
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Track Progress</h3>
              <p className="text-gray-600">
                Monitor your fitness journey and celebrate achievements
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharePage; 