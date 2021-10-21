import React from "react";

const About = (props) => {
  document.title = "About";
  console.log(props);
  return (
    <div className="container">
      <h1>Its a About form</h1>
    </div>
  );
};

export default About;
