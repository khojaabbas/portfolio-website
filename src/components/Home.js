import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Home({ theme }) {
  const isDark = theme === "dark";

  return (
    <section
      className={`home-section d-flex flex-column justify-content-center align-items-center text-center vh-100 px-3 ${
        isDark ? "bg-dark text-white" : "bg-light text-dark"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/profile.jpg"
          alt="Profile"
          className="rounded-circle mb-4 shadow"
          style={{
            width: "150px",
            height: "150px",
            objectFit: "cover",
            border: `3px solid ${isDark ? "white" : "#333"}`,
          }}
        />
        <h2 className="fw-bold display-4 pb-4">Tanveer Abbas</h2>
        <p className={`lead pb-4   ${isDark ? "text-light" : "text-dark"}`}>
          AI-ML Engineer | Web Developer
        </p>
        <div className="d-flex gap-4 justify-content-center mt-4 fs-4">
          <a
            href="https://github.com/khojaabbas"
            target="_blank"
            rel="noopener noreferrer"
            className={isDark ? "text-white" : "text-dark"}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/tanveer-abbas-4bb181264/"
            target="_blank"
            rel="noopener noreferrer"
            className={isDark ? "text-white" : "text-dark"}
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:tanveerkhoja786@gmail.com"
            className={isDark ? "text-white" : "text-dark"}
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
