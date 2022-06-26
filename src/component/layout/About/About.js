import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const About = () => {
  const visitLinkedin = () => {
    window.location = "https://www.linkedin.com/in/naman-tyagi-101504203/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dpad750xq/image/upload/v1654097798/avatars/about/img_pcmsjl.jpg"
              alt="Founder"
            />
            <Typography>Naman Tyagi</Typography>
            <Button onClick={visitLinkedin} color="primary">
              Visit LinkedIn
            </Button>
            <span>
              This is an Ecommerce website built using MERN stack. Wonderful and awesome 
              experience while building it. 
              Happy Learning!!!
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Reach Out to me</Typography>
            <a
              href="https://www.linkedin.com/in/naman-tyagi-101504203/"
              target="blank"
            >
              <LinkedInIcon className="linkedinSvgIcon" />
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
