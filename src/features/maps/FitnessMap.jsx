import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import Button from '../../components/Button';

const FitnessMap = () => {
  const [filter, setFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Activities' },
    { id: 'running', label: 'Running' },
    { id: 'cycling', label: 'Cycling' },
    { id: 'yoga', label: 'Yoga' },
    { id: 'walking', label: 'Walking' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Fitness Groups Map</h2>
        <div className="flex space-x-3">
          <div className="relative">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {filters.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.label}
                </option>
              ))}
            </select>
            <Filter className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
          <Button variant="outline" size="sm">
            <Search className="h-4 w-4 mr-1" />
            Search
          </Button>
        </div>
      </div>
      <div className="w-full h-96 bg-gray-200 rounded-lg">
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
  );
};

export default FitnessMap;
