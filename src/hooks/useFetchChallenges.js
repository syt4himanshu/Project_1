import { useState, useEffect } from 'react';

const mockChallenges = [
  {
    id: 1,
    title: '30-Day Step Challenge',
    description: 'Walk 10,000 steps daily for 30 days',
    category: 'fitness',
    participants: 245,
    duration: '30 days',
    difficulty: 'Beginner',
    progress: 65,
    isActive: true,
  },
  {
    id: 2,
    title: 'Morning Yoga Challenge',
    description: 'Complete a 15-minute yoga session every morning',
    category: 'wellness',
    participants: 189,
    duration: '21 days',
    difficulty: 'Intermediate',
    progress: 42,
    isActive: true,
  },
  {
    id: 3,
    title: 'Hydration Challenge',
    description: 'Drink 8 glasses of water daily',
    category: 'health',
    participants: 312,
    duration: '14 days',
    difficulty: 'Beginner',
    progress: 78,
    isActive: true,
  },
];

const useFetchChallenges = () => {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setChallenges(mockChallenges);
      setLoading(false);
    }, 1000);
  }, []);

  return { challenges, loading, error };
};

export default useFetchChallenges;
