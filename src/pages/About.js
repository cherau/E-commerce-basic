import React from "react";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{
          backgroundImage: `url(https://www.apmsolutions.ca/wp-content/uploads/2017/03/background-image-of-web-design-meeting.png)`
        }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Hash Code is the startup for your startup. We provide a platform where
          startups will be mentored one to one by industry experts and think
          tank . we provide one stop solution for your startup like resources ,
          learning and development , marketing, strategy , finance and etc As we
          have a huge network of startups this opens the opportunity for job
          seekers for their next or new role . we also help people with
          providing necessary training on skills requried for new roles and this
          open doors for opportunity for trainers and tutors to engage more
          audience
        </p>
      </div>
    </div>
  );
}

export default About;
