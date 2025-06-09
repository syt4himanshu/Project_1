import yogaImg from '../assets/Community_page_Yoga.webp';
import runImg from '../assets/Community_run.jpg';
import walkImg from '../assets/Community_walk.jpg';
import bookImg from '../assets/Community_book.jpg';
import mindfulImg from '../assets/Resources__mindful.jpeg';

export const mockChallenges = [
  {
    id: 1,
    title: "30-Day Step Challenge",
    description: "Walk 10,000 steps daily for 30 days",
    category: "fitness",
    participants: 245,
    duration: "30 days",
    difficulty: "Beginner",
    progress: 65,
    isActive: true
  },
  {
    id: 2,
    title: "Hydration Hero",
    description: "Drink 8 glasses of water daily",
    category: "nutrition",
    participants: 189,
    duration: "21 days",
    difficulty: "Easy",
    progress: 80,
    isActive: true
  },
  {
    id: 3,
    title: "Mindful Mornings",
    description: "10 minutes of meditation every morning",
    category: "mindfulness",
    participants: 156,
    duration: "14 days",
    difficulty: "Beginner",
    progress: 45,
    isActive: true
  }
];

export const mockGroups = [
  {
    id: 1,
    name: "Morning Runners",
    location: "V.N.I.T. Ground, NGP",
    members: 45,
    nextMeeting: "Tomorrow 7:00 AM",
    image: runImg
  },
  {
    id: 2,
    name: "Yoga Enthusiasts",
    location: "Seminary Hills",
    members: 32,
    nextMeeting: "Today 6:00 PM",
    image: yogaImg
  },
  {
    id: 3,
    name: "Nature Walkers",
    location: "Ambazari Lake",
    members: 28,
    nextMeeting: "Saturday 6:30 AM",
    image: walkImg
  },
  {
    id: 4,
    name: "Book Lovers Club",
    location: "Futala Lake",
    members: 19,
    nextMeeting: "Sunday 4:00 PM",
    image: bookImg
  }
];
export const mockResources = [
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
