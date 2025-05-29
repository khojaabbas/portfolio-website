// import React from "react";
// import { Navbar, Nav, Container, Button } from "react-bootstrap";

// const CustomNavbar = ({ onNavigate, activeSection, onToggleTheme, theme }) => {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
//       <Container>
//         <Navbar.Brand
//           onClick={() => onNavigate("home")}
//           style={{
//             cursor: "pointer",
//             backgroundColor: "#48A3C6",
//             color: "white",
//             // fontWeight: "bold",
//             fontSize: "0.5rem",
//             width: "30px",
//             height: "30px",
//             borderRadius: "50%",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             boxShadow: "0 0 6px rgba(0, 0, 0, 0.15)",
//             transition: "transform 0.3s ease",
//           }}
//           onMouseEnter={(e) => {
//             e.target.style.transform = "scale(1.1)";
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.transform = "scale(1)";
//           }}
//         >
//           T&nbsp;A
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse
//           id="basic-navbar-nav"
//           className="justify-content-end align-items-center"
//         >
//           <Nav className="me-3">
//             <Nav.Link
//               onClick={() => onNavigate("home")}
//               active={activeSection === "home"}
//             >
//               Home
//             </Nav.Link>
//             <Nav.Link
//               onClick={() => onNavigate("portfolio")}
//               active={activeSection === "portfolio"}
//             >
//               Portfolio
//             </Nav.Link>
//             <Nav.Link
//               onClick={() => onNavigate("contact")}
//               active={activeSection === "contact"}
//             >
//               Contact
//             </Nav.Link>
//           </Nav>
//           <Button onClick={onToggleTheme} variant="outline-light" size="sm">
//             {theme === "dark" ? "Light Mode" : "Dark Mode"}
//           </Button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default CustomNavbar;

// src/components/Navbar.js
import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const CustomNavbar = ({ onNavigate, activeSection, onToggleTheme, theme }) => {
  const isDark = theme === "dark";

  return (
    <Navbar
      bg={isDark ? "dark" : "light"}
      variant={isDark ? "dark" : "light"}
      expand="lg"
      fixed="top"
      className={isDark ? "bg-dark" : "bg-light"}
    >
      <Container>
        <Navbar.Brand
          onClick={() => onNavigate("home")}
          style={{
            cursor: "pointer",
            backgroundColor: "#48A3C6",
            color: "white",
            fontSize: "0.5rem",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 6px rgba(0, 0, 0, 0.15)",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
          }}
        >
          T&nbsp;A
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end align-items-center"
        >
          <Nav className="me-3">
            <Nav.Link
              onClick={() => onNavigate("home")}
              active={activeSection === "home"}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => onNavigate("portfolio")}
              active={activeSection === "portfolio"}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              onClick={() => onNavigate("contact")}
              active={activeSection === "contact"}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Button
            onClick={onToggleTheme}
            variant={isDark ? "outline-light" : "outline-dark"}
            size="sm"
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
