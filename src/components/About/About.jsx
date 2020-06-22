import React from "react";
import css from "./About.css";

const About = () => {
  return (
    <div className={`aboutWrapper ${css.aboutWrapper}`}>
      <div className={`headerWrapper ${css.headerWrapper}`}>
        <header>
          Our Mission is to save you time while creating better experiences.
        </header>
      </div>
      <div className={`descriptionWrapper ${css.descriptionWrapper}`}>
        <p>
          The past decade has defined the era of matchmaking apps and has made
          meeting new people fast and convenient. But the convenience and
          simplicity ends once you match with someone and the questions comes
          up, "What should I plan for the first date?". What started out as a
          simple React Application has turned in to creating the first "date
          making" app and helping others solve that question with the same
          simplicity and convenience which brought them together in the first
          place. Stop wasting time looking through multiple event and places
          sites, get the best results in one place using Seknd.
        </p>
      </div>
      <div className={`technologiesWrapper ${css.technologiesWrapper}`}>
        <div className={`sectionWrapper ${css.sectionWrapper}`}></div>
        <div className={`sectionWrapper ${css.sectionWrapper}`}></div>
        <div className={`sectionWrapper ${css.sectionWrapper}`}></div>
      </div>
    </div>
  );
};

export default About;
