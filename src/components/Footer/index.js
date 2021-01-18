import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faTwitter,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
<div className="social-container  text-center" >
      <a href="https://github.com/mplumer"
        className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/maxplumer"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://twitter.com/mplumer12"
        className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
</div>

  );
}