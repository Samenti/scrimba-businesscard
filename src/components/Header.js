import React from "react";
import stockImg from "../images/stock-portrait.png";
import mailIcon from "../images/mail.svg";
import linkedInIcon from "../images/linkedin.svg";

export default function Header() {
  return (
    <div className="header">
      <img src={stockImg} alt="stock photo of a young woman" />
      <h1>Laura Smith</h1>
      <h3>Frontend Developer</h3>
      <a href="#" className="link-website">laurasmith.website</a>
      <div className="buttons-container">
        <a href="mailto:dummyemail@gmail.com" className="button mail-button">
          <img src={mailIcon} alt="mail icon" />
          Email
        </a>
        <a href="https://www.linkedin.com/" className="button linkedin-button">
            <img src={linkedInIcon} alt="LinkedIn icon" />
            LinkedIn
        </a>
      </div>
    </div>
  );
};