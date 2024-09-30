import React from 'react';
import Particle from '../Particle';
import {Container} from 'react-bootstrap';

const ExperienceTimeline = () => {
  const experiences = [
    {
      year: 2024,
      title: 'Intern at Pathbeat',
      location: 'Bengaluru, Karnataka',
      position: 'React Native Developer',
      duration: 'June 2024 - Current',
      responsibilities: [
        {
          title: 'Product Development and Engineering',
          description: 'Engineered the app from the ground up using Redux, React Query, and React Hooks. Improved performance with lazy loading, memoization, and code splitting. Worked closely with designers and backend developers to ship the product.',
        },
        {
          title: 'API Development and Testing',
          description: 'Integrated and consumed REST APIs, including Google Auth. Designed and tested corner and edge cases to ensure smooth operation in all scenarios.',
        },
        {
          title: 'Advanced Feature Integration',
          description: 'Integrated third-party libraries and native modules. Developed custom animations, transitions, deep linking, Razorpay for payments, and caching to enhance user experience.',
        },
      ],
    },
    {
      year: 2024,
      title: 'Intern at Trainity',
      location: 'Bengaluru, Karnataka',
      position: 'Full Stack Web Developer',
      duration: 'Feb 2024 - April 2024',
      responsibilities: [
        {
          title: 'Backend Development',
          description: 'Developed and maintained REST APIs using Express.js and MongoDB. Implemented authentication and authorization with JWT and OAuth. Optimized database queries and backend performance, and ensured scalability and maintainability of codebase.',
        },
        {
          title: 'Frontend Development',
          description: 'Converted Figma designs into responsive React components using Material-UI and integrated backend APIs for seamless interaction.',
        },
      ],
    },
    {
      year: 2023,
      title: 'Intern at Acumensa Technologies',
      location: 'Bengaluru, Karnataka',
      position: 'Frontend Developer',
      duration: 'April 2023 - August 2023',
      responsibilities: [
        {
          title: 'Frontend Development',
          description: 'Developed complex React components for a B2C healthcare web solution, optimizing UI/UX for end users.',
        },
        {
          title: 'API Integration',
          description: 'Integrated APIs with efficient error handling and data management.',
        },
        {
          title: 'Collaboration',
          description: 'Worked with Delivery Lead, Backend, and QA teams, applying Agile methodologies for timely feature delivery.',
        },
      ],
    },
    {
      year: 2022,
      title: 'Tech Fest Lead at IIT Dharwad (Parsec)',
      location: 'IIT Dharwad',
      position: 'Web Development Team Lead',
      duration: 'Jan 2022 - March 2022',
      responsibilities: [
        {
          title: 'Tech Fest Lead',
          description: 'Led a team of 6 developers in creating a responsive MERN stack website for the college tech fest, ensuring project success.',
        },
      ],
    },
    {
      year: 2022,
      title: 'Inter IIT Tech Meet',
      location: 'IIT Kanpur',
      position: 'Bronze Medalist',
      duration: 'Feb 2022 - April 2022',
      responsibilities: [
        {
          title: 'Full Stack Developer',
          description: 'Built a sustainable and well-connected high-speed distribution network for e-commerce brands offering same-day delivery solutions. Played a key role in unlocking growth and simplifying scalability for these brands.',
        },
      ],
    },
  ];
  

  return (
    <Container fluid className="project-section">
      <Particle />
      <div className="timeline-container">
        <h2 className="timeline-header">My Experience Timeline</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-item-content">
                <span className="tag" style={{ background: '#be50f4' }}>
                  {exp.year}
                </span>
                <h3>{exp.title}</h3>
                <h5>{exp.position} | {exp.location}</h5>
                <p><em>{exp.duration}</em></p>
  
                {exp.responsibilities && (
                  <ul>
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>
                        <strong>{responsibility.title}:</strong> {responsibility.description}
                      </li>
                    ))}
                  </ul>
                )}
  
                <span className="circle" />
              </div>
            </div>
          ))}
        </div>
  
        <style jsx>{`
          .timeline-container {
            font-family: Arial, sans-serif;
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
          }
          .timeline-header {
            text-align: center;
            color: #be50f4;
            margin-bottom: 40px;
          }
          .timeline {
            position: relative;
            padding: 20px 0;
          }
          .timeline::before {
            content: '';
            background: #be50f4;
            width: 2px;
            height: 100%;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }
          .timeline-item {
            margin-bottom: 40px;
          }
          .timeline-item-content {
            position: relative;
            width: 45%;
            padding: 20px;
            border-radius: 5px;
            background: #fff;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
            margin-left: auto;
          }
          .timeline-item:nth-child(odd) .timeline-item-content {
            margin-left: 0;
            margin-right: auto;
          }
          .tag {
            color: #fff;
            font-size: 0.9rem;
            padding: 5px 10px;
            border-radius: 3px;
            display: inline-block;
            margin-bottom: 10px;
          }
          h3, h5 {
            margin-bottom: 5px;
            color: #333;
          }
          h5 {
            font-weight: normal;
            color: #666;
          }
          ul {
            list-style-type: disc;
            margin-left: 20px;
          }
          li {
            margin-bottom: 10px;
            font-size: 0.9rem;
          }
          .circle {
            background: #be50f4;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            position: absolute;
            top: 20px;
            right: -10px;
          }
          .timeline-item:nth-child(even) .circle {
            right: auto;
            left: -10px !important;
          }
          @media screen and (max-width: 600px) {
            .timeline::before {
              left: 20px;
            }
            .timeline-item-content {
              width: calc(100% - 40px);
              margin-left: 40px !important;
            }
            .timeline-item:nth-child(odd) .timeline-item-content {
              margin-right: 0;
            }
          }
        `}</style>
      </div>
    </Container>
  );
  
};

export default ExperienceTimeline;