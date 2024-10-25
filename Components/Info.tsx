import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export default function Info() {
  return (
    <div className="Info">
      <img src="../src/assets/mypic.jpg" alt="" />
      <h1>Thyagaraju Pathuru</h1>
      <h3>Full Stack Dev</h3>
      <h5>
        <a
          href="https://thyagarajupathur.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Thyagaraju Portfolio website
        </a>
      </h5>
      <div className="btns">
        <a href="mailto:thyagaraju.ptr@gmail.com" className="btn-email">
          <span className="icon">
            <MdEmail />
          </span>
          <span>Email</span>
        </a>
        <a
          href="https://www.linkedin.com/in/thyagaraju-pathur/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-linkedIn"
        >
          <span className="icon">
            <FaLinkedin />
          </span>
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
}
