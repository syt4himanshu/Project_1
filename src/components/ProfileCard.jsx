import React from 'react';
import { User, Target } from 'lucide-react';

const ProfileCard = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4">
      <img
        src={user?.avatar || 'https://randomuser.me/api/portraits/lego/1.jpg'}
        alt={user?.name}
        className="w-16 h-16 rounded-full"
      />
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{user?.name || 'Guest'}</h3>
        <p className="text-gray-600 text-sm">
          Goals: {(user?.fitnessGoals || []).join(', ') || 'None set'}
        </p>
        <div className="flex items-center text-blue-600 text-sm">
          <Target className="h-4 w-4 mr-1" />
          <span>{user?.preferences?.[0] || 'No preferences'}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
