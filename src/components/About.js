import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        "I have been in the education field for the last 11 years. I spent 5
        years as a high school teacher. For the last 6 years, I have worked on
        the Clinical Evaluation Team; where I use data driven analysis to
        determine eligibility and make service recommendations for special
        education students. I am hoping to pivot from the education field to an
        engineering role at a tech company where I can continue to learn and
        build on the foundation that I have."
      </p>
      <img src={image} alt="I made this"></img>
    </div>
  );
}

export default About;
