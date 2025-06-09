import React from 'react';
import Card from './Card';
import Badge from './Badge';
import '../styles/tailwind-utilities.css';

const getRankClass = (rank) => {
  if (rank === 1) return 'rank-gold';
  if (rank === 2) return 'rank-silver';
  if (rank === 3) return 'rank-bronze';
  return '';
};

const Leaderboard = ({ entries = [] }) => (
  <Card className="p-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-6 heading">Current Leaderboard</h2>
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
          {entries.map((entry, idx) => (
            <tr key={entry.rank} className="border-b border-gray-100 hover:bg-gray-50">
              <td className={`py-3 px-4 ${getRankClass(entry.rank)}`}>
                <Badge className="mr-2">#{entry.rank}</Badge>
              </td>
              <td className="py-3 px-4 font-medium">{entry.name}</td>
              <td className="py-3 px-4">{entry.progress}</td>
              <td className="py-3 px-4 font-semibold text-blue-600">{entry.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Card>
);

export default Leaderboard; 