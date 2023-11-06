import React from 'react';
import Navbar from '../Components/Navbar';
import ProfileCard from '../Components/ProfileCard';
import "../Styles/BrowseStylists.css";
import { MDBRow, MDBContainer, MDBCol } from 'mdb-react-ui-kit';


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
      <MDBContainer>
  <MDBRow >
    {stylistData.map((stylist, index) => (
      <MDBCol key={index} md="4" lg="4" className="mb-4 ">
        <ProfileCard {...stylist} />
      </MDBCol>
    ))}
  </MDBRow>
</MDBContainer>

    </>
  );
};

export default BrowseStylists;
