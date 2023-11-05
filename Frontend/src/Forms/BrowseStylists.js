import React from 'react';
import Navbar from '../Components/Navbar';
import ProfileCard from '../Components/ProfileCard';
import "../Styles/BrowseStylists.css";

// Dummy data array for stylist services
const stylistData = [
  // Add your stylist data objects here
  {
    id: 1,
    title: 'Exquisite Hand Henna Tattoo',
    duration: '3 hrs',
    price: 90,
    username: '@sheisme',
    avatarUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp',
    rating: 5, // Assuming the rating is out of 5
    commentsCount: '52',
  },
  {
    id: 1,
    title: 'Exquisite Hand Henna Tattoo',
    duration: '3 hrs',
    price: 90,
    username: '@sheisme',
    avatarUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp',
    rating: 5, // Assuming the rating is out of 5
    commentsCount: '52',
  },
];

const BrowseStylists = () => {
    return (
      <>
        <Navbar />
        <div className="container my-5">
          <div className="profile-card-row">
            {stylistData.map((stylist) => (
              <ProfileCard key={stylist.id} {...stylist} />
            ))}
          </div>
        </div>
      </>
    );
  };
  
  export default BrowseStylists;
