import React, { useState } from 'react';
import { MessageCircle, Heart, Share2 } from 'lucide-react';
import Button from '../../components/Button';

const PostCard = ({ post }) => {
  const [likes, setLikes] = useState(post.likes || 0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLikes(liked ? likes - 1 : likes + 1);
    setLiked(!liked);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        <img
          src={post.avatar || 'https://randomuser.me/api/portraits/lego/1.jpg'}
          alt={post.author}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{post.author}</h3>
          <p className="text-sm text-gray-500">{post.timestamp}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4">{post.content}</p>
      {post.image && (
        <img src={post.image} alt="Post content" className="w-full h-48 object-cover rounded-lg mb-4" />
      )}
      <div className="flex items-center space-x-4">
        <button
          onClick={handleLike}
          className={`flex items-center space-x-1 ${liked ? 'text-red-600' : 'text-gray-600'}`}
        >
          <Heart className={`h-5 w-5 ${liked ? 'fill-current' : ''}`} />
          <span>{likes}</span>
        </button>
        <button className="flex items-center space-x-1 text-gray-600">
          <MessageCircle className="h-5 w-5" />
          <span>{post.comments || 0}</span>
        </button>
        <button className="flex items-center space-x-1 text-gray-600">
          <Share2 className="h-5 w-5" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;
