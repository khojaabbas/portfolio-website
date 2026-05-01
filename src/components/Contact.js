import React from "react";
import { Row, Col, Button } from "react-bootstrap";
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
          <Col lg={6} className="mb-4">
            <div className="contactFormBox">
              <form className="contactForm mb-4">
                <h4 className="contentTitle mb-3">Send a Message</h4>

                <Button
                  className="d-flex align-items-center justify-content-center gap-2"
                  href="https://wa.me/923495478088"
                  target="_blank"
                  rel="noopener noreferrer"
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
                </Button>
              </form>

              <form className="contactForm">
                <h4 className="contentTitle mb-3">
                  You can access my CV below
                </h4>

                <Button
                  className="d-flex align-items-center justify-content-center"
                  href="/Tanveer_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  CV
                </Button>
              </form>
            </div>
          </Col>

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
                        href="mailto:tanveerkhoja786@gmail.com"
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