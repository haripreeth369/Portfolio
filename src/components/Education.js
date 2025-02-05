// import { Container, Row, Col, Tab, TabContainer } from "react-bootstrap";
// import { EducationCard } from "./EducationCard";
// import eduImg1 from "../assets/img/education-img1.jpg";
// import eduImg2 from "../assets/img/education-img2.jpg";
// import eduImg3 from "../assets/img/education-img3.jpg";
// import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
// import TrackVisibility from 'react-on-screen';
import React, { useState } from "react";
import "./CSS/Education.css";



export const EducationTimeline = () => {
  const educationData = [
    {
      year: "2019 - 2023",
      degree: "B.Tech in Computer Science",
      institution: "SCSVMV University, Kanchipuram",
      description: "Graduated with a 9.3 CGPA, specializing in full-stack development and software engineering.",
    },
    {
      year: "2017 - 2019",
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya Junior College, Hyderabad",
      description: "Focused on Mathematics, Physics, and Chemistry with a strong foundation in problem-solving.",
    },
    {
      year: "2016 - 2017",
      degree: "Secondary School Certificate (SSC)",
      institution: "Narayana High School, Hyderabad",
      description: "Excelled in academics and participated in coding competitions.",
    },
  ];

  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <p>My academic journey has been focused on technology and innovation, shaping me into a skilled developer.</p>
      <div className="timeline-container">
        <div className="timeline-line"></div> {/* Pole in the center */}
        {educationData.map((edu, index) => (
          <div key={index} className={`timeline-item ${edu.isRight ? "right" : index % 2 === 0 ? "left" : "right"}`}>
            <div className="timeline-dot"></div> {/* Circle for each event */}
            <div className="timeline-content">
              <span className="timeline-year">{edu.year}</span>
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};





