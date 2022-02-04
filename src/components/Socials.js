import React from "react";
import twitterIcon from "../images/twitter.svg";
import facebookIcon from "../images/facebook.svg";
import instagramIcon from "../images/instagram.svg";
import linkedinIcon from "../images/linkedin-dark.svg";
import githubIcon from "../images/github.svg";

export default function Socials() {
  return (
    <div className="socials-container">
      <a href="https://twitter.com/"><img src={twitterIcon} alt="Twitter" /></a>
      <a href="https://www.facebook.com/"><img src={facebookIcon} alt="Facebook" /></a>
      <a href="https://www.instagram.com/"><img src={instagramIcon} alt="Instagram" /></a>
      <a href="https://www.linkedin.com/"><img src={linkedinIcon} alt="LinkedIn" /></a>
      <a href="https://github.com/"><img src={githubIcon} alt="GitHub" /></a>
    </div>
  );
};