import React, { useState } from 'react';

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,

  MDBTypography,
  MDBIcon,
} from 'mdb-react-ui-kit';
import "../Styles/ProfileCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasFaStar, faStarHalfAlt, faCheck } from '@fortawesome/free-solid-svg-icons';



const ProfileCard = ({ title, duration, price, username, avatarUrl, rating, commentsCount }) => {
  // Create a stars rating array based on the rating prop.
  const [isFollowed, setIsFollowed] = useState(false);
  const handleFollowClick = () => {
    setIsFollowed(!isFollowed);
  };


  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) {
      // Full star
      stars.push(<FontAwesomeIcon key={i} icon={fasFaStar} style={{ color: 'white' }} />);
    } else if (i === Math.floor(rating) && rating % 1 >= 0.5) {
      // Half star
      stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} style={{ color: 'white' }} />);
    } else {
      // Empty star
      stars.push(<FontAwesomeIcon key={i} icon={farFaStar} style={{ color: 'white' }} />);
    }
  }



  return (
    <>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol  className="mt-5">
            <MDBCard style={{ borderRadius: '15px', backgroundColor: '#2D3436',height: '300px', width: '350px' }}>
              <MDBCardBody className="p-4 text-white">
                <div>
                  <MDBTypography tag='h6'>{title}</MDBTypography>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    {/* <p className="small mb-0"><MDBIcon far icon="clock me-2" />{duration}</p>
                    <p className="fw-bold mb-0">${price}</p> */}
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                      className="img-fluid rounded-circle border border-dark border-3"
                      src={avatarUrl}
                      alt='Profile avatar'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <div className="d-flex flex-row align-items-center mb-2">
                      <p className="mb-0 me-2">{username}</p>
                      <ul className="mb-0 list-unstyled d-flex flex-row" style={{ color: '#1B7B2C' }}>
                        {stars}
                      </ul>
                    </div>
                    <div>
                    <button
                    className={`btn btn-sm ${isFollowed ? 'btn-success' : 'btn-outline-light'}`}
                    onClick={handleFollowClick}
                    type="button"
                  >
                    {isFollowed ? (
                      <>
                      <FontAwesomeIcon icon={faCheck} />

                        <FontAwesomeIcon icon="fa-solid fa-check" /> Followed
                      </>
                    ) : (
                      "+ Follow"
                    )}
                  </button>
                <button
                  className="btn btn-outline-light btn-sm mx-1"
          
                  type="button"
                >
                  Visit Website
                </button>

                    </div>
                  </div>
                </div>
                <hr />
                <MDBCardText>{commentsCount} comments</MDBCardText>
                      <button
                  className="btn btn-outline-light btn-sm"
                  type="button"
              >
                Contact Stylist
              </button>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </>
  );
};

export default ProfileCard;
