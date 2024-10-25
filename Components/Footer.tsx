import React from "react";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <a
        href="https://x.com/thyagaraju_p"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitterSquare />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookSquare />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagramSquare />
      </a>
      <a
        href="https://github.com/ThyagarajuPathur"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare />
      </a>
    </footer>
  );
};

export default Footer;
