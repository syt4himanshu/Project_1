import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Flag, 
  Users, 
  Trophy, 
  Heart, 
  ChevronRight,
  Activity
} from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import Badge from '../components/Badge';
import ProgressBar from '../components/ProgressBar';
import '../styles/tailwind-utilities.css';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-neutralLight dark:bg-gray-900 py-20">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl heading text-neutralDark dark:text-gray-100 leading-tight">
              Move Together, <span className="text-primary">Thrive Together</span>
            </h1>
            <p className="text-xl body">
              FitSphere connects you with local fitness enthusiasts, wellness challenges, 
              and health resources to support your physical and mental well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="btn-primary flex items-center space-x-2"
                onClick={() => navigate('/community')}
              >
                <Search className="h-5 w-5" />
                <span>Find a Group</span>
              </Button>
              <Button 
                variant="accent" 
                size="lg" 
                className="flex items-center space-x-2"
                onClick={() => navigate('/challenges')}
              >
                <Flag className="h-5 w-5" />
                <span>Start a Challenge</span>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { number: '1,250+', label: '30-Day Fitness Challenge' },
                { number: '890+', label: 'Hydration Challenge' },
                { number: '720+', label: 'Mindful Morning Challenge' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-accent">{stat.number}</div>
                  <div className="body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Group exercising together"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Activity className="h-6 w-6 text-emerald-500" />
                </div>
                <div>
                  <div className="font-semibold">Today's Goal</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">8,542 / 10,000 steps</div>
                  <ProgressBar value={85} className="mt-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: 'Local Workout Groups',
      description: 'Discover and join fitness groups near you. Connect with like-minded individuals and make fitness a social experience.',
      link: 'Find groups',
      path: '/community'
    },
    {
      icon: Trophy,
      title: 'Wellness Challenges',
      description: 'Participate in fun, gamified challenges that motivate you to stay active and track your progress with friendly competition.',
      link: 'View challenges',
      path: '/challenges'
    },
    {
      icon: Heart,
      title: 'Health Resources',
      description: 'Access a curated library of articles, videos, and tips to support your holistic health journey.',
      link: 'Explore resources',
      path: '/resources'
    }
  ];

  return (
    <div className="space-y-20 bg-neutralLight dark:bg-gray-900 min-h-screen pb-12">
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-16">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl heading text-neutralDark dark:text-gray-100 mb-4">
              Why Choose FitSphere?
            </h2>
            <p className="text-xl body">
              We provide everything you need to make fitness social, fun, and rewarding
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:scale-105 transition-transform duration-200">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-neutralDark dark:text-gray-100 mb-4 heading">
                  {feature.title}
                </h3>
                <p className="body mb-6">{feature.description}</p>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center space-x-1"
                  onClick={() => navigate(feature.path)}
                >
                  <span>{feature.link}</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Members Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of happy members transforming their lives together
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                content: "FitSphere completely changed my approach to fitness. I went from dreading workouts to looking forward to meeting my group every morning. The community support is incredible!",
                author: "Sarah J.",
                role: "Member since 2023",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                content: "The 30-day challenge was exactly what I needed to get back in shape. The progress tracking and team motivation kept me accountable. Lost 12 pounds and gained so much energy!",
                author: "Sahil s.",
                role: "Challenge Winner",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                content: "As a fitness newbie, I was intimidated at first. But the beginner-friendly groups and resources made me feel welcome. Now I'm leading my own walking group!",
                author: "Priya K.",
                role: "Group Leader",
                avatar: "https://randomuser.me/api/portraits/women/68.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 