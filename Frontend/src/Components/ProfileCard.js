import React from 'react';
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


const ProfileCard = ({ title, duration, price, username, avatarUrl, rating, commentsCount }) => {
  // Create a stars rating array based on the rating prop.
  const stars = Array.from({ length: 5 }, (_, index) => (
    <MDBIcon key={index} fas icon={`star ${index < rating ? '' : '-o'} fa-xs`} />
  ));



  return (
    <>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="7" lg="6" xl="4" className="mt-5">
            <MDBCard style={{ borderRadius: '15px', backgroundColor: '#2D3436' }}>
              <MDBCardBody className="p-4 text-white">
                <div>
                  <MDBTypography tag='h6'>{title}</MDBTypography>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <p className="small mb-0"><MDBIcon far icon="clock me-2" />{duration}</p>
                    <p className="fw-bold mb-0">${price}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '70px' }}
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
                  className="btn btn-outline-light btn-sm"
                 
                  type="button"
                >
                  + Follow
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
