import React, { useState } from "react";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

const ShoppingItems = ({ items }) => {
  const [keptItems, setKeptItems] = useState(
    new Array(items.length).fill(true)
  );
  // Get only the kept items
  const keptItemsList = items.filter((item, index) => keptItems[index]);

  // Calculate the total price of kept items
  const keptTotalPrice = keptItemsList.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const handleKeepItem = (index) => {
    const updatedKeptItems = [...keptItems];
    updatedKeptItems[index] = true;
    setKeptItems(updatedKeptItems);
  };

  const handleReturnItem = (index) => {
    const updatedKeptItems = [...keptItems];
    updatedKeptItems[index] = false;
    setKeptItems(updatedKeptItems);
  };

  return (
    <section className=" h-custom" style={{ backgroundColor: "transparent" }}>
      <MDBContainer className="h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="10">
            <MDBCard
              className="card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <MDBCardBody className="p-2">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography
                          tag="h3"
                          className="fw-bold mb-0 text-white"
                        >
                          Return Cart
                        </MDBTypography>
                        <MDBTypography className="mb-0 text-white">
                          {items.length} {items.length === 1 ? "item" : "items"}
                        </MDBTypography>
                      </div>

                      <hr className="mt-0 text-white" />

                      {items.map((item, index) => (
                        <MDBRow
                          className="mb-2 d-flex justify-content-between align-items-center item-animation"
                          key={item.id}
                          style={{ animationDelay: `${index * 0.2}s` }} // Add a delay based on the index
                        >
                          <MDBCol md="2" lg="2" xl="2">
                            <MDBCardImage
                              src={item.imageUrl}
                              fluid
                              className="rounded-3"
                              alt={item.description}
                            />
                          </MDBCol>
                          <MDBCol md="3" lg="3" xl="3">
                            <MDBTypography tag="h6" className="text-white">
                              {item.name}
                            </MDBTypography>
                            <MDBTypography tag="h6" className="text-white mb-0">
                              {item.description}
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol
                            md="3"
                            lg="3"
                            xl="3"
                            className="d-flex align-items-center justify-content-between"
                          >
                            <button
                              type="button"
                              className="btn btn-success text-nowrap me-2" // Added text-nowrap and me-2 for space
                              onClick={() => handleKeepItem(index)}
                              disabled={keptItems[index]}
                            >
                              Keep Item
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger text-nowrap" // Added text-nowrap
                              onClick={() => handleReturnItem(index)}
                              disabled={!keptItems[index]}
                            >
                              Return
                            </button>
                          </MDBCol>
                          <MDBCol md="3" lg="2" xl="2" className="text-end">
                            <MDBTypography tag="h6" className="mb-0 text-white">
                              $ {item.price.toFixed(2)}
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol md="1" lg="1" xl="1" className="text-end">
                            <a href="#!" className="text-white">
                              <MDBIcon fas icon="times" />
                            </a>
                          </MDBCol>
                          <hr className="my-4 text-white" />
                        </MDBRow>
                      ))}
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="bg-grey">
                    <div className="p-5">
                      <MDBTypography
                        tag="h3"
                        className="fw-bold mb-5 mt-2 pt-1 text-white"
                      >
                        Summary
                      </MDBTypography>

                      <hr className="my-4 text-white" />

                      {keptItemsList.map((item, index) => (
                        <div
                          key={item.id}
                          className="d-flex justify-content-between mb-4"
                        >
                          <MDBTypography tag="h5" className="text-white">
                            {item.name}
                          </MDBTypography>
                          <MDBTypography tag="h5" className="text-white">
                            $ {item.price.toFixed(2)}
                          </MDBTypography>
                        </div>
                      ))}

                      {/* Display the total price */}
                      <div className="d-flex justify-content-between mb-5">
                        <MDBTypography
                          tag="h5"
                          className="text-uppercase text-white"
                        >
                          Total price
                        </MDBTypography>
                        <MDBTypography tag="h5" className="text-white">
                          $ {keptTotalPrice.toFixed(2)}
                        </MDBTypography>
                      </div>

                      <button type="button" className="btn btn-success">
                        Return cart
                      </button>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};
export default ShoppingItems;
