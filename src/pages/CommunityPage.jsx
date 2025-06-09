import React, { useState } from 'react';
import { 
  MapPin, 
  Users, 
  Search, 
  Calendar 
} from 'lucide-react';
import { mockGroups } from '../data/mockData';
import Button from '../components/Button';

const CommunityPage = () => {
  const [groups] = useState(mockGroups);
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Your Fitness Crew</h1>
          <p className="text-xl text-gray-600">
            Connect with local workout groups and like-minded fitness enthusiasts
          </p>
        </div>
        
        {/* Map Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
              <MapPin className="h-6 w-6 mr-2 text-blue-600" />
              Find Groups Near You
            </h2>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4 mr-1" />
                Refresh
              </Button>
              <Button size="sm">
                <Users className="h-4 w-4 mr-1" />
                Create Group
              </Button>
            </div>
          </div>
          
          {/* Embedded Google Map */}
          <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1Q1sbo_LhneDQNy-_Nz2w6M34J9zHSLw&ehbc=2E312F"
              width="100%"
              height="100%"
              className="rounded-lg"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        
        {/* Groups Grid */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
              <Users className="h-6 w-6 mr-2 text-blue-600" />
              Recommended Groups
            </h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search groups..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {groups.map((group) => (
              <div key={group.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={group.image}
                  alt={group.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{group.name}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{group.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Users className="h-4 w-4 mr-1" />
                    <span className="text-sm">{group.members} members</span>
                  </div>
                  <div className="flex items-center text-sm text-blue-600 mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Next: {group.nextMeeting}</span>
                  </div>
                  <Button className="w-full">Join Group</Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CommunityPage; 