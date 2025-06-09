import React, { useState } from 'react';
import { Heart, Activity, Apple } from 'lucide-react';
import Button from '../../components/Button';
import mindfulImg from '../../assets/Resources__mindful.jpeg';

const mockResources = [
  {
    id: 1,
    title: '10 Minute Morning Workout',
    category: 'workouts',
    type: 'video',
    duration: '10 min',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop',
    link: 'https://youtu.be/9g4z0gFlfpA?si=oQ48fHekvm5GOJQB',
  },
  {
    id: 2,
    title: 'Healthy Meal Planning Guide',
    category: 'nutrition',
    type: 'article',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=300&h=200&fit=crop',
    link: 'https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/healthy-meals/art-20546806',
  },
  {
    id: 3,
    title: 'Mindfulness Meditation Basics',
    category: 'mental-wellness',
    type: 'video',
    duration: '15 min',
    image: mindfulImg,
    link: 'https://youtu.be/IzV6J4WCwRM?si=w2HtXTq6Qp_XN8Td',
  },
];

const WellnessResources = () => {
  const [selectedTab, setSelectedTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Resources', icon: Heart },
    { id: 'workouts', label: 'Workouts', icon: Activity },
    { id: 'nutrition', label: 'Nutrition', icon: Apple },
    { id: 'mental-wellness', label: 'Mental Wellness', icon: Heart },
  ];

  const filteredResources =
    selectedTab === 'all' ? mockResources : mockResources.filter((r) => r.category === selectedTab);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setSelectedTab(id)}
            className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 ${
              selectedTab === id ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-blue-50'
            }`}
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredResources.map((resource) => (
          <div
            key={resource.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={resource.image}
              alt={resource.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
              <div className="flex items-center text-gray-600 mb-4">
                {resource.type === 'video' ? (
                  <span>{resource.duration}</span>
                ) : (
                  <span>{resource.readTime}</span>
                )}
              </div>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.open(resource.link, '_blank', 'noopener,noreferrer')}
              >
                {resource.type === 'video' ? 'Watch Now' : 'Read Now'}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WellnessResources;
