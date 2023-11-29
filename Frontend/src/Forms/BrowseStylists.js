import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import ProfileCard from '../Components/ProfileCard';
import "../Styles/BrowseStylists.css";
import { MDBRow, MDBContainer, MDBCol, MDBBtn} from 'mdb-react-ui-kit';
import Logo_1 from '../Images/1_of_1.png' 
import fa_clothing from '../Images/fa_clothing.png'




// Dummy data array for stylist services
const stylistData = [
  // Each object is a unique stylist profile
  {
    id: 1,
    title: '1 of 1 Apparel',
    username: '@1_of_1_apparel',
    avatarUrl: Logo_1,
    rating: 5,
    commentsCount: '100',
    siteUrl: 'https://www.instagram.com/1_of_1_apparel/'
  },
  {
    id: 2,
    title: 'fa clothing',
    username: '@faclothingca',
    avatarUrl: fa_clothing,
    rating: 5,
    commentsCount: '85',
    siteUrl: 'https://www.instagram.com/faclothingca'
  },
  {
    id: 3,
    title: 'Boho Chic Makeover',
    duration: '3.5 hrs',
    price: 150,
    username: '@bohostyle',
    avatarUrl: 'https://plus.unsplash.com/premium_photo-1689629870780-5d0e655383e6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.7,
    commentsCount: '40',
  },
  {
    id: 4,
    title: 'Corporate Fashion Consulting',
    duration: '1.5 hrs',
    price: 80,
    username: '@theprofessional',
    avatarUrl: 'https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.5,
    commentsCount: '28',
  },
  {
    id: 5,
    title: 'Vintage Style Revival',
    duration: '2.5 hrs',
    price: 110,
    username: '@vintagequeen',
    avatarUrl: 'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?q=80&w=2849&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5,
    commentsCount: '74',
  },
  {
    id: 6,
    title: 'Teen Trendsetter Tips',
    duration: '2 hrs',
    price: 100,
    username: '@teenfashion',
    avatarUrl: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.6,
    commentsCount: '30',
  },
  {
    id: 7,
    title: 'Glam Night Out Looks',
    duration: '3 hrs',
    price: 200,
    username: '@glamstylist',
    avatarUrl: 'https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?q=80&w=3012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.7,
    commentsCount: '58',
  },
  {
    id: 8,
    title: 'Personal Shopping Assistant',
    duration: '4 hrs',
    price: 250,
    username: '@shopwithme',
    avatarUrl: 'https://images.unsplash.com/photo-1509868918748-a554ad25f858?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.8,
    commentsCount: '93',
  },
  {
    id: 9,
    title: 'Men\'s Fashion Advisor',
    duration: '1.5 hrs',
    price: 70,
    username: '@gentsstyle',
    avatarUrl: 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.9,
    commentsCount: '46',
  },
  {
    id: 10,
    title: 'Eco-Friendly Style Guide',
    duration: '2 hrs',
    price: 90,
    username: '@ecofashion',
    avatarUrl: 'https://images.unsplash.com/photo-1509868918748-a554ad25f858?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.7,
    commentsCount: '52',
  },
  {
    id: 11,
    title: 'Luxury Brand Consultant',
    duration: '3 hrs',
    price: 400,
    username: '@luxestyle',
    avatarUrl: 'https://plus.unsplash.com/premium_photo-1690579805307-7ec030c75543?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5,
    commentsCount: '89',
  },
  {
    id: 12,
    title: 'Active Sportswear Picks',
    duration: '1 hr',
    price: 50,
    username: '@activestylist',
    avatarUrl: 'https://images.unsplash.com/photo-1606459431839-90b942dc3754?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.4,
    commentsCount: '35',
  },
  {
    id: 13,
    title: 'Indie Fashion Curator',
    duration: '3 hrs',
    price: 130,
    username: '@indiechic',
    avatarUrl: 'https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.6,
    commentsCount: '47',
  },
  {
    id: 14,
    title: 'Celebrity Style Imitation',
    duration: '3.5 hrs',
    price: 500,
    username: '@starlookalike',
    avatarUrl: 'https://images.unsplash.com/photo-1609010697446-11f2155278f0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.9,
    commentsCount: '102',
  },

];




const BrowseStylists = () => {

  
  const [currentPage, setCurrentPage] = useState(1);
  const [profilesPerPage] = useState(9);

  // Get current profiles
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = stylistData.slice(indexOfFirstProfile, indexOfLastProfile);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const pageCount = Math.ceil(stylistData.length / profilesPerPage);

  // Function to create the pagination range
  const paginationRange = (current, total) => {
    const siblingsCount = 1; // Number of page numbers to show around the current page
    const totalNumbers = siblingsCount + 5; // Total page numbers to show at any time
    const totalBlocks = totalNumbers + 2; // Total including ellipses

    if (totalBlocks >= total) {
      return range(1, total);
    }

    const leftSiblingIndex = Math.max(current - siblingsCount, 1);
    const rightSiblingIndex = Math.min(current + siblingsCount, total);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < total - 2;

    const firstPageIndex = 1;
    const lastPageIndex = total;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingsCount;
      let leftRange = range(1, leftItemCount);
      return [...leftRange, '...', total];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingsCount;
      let rightRange = range(total - rightItemCount + 1, total);
      return [firstPageIndex, '...', ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, '...', ...middleRange, '...', lastPageIndex];
    }
  };

  // Utility function to create a range of numbers
  const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

  const paginationItems = paginationRange(currentPage, pageCount);

  return (
    <>
      <Navbar />
      <MDBContainer>
        <MDBRow>
          {currentProfiles.map((stylist, index) => (
            <MDBCol key={index} md="4" lg="4" className="mb-4">
              <ProfileCard {...stylist} />
            </MDBCol>
          ))}
        </MDBRow>
        <div className="pagination" style={{display:"flex", justifyContent:"center"}}>
          {paginationItems.map((item, index) => (
            <React.Fragment key={index}>
              {item === '...' ? (
                <span className="pagination-ellipsis">&hellip;</span>
              ) : (
                <button
                  onClick={() => paginate(item)}
                  className={currentPage === item ? 'active' : ''}
                  style={{backgroundColor:"transparent", color:"white", border:"none"}}
                >
                  {item}
                </button>
              )}
            </React.Fragment>
          ))}
        </div>
      </MDBContainer>
    </>
  );
};

export default BrowseStylists;
