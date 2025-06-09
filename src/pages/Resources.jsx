import React from 'react';
import WellnessResources from '../features/resources/WellnessResources';
import { Heart } from 'lucide-react';

const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <Heart className="h-8 w-8 mr-2 text-blue-600" />
            Wellness Resources
          </h1>
          <p className="text-xl text-gray-600">
            Explore our curated collection of fitness, nutrition, and mental wellness resources
          </p>
        </div>
        <WellnessResources />
      </div>
    </div>
  );
};

export default ResourcesPage;
