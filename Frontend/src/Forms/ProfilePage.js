import React from 'react';
import ProfilePageElements from '../Components/ProfilePageElements';
import Navbar from '../Components/Navbar';

const ProfilePage = () => {
  // Example props for the ProfilePageElements component
  const profileData = {
    name: 'John Doe',
    location: 'Los Angeles',
    photosCount: 350,
    followersCount: 1200,
    followingCount: 500,
    about: ['Software Engineer', 'Loves coding', 'Hiking enthusiast'],
    recentPhotos: [
      'https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp',
      'https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp',
      'https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp',
      'https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp',
    ],
    profileImageSrc: 'https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  };

  return (
    <>
      <Navbar />
      <ProfilePageElements
        name={profileData.name}
        location={profileData.location}
        photosCount={profileData.photosCount}
        followersCount={profileData.followersCount}
        followingCount={profileData.followingCount}
        about={profileData.about}
        recentPhotos={profileData.recentPhotos}
        profileImageSrc={profileData.profileImageSrc} 
      />
    </>
  );
};

export default ProfilePage;
