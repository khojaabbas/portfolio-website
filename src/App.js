// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// import SplashScreen from "./components/SplashScreen";
// import CustomNavbar from "./components/Navbar";
// import Home from "./components/Home";
// import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";

// function App() {
//   const [isSplashVisible, setIsSplashVisible] = useState(true);
//   const [activeSection, setActiveSection] = useState("home");
//   const [theme, setTheme] = useState("dark");

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsSplashVisible(false);
//     }, 3000); // Show splash screen for 3 seconds
//     return () => clearTimeout(timer);
//   }, []);

//   const handleToggleTheme = () => {
//     setTheme((prev) => (prev === "dark" ? "light" : "dark"));
//   };

//   if (isSplashVisible) {
//     return <SplashScreen />;
//   }

//   return (
//     <div
//       className={`App min-vh-100 ${
//         theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"
//       }`}
//       style={{ paddingTop: "70px" }}
//     >
//       <CustomNavbar
//         onNavigate={setActiveSection}
//         activeSection={activeSection}
//         theme={theme}
//         onToggleTheme={handleToggleTheme}
//       />
//       {activeSection === "home" && <Home theme={theme} />}
//       {activeSection === "portfolio" && <Portfolio theme={theme} />}
//       {activeSection === "contact" && <Contact theme={theme} />}
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// import SplashScreen from "./components/SplashScreen";
// import CustomNavbar from "./components/Navbar";
// import Home from "./components/Home";
// import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// function App() {
//   const [isSplashVisible, setIsSplashVisible] = useState(true);
//   const [activeSection, setActiveSection] = useState("home");
//   const [theme, setTheme] = useState("dark"); // 'dark' or 'light'

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsSplashVisible(false);
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
//   };

//   if (isSplashVisible) {
//     return <SplashScreen />;
//   }

//   return (
//     <div
//       className={`App ${
//         theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"
//       }`}
//       style={{ paddingTop: "70px", minHeight: "100vh" }}
//     >
//       <CustomNavbar
//         onNavigate={setActiveSection}
//         activeSection={activeSection}
//         onToggleTheme={toggleTheme}
//         theme={theme}
//       />
//       {activeSection === "home" && <Home theme={theme} />}
//       {activeSection === "portfolio" && <Portfolio theme={theme} />}
//       {activeSection === "contact" && <Contact theme={theme} />}
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import SplashScreen from "./components/SplashScreen";
import CustomNavbar from "./components/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  if (isSplashVisible) {
    return <SplashScreen />;
  }

  return (
    <div
      className={`App d-flex flex-column ${
        theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"
      }`}
      style={{ minHeight: "100vh" }}
    >
      <CustomNavbar
        onNavigate={setActiveSection}
        activeSection={activeSection}
        onToggleTheme={toggleTheme}
        theme={theme}
      />

      <main className="flex-grow-1">
        {activeSection === "home" && <Home theme={theme} />}
        {activeSection === "portfolio" && <Portfolio theme={theme} />}
        {activeSection === "contact" && <Contact theme={theme} />}
      </main>

      <Footer theme={theme} />
    </div>
  );
}

export default App;
