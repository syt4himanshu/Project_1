import React, { useState } from 'react';
import { 
  Users, 
  Clock, 
  Award 
} from 'lucide-react';
import { mockChallenges } from '../data/mockData';
import Button from '../components/Button';

const ChallengeCard = ({ challenge, onJoin }) => {
  const difficultyColors = {
    Easy: 'bg-green-100 text-green-800',
    Beginner: 'bg-blue-100 text-blue-800',
    Intermediate: 'bg-yellow-100 text-yellow-800',
    Advanced: 'bg-red-100 text-red-800'
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{challenge.title}</h3>
          <p className="text-gray-600 mb-3">{challenge.description}</p>
        </div>
        <div className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[challenge.difficulty]}`}>
          {challenge.difficulty}
        </div>
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Progress</span>
          <span className="font-semibold">{challenge.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${challenge.progress}%` }}
          />
        </div>
        
        <div className="flex justify-between items-center text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{challenge.participants} participants</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{challenge.duration}</span>
          </div>
        </div>
      </div>
      
      <Button onClick={() => onJoin(challenge)} className="w-full">
        {challenge.isActive ? 'Continue Challenge' : 'Join Challenge'}
      </Button>
    </div>
  );
};

const ChallengesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [challenges] = useState(mockChallenges);
  
  const categories = [
    { id: 'all', label: 'All Challenges' },
    { id: 'fitness', label: 'Fitness' },
    { id: 'nutrition', label: 'Nutrition' },
    { id: 'mindfulness', label: 'Mindfulness' }
  ];
  
  const filteredChallenges = selectedCategory === 'all' 
    ? challenges 
    : challenges.filter(c => c.category === selectedCategory);
  
  const handleJoinChallenge = (challenge) => {
    alert(`Joined ${challenge.title}!`);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Take on a Challenge</h1>
          <p className="text-xl text-gray-600">
            Join these fun challenges to stay motivated and track your progress with friends
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredChallenges.map((challenge) => (
            <ChallengeCard
              key={challenge.id}
              challenge={challenge}
              onJoin={handleJoinChallenge}
            />
          ))}
        </div>
        
        {/* Leaderboard Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Leaderboard</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold">Rank</th>
                  <th className="text-left py-3 px-4 font-semibold">Name</th>
                  <th className="text-left py-3 px-4 font-semibold">Progress</th>
                  <th className="text-left py-3 px-4 font-semibold">Points</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { rank: 1, name: 'Sarah Williams', progress: '95%', points: 2850 },
                  { rank: 2, name: 'Mike Johnson', progress: '87%', points: 2610 },
                  { rank: 3, name: 'Emma Davis', progress: '82%', points: 2460 }
                ].map((entry) => (
                  <tr key={entry.rank} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        {entry.rank === 1 && <Award className="h-5 w-5 text-yellow-500 mr-2" />}
                        {entry.rank === 2 && <Award className="h-5 w-5 text-gray-400 mr-2" />}
                        {entry.rank === 3 && <Award className="h-5 w-5 text-orange-500 mr-2" />}
                        #{entry.rank}
                      </div>
                    </td>
                    <td className="py-3 px-4 font-medium">{entry.name}</td>
                    <td className="py-3 px-4">{entry.progress}</td>
                    <td className="py-3 px-4 font-semibold text-blue-600">{entry.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ChallengesPage; 