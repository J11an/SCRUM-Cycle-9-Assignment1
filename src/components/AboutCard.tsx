import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";

import "./AboutCard.css";

function About() {
  return (
    <div className="about-container">
      <img src="/profile.png" alt="Picture of me" className="profile-image" />
      <h2>Jason Wan</h2>
      <p> The Focal Point</p>
      <p>
        A web developer that is committed to building streamlined online
        experiences. With a strong background in computer science, I specialize
        in creating dynamic websites that seamlessly combine form and function.
        I thrive on turning ideas into beautiful and useful digital solutions by
        combining creativity and code in a harmonic way.
      </p>
    </div>
  );
}
export default About;
