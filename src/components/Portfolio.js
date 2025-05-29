import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project One",
    image: "/project1.jpg",
    description: "A brief description of project one goes here.",
  },
  {
    title: "Project Two",
    image: "/project2.jpg",
    description: "Another quick description of a second project.",
  },
  {
    title: "Project Three",
    image: "/project3.jpg",
    description: "Details about project three, with tech stack, etc.",
  },
];

const Portfolio = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <section
      id="portfolio"
      className={`py-5 ${isDark ? "bg-dark text-white" : "bg-light text-dark"}`}
    >
      <Container>
        <p
          className={`lead text-center custom-muted  ${
            isDark ? "" : "text-muted"
          }`}
        >
          View my work and projects that showcase my skills and creativity.
        </p>
        <h2 className="text-center mb-5 fw-bold">My Projects</h2>
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col md={6} lg={4} key={index}>
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  bg={isDark ? "secondary" : "light"}
                  text={isDark ? "light" : "dark"}
                  className="h-100 shadow-lg border-0"
                >
                  <Card.Img
                    variant="top"
                    src={project.image}
                    style={{ height: "200px", objectFit: "cover" }}
                    alt={project.title}
                  />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;

// when new projects are added, simply update the `projects` array with new objects containing the title, image path, and description for each project.
// import React from "react";
// import { Link } from "react-router-dom";

// const Portfolio = () => {
//   return (
//     <main className="portfolio container ">
//       <p
//         className="pageDescription text-center custom-muted "
//         style={{ opacity: 1, transform: "none" }}
//       >
//         View my work (Scroll down to see more...)
//       </p>
//       <h3
//         className="pageTitle text-center"
//         style={{ opacity: 1, transform: "none" }}
//       >
//         Portfolio
//       </h3>
//       <div className="row">
//         {/* Project 1 */}
//         <Link
//           className="projectLink col-12 col-lg-6"
//           to="/portfolio/real time sign language recognition and translation web app"
//         >
//           <div
//             style={{ opacity: 1, transform: "translateY(0vw) translateZ(0px)" }}
//           >
//             <div
//               className="projectCard d-flex align-items-center justify-content-center p-5"
//               style={{ backgroundColor: "var(--hl2-color)" }}
//             >
//               <div className="textWrap col-6 d-flex flex-column justify-content-center align-items-center m-5">
//                 <h3 className="projectTitle">
//                   Real Time Sign Language Recognition and Translation Web app
//                 </h3>
//                 <span className="viewWork">
//                   View Work <ArrowIcon />
//                 </span>
//               </div>
//               <div className="imageContainer col-6 d-flex align-items-center justify-content-center">
//                 <div style={imageWrapStyle}>
//                   <img
//                     src="portfolio/public/project1.jpg"
//                     // Replace with the actual image path
//                     className="fadeIn"
//                     alt="App"
//                     style={imageStyle}
//                   />
//                   <div className="spinner" style={spinnerStyle}></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Link>

//         {/* Repeat the above block for each additional project with their respective details... */}
//         {/* Example below: */}

//         <Link
//           className="projectLink col-12 col-lg-6"
//           to="/portfolio/scene graphs to image generation"
//         >
//           <div
//             style={{ opacity: 1, transform: "translateY(0vw) translateZ(0px)" }}
//           >
//             <div
//               className="projectCard d-flex align-items-center justify-content-center p-5"
//               style={{ backgroundColor: "var(--hl-color)" }}
//             >
//               <div className="textWrap col-6 d-flex flex-column justify-content-center align-items-center m-5">
//                 <h3 className="projectTitle">
//                   Scene Graphs to Image Generation
//                 </h3>
//                 <span className="viewWork">
//                   View Work <ArrowIcon />
//                 </span>
//               </div>
//               <div className="imageContainer col-6 d-flex align-items-center justify-content-center">
//                 <div style={imageWrapStyle}>
//                   <img
//                     src="portfolio/public/project2.jpg"
//                     // Replace with the actual image path
//                     className="fadeIn"
//                     alt="App"
//                     style={imageStyle}
//                   />
//                   <div className="spinner" style={spinnerStyle}></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Link>

//         {/* Continue for other projects like AI Scrabble Solver, MRI Classification, etc. */}
//       </div>
//     </main>
//   );
// };

// const ArrowIcon = () => (
//   <svg
//     stroke="currentColor"
//     fill="none"
//     strokeWidth="2"
//     viewBox="0 0 24 24"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     height="1em"
//     width="1em"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <line x1="7" y1="17" x2="17" y2="7" />
//     <polyline points="7 7 17 7 17 17" />
//   </svg>
// );

// const imageWrapStyle = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   width: "100%",
//   height: "100%",
// };

// const imageStyle = {
//   display: "block",
//   width: "100%",
//   height: "100%",
//   objectFit: "cover",
//   opacity: 1,
// };

// const spinnerStyle = {
//   display: "none",
//   fontSize: "24px",
// };

// export default Portfolio;
