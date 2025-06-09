import React, { useState } from 'react';
import PostCard from './PostCard';
import Button from '../../components/Button';
import { Camera } from 'lucide-react';

const mockPosts = [
  {
    id: 1,
    author: 'Alex R.',
    content: 'Just completed the 30-Day Yoga Challenge! Feeling amazing! 🧘‍♂️',
    timestamp: '2 hours ago',
    likes: 34,
    comments: 12,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=200&fit=crop',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    id: 2,
    author: 'Lisa M.',
    content: 'Any tips for staying hydrated during long runs? 🏃‍♀️',
    timestamp: '5 hours ago',
    likes: 19,
    comments: 8,
    avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
  },
];

const CommunityFeed = () => {
  const [posts, setPosts] = useState(mockPosts);
  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      const newPostObj = {
        id: posts.length + 1,
        author: 'Current User', // Replace with actual user from context
        content: newPost,
        timestamp: 'Just now',
        likes: 0,
        comments: 0,
        avatar: 'https://randomuser.me/api/portraits/lego/1.jpg',
      };
      setPosts([newPostObj, ...posts]);
      setNewPost('');
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Share Your Thoughts</h2>
        <form onSubmit={handlePostSubmit}>
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 resize-none"
            rows="4"
          />
          <div className="flex justify-between items-center mt-4">
            <button className="text-gray-600 hover:text-blue-600">
              <Camera className="h-6 w-6" />
            </button>
            <Button type="submit">Post</Button>
          </div>
        </form>
      </div>
      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default CommunityFeed;
