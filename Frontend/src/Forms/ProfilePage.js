import React from 'react';
import ProfilePageElements from '../Components/ProfilePageElements';
import Navbar from '../Components/Navbar';
import { useLocation } from 'react-router-dom';


const ProfilePage = () => {
  const location = useLocation();
  const { title, username, avatarUrl, rating, commentsCount, siteUrl } = location.state || {};


  const allImages = [
    'https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/5604520/pexels-photo-5604520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3053824/pexels-photo-3053824.jpeg',
    'https://images.pexels.com/photos/4906201/pexels-photo-4906201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/2705752/pexels-photo-2705752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3954259/pexels-photo-3954259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/5273556/pexels-photo-5273556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/4559763/pexels-photo-4559763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/5855528/pexels-photo-5855528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/5554272/pexels-photo-5554272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/5748665/pexels-photo-5748665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3805874/pexels-photo-3805874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1321943/pexels-photo-1321943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ];
  const aboutPhrases = [
    'Passionate Fashionista',
    'Creative Wardrobe Curator',
    'Dedicated Trendsetter',
    'Artistic Clothing Designer',
    'Vintage Fashion Enthusiast',
    'Eco-Friendly Fashion Advocate',
    'Luxury Style Connoisseur',
    'Minimalist Chic Devotee',
    'Urban Streetwear Lover',
    'Bohemian Fashion Explorer',
    'Glamorous Red Carpet Stunner',
    'Edgy and Experimental',
    'Fashion History Buff',
    'Statement Jewelry Aficionado',
    'Fashion Forward Thinker',
    'Runway Show Aficionado',
    'Upcycling Fashion Proponent',
    'Bold Color Palette Fanatic',
    'Texture and Fabric Maven',
    'Sustainable Fashion Evangelist',
    'High Heels Collector',
    'Vintage Store Treasure Hunter',
    'Fashion Photography Enthusiast',
    'Accessory Obsessed',
    'Couture Collector',
    'Fashion Magazine Devotee',
    'Timeless Elegance Admirer',
    'Avant-Garde Style Explorer',
    'Signature Scent Aficionado',
    'Texture and Fabric Maven',
    'Fashion Icon Worshiper',
  ];

  // Function to get a random slice of images
  const getRandomImages = (numImages) => {
    const shuffled = [...allImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numImages);
  };

  // Get a random slice of 5 images, for example
  const recentPhotos = getRandomImages(9);
  const randomAboutPhrases = [];
  while (randomAboutPhrases.length < 3) {
    const randomIndex = Math.floor(Math.random() * aboutPhrases.length);
    const randomPhrase = aboutPhrases[randomIndex];
    if (!randomAboutPhrases.includes(randomPhrase)) {
      randomAboutPhrases.push(randomPhrase);
    }
  }

  // Example props for the ProfilePageElements component
  const profileData = {
    name: {username},
    photosCount: 350,
    followersCount: 1200,
    followingCount: 500,
    about: [randomAboutPhrases],
    recentPhotos: recentPhotos,
    profileImageSrc: 'https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  };

  return (
    <>
      <Navbar />
      <ProfilePageElements
        name={username}
        location={profileData.location}
        photosCount={profileData.photosCount}
        followersCount={profileData.followersCount}
        followingCount={profileData.followingCount}
        about={profileData.about}
        recentPhotos={profileData.recentPhotos}
        profileImageSrc={avatarUrl} 
      />
    </>
  );
};

export default ProfilePage;
