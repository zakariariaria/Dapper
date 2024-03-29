import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";

function ProfilePageElements({
  name,
  location,
  photosCount,
  followersCount,
  followingCount,
  about,
  recentPhotos,
  profileImageSrc,
}) {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const toggleShowAllPhotos = () => {
    setShowAllPhotos(!showAllPhotos);
  };

  const photosToDisplay = showAllPhotos
    ? recentPhotos
    : recentPhotos.slice(0, 9);

  return (
    <div className="gradient-custom-2" style={{ backgroundColor: "#0e1111" }}>
      <MDBContainer className="py-2 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div
                className="rounded-top text-white d-flex flex-row"
                style={{ backgroundColor: "#0e1111", height: "200px", display:"flex", flexDirection:"row", justifyContent:"space-evenly",    alignItems: "center",
              }}
              >
                <div
                    className="ms-3"
                    style={{ display: "flex", flexDirection: "row", alignItems: "center"  }}
                  >
                  <MDBCardImage
                    src={profileImageSrc}
                    alt="Generic placeholder image"
                    className="mt-4 mb-2 img-thumbnail"
                    fluid
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      zIndex: "1",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    className="ms-3"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <MDBTypography tag="h5">{name}</MDBTypography>
                    <MDBCardText>{location}</MDBCardText>
                  </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
               
              
                  {/* <div >
                    {about.map((item, index) => (
                      <MDBCardText key={index} className="font-italic mb-1">
                        {item}
                      </MDBCardText>
                    ))}
                  </div> */}
                </div>
             
                </div>
              
              <MDBCardBody className="text-white p-4" style={{ backgroundColor: "#0e1111" }}>
       
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <button
                    onClick={toggleShowAllPhotos}
                    style={{ borderRadius: "18px", padding: "0rem 0.5rem " }}
                  >
                    {showAllPhotos ? "Show Less" : "Show More"}
                  </button>
                </div>
                <MDBRow>
                  {photosToDisplay.map((photo, index) => (
                    <MDBCol key={index} md="4" className="mb-2">
                      <MDBCardImage
                        src={photo}
                        alt={`image ${index + 1}`}
                        className="w-100 rounded-3"
                        style={{ height: "200px", width: "auto" }}
                      />
                    </MDBCol>
                  ))}
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default ProfilePageElements;
