import React from 'react';
import ProfileForm from '../features/profile/ProfileForm';

const Profile = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Profile</h1>
      <div className="max-w-2xl mx-auto">
        <ProfileForm />
      </div>
    </div>
  );
};

export default Profile;
