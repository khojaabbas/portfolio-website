// portfolio/src/components/Contact.js
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaUser, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <main className="contact container py-5">
      <p className="pageDescription text-center py-0 custom-muted">
        Get in touch
      </p>
      <h1 className="pageTitle text-center mb-5 contact-heading">Contact</h1>

      <div className="contactWrap">
        <Row>
          {/* Left Column */}
          <Col lg={6} className="mb-4">
            <div className="contactFormBox">
              <form className="contactForm mb-4">
                <h4 className="contentTitle mb-3">Send a Message</h4>
                <div className="formGroup formSubmit">
                  <Button
                    className="btn d-flex align-items-center gap-2"
                    href="https://wa.me/923495478088"
                    style={{
                      backgroundColor: "#48A3C6",
                      color: "white",
                      border: "none",
                      padding: "12px 24px",
                      borderRadius: "50px",
                      fontSize: "16px",
                      width: "150px",
                      height: "48px",
                    }}
                  >
                    <span>WhatsApp</span>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="arrow-icon"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </Button>
                </div>
              </form>

              <form className="contactForm">
                <h4 className="contentTitle mb-3">
                  You can access my CV below
                </h4>
                <div className="formGroup">
                  <Button
                    style={{
                      backgroundColor: "#48A3C6",
                      color: "white",
                      border: "none",
                      padding: "12px 24px",
                      borderRadius: "50px",
                      fontSize: "16px",
                      width: "150px",
                      height: "48px",
                    }}
                  >
                    <a
                      href="/cv.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      CV
                    </a>
                  </Button>
                </div>
              </form>
            </div>
          </Col>

          {/* Right Column */}
          <Col lg={6}>
            <div className="contactInfo">
              <h3 className="contentTitle mb-3">Connect With Me</h3>
              <p className="infoDescription mb-4 custom-muted">
                Looking to build connections and share perspectives with
                talented developers working to create positive change.
              </p>
              <ul className="listInfo list-unstyled">
                <li className="mb-3 d-flex">
                  <FaUser className="me-3 mt-3 icon-custom" />

                  <div>
                    <h5 className="infoType">Name</h5>
                    <span className="infoValue custom-muted">
                      Tanveer Abbas
                    </span>
                  </div>
                </li>
                <li className="mb-3 d-flex">
                  <FaMapMarkerAlt className="me-3 mt-2 icon-custom" />
                  <div>
                    <h5 className="infoType">Location</h5>
                    <span className="infoValue custom-muted">Pakistan</span>
                  </div>
                </li>
                <li className="mb-3 d-flex">
                  <FaEnvelope className="me-3 mt-1 icon-custom" />
                  <div>
                    <h5 className="infoType">Email</h5>
                    <span className="infoValue">
                      <a
                        className="icon-custom"
                        href="mailto:tanveerkhoja786@gmail.com "
                      >
                        tanveerkhoja786@gmail.com
                      </a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </main>
  );
};

export default Contact;

// src/components/Contact.js
// import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import {
//   FaUser,
//   FaMapMarkerAlt,
//   FaEnvelope,
//   FaArrowRight,
// } from "react-icons/fa";

// const Contact = () => {
//   return (
//     <section
//       className="contact-section py-5 text-white"
//       style={{ backgroundColor: "#212529" }}
//     >
//       <Container>
//         <p className="text-uppercase text-muted">Get in touch</p>
//         <h2 className="mb-5 fw-bold">Contact</h2>
//         <Row>
//           {/* Left Column - Forms */}
//           <Col lg={6} className="mb-4">
//             {/* Send a Message */}
//             <form className="mb-4">
//               <h4 className="mb-3">Send a Message</h4>
//               <Button
//                 variant="outline-light"
//                 className="d-flex align-items-center gap-2"
//                 href="https://wa.me/923001234567"
//                 target="_blank"
//               >
//                 <span>WhatsApp</span>
//                 <FaArrowRight />
//               </Button>
//             </form>

//             {/* Download CV */}
//             <form>
//               <h4 className="mb-3">You can access my CV below</h4>
//               <Button
//                 style={{
//                   backgroundColor: "#48A3C6",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "50px",
//                   width: "140px",
//                   height: "48px",
//                 }}
//                 href="https://drive.google.com/file/d/1ZhuLE69UtAQIgUbY17Sug9QH4YPRTv_R/view?usp=drive_link"
//                 target="_blank"
//               >
//                 CV
//               </Button>
//             </form>
//           </Col>

//           {/* Right Column - Info */}
//           <Col lg={6}>
//             <div>
//               <h4 className="mb-3">Connect With Me</h4>
//               <p className="text-muted">
//                 Looking to build connections and share perspectives with
//                 talented developers working to create positive change.
//               </p>
//               <ul className="list-unstyled">
//                 <li className="d-flex align-items-start mb-3">
//                   <FaUser className="me-3 mt-1" />
//                   <div>
//                     <h6 className="mb-0">Name</h6>
//                     <small>Tanveer Abbas</small>
//                   </div>
//                 </li>
//                 <li className="d-flex align-items-start mb-3">
//                   <FaMapMarkerAlt className="me-3 mt-1" />
//                   <div>
//                     <h6 className="mb-0">Location</h6>
//                     <small>Pakistan</small>
//                   </div>
//                 </li>
//                 <li className="d-flex align-items-start">
//                   <FaEnvelope className="me-3 mt-1" />
//                   <div>
//                     <h6 className="mb-0">Email</h6>
//                     <small>
//                       <a
//                         href="mailto:tanveer@example.com"
//                         className="text-white"
//                       >
//                         tanveer@example.com
//                       </a>
//                     </small>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Contact;
