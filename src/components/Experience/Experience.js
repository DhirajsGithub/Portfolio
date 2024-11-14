import React from "react";
import Particle from "../Particle";
import { Container } from "react-bootstrap";
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import experiences from "../../data/experiences";

const ExperienceTimeline = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <div className="timeline-container">
        <h2 className="timeline-header">My Experience Timeline</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-item-content">
                <h3>{exp.title}</h3>
                <div className="timeline-item-header">
                  <div className="timeline-item-date">
                    <FaCalendarAlt />
                    <span>{exp.year}</span>
                  </div>
                  <div className="timeline-item-location">
                    <GoLocation />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="timeline-item-details">
                  <div className="timeline-item-position">
                    <FaBriefcase />
                    <span>{exp.position}</span>
                  </div>
                  <div className="timeline-item-duration">
                    <FaCalendarAlt />
                    <span>{exp.duration}</span>
                  </div>
                </div>
                {exp.responsibilities && (
                  <ul className="timeline-item-responsibilities">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>
                        <strong>{responsibility.title}:</strong>{" "}
                        {responsibility.description}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="timeline-item-circle" />
              <div className="timeline-item-line" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .timeline-container {
          font-family: "Poppins", sans-serif;
          max-width: 900px;
          margin: 0 auto;
          padding: 40px 20px;
          position: relative;
        }
        .timeline-header {
          text-align: center;
          color: #be50f4;
          font-size: 32px;
          font-weight: 700;
        }
        .timeline {
          position: relative;
          padding: 40px 0;
          margin-top: 40px;
        }
        .timeline::before {
          content: "";
          background: #be50f4;
          width: 4px;
          height: 100%;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
        .timeline-item {
          display: flex;
          justify-content: flex-end;
          left: 10%;
          position: relative;
          margin-bottom: 30px;
        }
        .timeline-item:nth-child(even) {
          justify-content: flex-start;
          padding-right: 0;
          left: -10%;
          position: relative;
        }
        .timeline-item-content {
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          padding: 20px;
          position: relative;
          width: 500px;
          max-width: 100%;
          z-index: 1;
        }
        .timeline-item-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        .timeline-item-date,
        .timeline-item-location {
          display: flex;
          align-items: center;
          font-size: 14px;
          color: #666;
        }
        .timeline-item-date svg,
        .timeline-item-location svg {
          margin-right: 5px;
        }
        h3 {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 10px;
          color: #333;
        }
        .timeline-item-details {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: #666;
          margin-bottom: 10px;
        }
        .timeline-item-position,
        .timeline-item-duration {
          display: flex;
          align-items: center;
        }
        .timeline-item-position svg,
        .timeline-item-duration svg {
          margin-right: 5px;
        }
        .timeline-item-responsibilities {
          list-style-type: disc;
          text-align: left;
          font-size: 16px;
          color: #555;
        }
        .timeline-item-circle {
          background-color: #be50f4;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          position: absolute;
          top: 22px;
          z-index: 2;
        }
        .timeline-item:nth-child(even) .timeline-item-circle {
          right: 43%;
        }
        .timeline-item:nth-child(odd) .timeline-item-circle {
          left: 43%;
        }
        .timeline-item-line {
          background-color: #be50f4;
          width: 10%;
          height: 4px;
          position: absolute;
          top: 30px;
          z-index: 0;
        }
        .timeline-item:nth-child(even) .timeline-item-line {
          left: 50%;
        }
        .timeline-item:nth-child(odd) .timeline-item-line {
          right: 50%;
        }
        @media screen and (max-width: 500px) {
          .timeline-container {
             padding: 20px 10px;
          }
          .timeline-item-content {
            right: 10%;
            max-width: 86% !important;
          }
           .timeline-item-line {
            left: -4% !important;
          }
          .timeline-item-circle{
            transform: scale(0.8);
            left: 10% !important;
          }
        }
        @media screen and (max-width: 767px) {
          .timeline-item-content {
            right: 6%;
            width: 90% !important;
          }
          .timeline::before {
            left: 20px;
          }

          .timeline-item {
            justify-content: flex-end;
          }
          .timeline-item:nth-child(even) {
            left: 1.5% !important;
            justify-content: flex-end;
          }
          
          .timeline-item-line, .timeline-item:nth-child(even) .timeline-item-line {
            left: 1.8% !important;
          }
          .timeline-item-circle{
            transform: scale(0.8);
            left: 5% !important;
          }
        }
        @media screen and (max-width: 1050px) {
          .timeline-item-content {
            width: 50%;
          }
          .timeline-item {
            left: 1.5%;
          }
          .timeline-item:nth-child(even) {
            left: -1.5%;
          }
          .timeline-item:nth-child(even) .timeline-item-line {
            left: 41.5%;
          }
          .timeline-item:nth-child(odd) .timeline-item-line {
            right: 41.5%;
          }
          .timeline-item:nth-child(even) .timeline-item-circle {
            right: 50.5%;
          }
          .timeline-item:nth-child(odd) .timeline-item-circle {
            left: 50.5%;
          }
        }
      `}</style>
    </Container>
  );
};

export default ExperienceTimeline;
