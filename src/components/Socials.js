import React from "react";
import twitterIcon from "../images/twitter.svg";
import facebookIcon from "../images/facebook.svg";
import instagramIcon from "../images/instagram.svg";
import githubIcon from "../images/github.svg";

export default function Socials() {
  return (
    <div className="socials-container">
      <a href="https://twitter.com/"><img src={twitterIcon} /></a>
      <a href="https://www.facebook.com/"><img src={facebookIcon} /></a>
      <a href="https://www.instagram.com/"><img src={instagramIcon} /></a>
      <a href="https://github.com/"><img src={githubIcon} /></a>
    </div>
  );
};