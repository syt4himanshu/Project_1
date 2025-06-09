import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Heart, Activity, Clock } from 'lucide-react';

const ProfileCard = ({ user }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Header with avatar and basic info */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
        <div className="flex items-center space-x-4">
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <img
              src={user?.avatar || 'https://randomuser.me/api/portraits/lego/1.jpg'}
              alt={user?.name}
              className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1"
            >
              <div className="w-4 h-4 rounded-full bg-white" />
            </motion.div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold">{user?.name || 'Guest'}</h3>
            <p className="text-blue-100">
              {user?.age} years old • {user?.gender}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 gap-4 p-6 bg-gray-50">
        <motion.div variants={itemVariants} className="text-center">
          <div className="text-2xl font-bold text-blue-600">{user?.bmi || '--'}</div>
          <div className="text-sm text-gray-600">BMI</div>
        </motion.div>
        <motion.div variants={itemVariants} className="text-center">
          <div className="text-2xl font-bold text-blue-600">{user?.heartRate || '--'}</div>
          <div className="text-sm text-gray-600">Heart Rate</div>
        </motion.div>
      </div>

      {/* Goals and Preferences */}
      <div className="p-6 space-y-6">
        <motion.div variants={itemVariants}>
          <div className="flex items-center text-gray-700 mb-3">
            <Target className="h-5 w-5 mr-2 text-blue-600" />
            <h4 className="font-semibold">Fitness Goals</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {(user?.fitnessGoals || []).map((goal, index) => (
              <motion.span
                key={goal}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {goal}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="flex items-center text-gray-700 mb-3">
            <Activity className="h-5 w-5 mr-2 text-green-600" />
            <h4 className="font-semibold">Activity Preferences</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {(user?.preferences || []).map((pref, index) => (
              <motion.span
                key={pref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
              >
                {pref}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <Heart className="h-4 w-4 mr-1 text-red-500" />
              <span>Active Member</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
