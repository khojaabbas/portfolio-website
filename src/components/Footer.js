import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <footer
      className={`text-center py-4 mt-auto ${
        isDark ? "bg-dark text-white" : "bg-light text-dark"
      }`}
    >
      <div className="d-flex justify-content-center mb-3">
        <a
          href="https://github.com/khojaabbas"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3"
          style={{ fontSize: "22px" }}
        >
          <FaGithub className="icon-custom" />
        </a>
        <a
          href="https://www.linkedin.com/in/tanveer-abbas-4bb181264/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3"
          style={{ fontSize: "22px" }}
        >
          <FaLinkedin className="icon-custom" />
        </a>
        <a
          href="https://www.instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3"
          style={{ fontSize: "22px" }}
        >
          <FaInstagram className="icon-custom" />
        </a>
        <a
          href="https://x"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3"
          style={{ fontSize: "22px" }}
        >
          <FaTwitter className="icon-custom" />
        </a>
      </div>
      <p style={{ fontWeight: "bold" }}>
        <span style={{ color: "#48A3C6" }}>▷</span> Designed and built by
        Tanveer Abbas © 2025
      </p>
      <p style={{ fontWeight: "bold" }}>All views and work are my own</p>
    </footer>
  );
};

export default Footer;
