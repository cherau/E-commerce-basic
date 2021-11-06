import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="www.instagram.com/cheraujain">
          {" "}
          <InstagramIcon />{" "}
        </a>
        <a href="www.twitter.com/cheraujain">
          {" "}
          <TwitterIcon />{" "}
        </a>
        <a href="www.fb.com/jaincherau">
          {" "}
          <FacebookIcon />{" "}
        </a>
        <a href="www.linkedin.com/in/cherau-jain">
          {" "}
          <LinkedInIcon />{" "}
        </a>
      </div>
      <p> &copy; 2021 MyHashCode.com</p>
    </div>
  );
}

export default Footer;
