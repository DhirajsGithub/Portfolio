import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Particle from "../Particle";
import ProjectCards from "./ProjectCards";

import i1 from "../../Assets/Projects/skill-shodh/Login Users.png"
import i2 from "../../Assets/Projects/skill-shodh/Notification View.png"
import i3 from "../../Assets/Projects/skill-shodh/Public Profile.png"
import i4 from "../../Assets/Projects/skill-shodh/opportunity.png"
import i5 from "../../Assets/Projects/skill-shodh/Onbarding Extended.png"
import i6 from "../../Assets/Projects/skill-shodh/Creating Opportunites.png"
import i7 from "../../Assets/Projects/skill-shodh/Chat Ui.png"
import i8 from "../../Assets/Projects/skill-shodh/Applying Oppurtuinites.png"
import i9 from "../../Assets/Projects/skill-shodh/create-team.png"
import i10 from "../../Assets/Projects/skill-shodh/join-team.png"
import i11 from "../../Assets/Projects/skill-shodh/Privacy.png"

import s1 from "../../Assets/Projects/pathbeat/s1.png"
import s2 from "../../Assets/Projects/pathbeat/s2.png"
import s3 from "../../Assets/Projects/pathbeat/s3.png"
import s4 from "../../Assets/Projects/pathbeat/s4.png"
import s5 from "../../Assets/Projects/pathbeat/s5.png"
import s6 from "../../Assets/Projects/pathbeat/s6.png"
import s7 from "../../Assets/Projects/pathbeat/s7.png"
import s8 from "../../Assets/Projects/pathbeat/s8.png"
import s9 from "../../Assets/Projects/pathbeat/s9.png"
import s10 from "../../Assets/Projects/pathbeat/s10.png"

import m1 from "../../Assets/Projects/meetup/s1.png"
import m2 from "../../Assets/Projects/meetup/s2.png"
import m3 from "../../Assets/Projects/meetup/s3.png"
import m4 from "../../Assets/Projects/meetup/s4.png"
import m5 from "../../Assets/Projects/meetup/s5.png"

import b1 from "../../Assets/Projects/blog-book/s1.png"
import b2 from "../../Assets/Projects/blog-book/s2.png"
import b3 from "../../Assets/Projects/blog-book/s3.png"
import b4 from "../../Assets/Projects/blog-book/s4.png"
import b5 from "../../Assets/Projects/blog-book/s5.png"
import b6 from "../../Assets/Projects/blog-book/s6.png"
import b7 from "../../Assets/Projects/blog-book/s7.png"
import b8 from "../../Assets/Projects/blog-book/s8.png"

import y1 from "../../Assets/Projects/yumtrux/s1.jpg"
import y2 from "../../Assets/Projects/yumtrux/s2.jpg"
import y3 from "../../Assets/Projects/yumtrux/s3.jpg"
import y4 from "../../Assets/Projects/yumtrux/s4.jpg"
import y5 from "../../Assets/Projects/yumtrux/s5.jpg"
import y6 from "../../Assets/Projects/yumtrux/s6.jpg"
import y7 from "../../Assets/Projects/yumtrux/s7.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{color: "white"}}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
          <Col md={5} className="project-card">
            <ProjectCards
              title="SkillShodh"
              mainImg="https://www.blog.visitorqueue.com/wp-content/uploads/2022/04/alzHwS9W-1024x670.png"
              smallDescription="SkillShodh is a comprehensive platform connecting students to skill-based internships. It provides personalized opportunities based on student skills, seamless communication with companies, and easy-to-apply features. The platform also emphasizes professional networking and real-world experience to enhance career growth."
              gallery={[
                i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11
              ]}
              features={[
                "Real-time matching",
                "Personalized suggestions",
                "Easy applications",
                "Seamless communication"
              ]}
              technologies={[
                "React.js",
                "Node.js",
                "Firebase",
                "Bootstrap",
                "Socket.io",
                "Express",
                "Supabase",
                "MUI (Material UI)",
                "Redux Toolkit"
              ]}
              ghLink="https://github.com/DhirajsGithub/skill-shodh-local"
              demoLink="https://skillshodh.in/"
            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCards
              title="Pathbeat"
              smallDescription="Pathbeat is your ultimate travel companion for discovering cities and immersing yourself in local culture. This innovative application provides users with immersive audio tours, captivating video series, and personalized attraction recommendations, ensuring that every journey is enriching and unforgettable."
              gallery={[
                s1, s2, s3, s4, s5, s6, s7, s8, s9, s10
              ]}
              features={[
                "Engaging audio tours",
                "Captivating video series",
                "Curated attraction recommendations",
                "Safety tips and contacts"
              ]}
              technologies={[
                "React Native",
                "Axios",
                "React Navigation",
                "Firebase",
                "React Query",
                "Lodash",
                "React Native Reanimated",
                "Razorpay"
              ]}


              ios="https://apps.apple.com/in/app/pathbeat/id6670258755"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCards
              title="Blog Book"
              smallDescription="BlogSphere is a vibrant and inclusive platform designed for writers and readers to connect through the art of blogging. Here, individuals can share their thoughts, experiences, and expertise on a multitude of topics, from personal anecdotes to in-depth analyses of current events. Our goal is to create a nurturing space where creativity flourishes and meaningful conversations happen."
              gallery={[
               b1, b2, b3, b4, b5, b6, b7, b8
              ]}
              features={[
                "Compose and share blogs",
                "Private or public posts",
                "Connect with the community",
                "Explore member blogs",
                "Track your activities",
                "Get real-time notifications"
              ]}
              technologies={[
                "Express.js",
                "MongoDB",
                "Mongoose",
                "EJS",
                "Passport.js",
                "Node.js",
                "Lodash",

              ]}
              ghLink="https://github.com/DhirajsGithub/Blog-Share-Store-Website" // Replace with your GitHub link
              demoLink="https://blog-book.onrender.com/" // Replace with your demo link
            />

          </Col>

          <Col md={5} className="project-card">
          <ProjectCards 
  title="Yumtruk App and Admin Panel" 
  smallDescription="Yumtruk is a user-friendly food delivery app built with React Native (Expo). It allows users to browse menus, place orders, and get real-time delivery updates. The admin panel, developed with Node.js and Express.js, helps restaurant owners manage orders, track interactions, and engage customers. Integrated with Socket.io for instant notifications and secure payments via Stripe and PayPal, Yumtruk offers an efficient solution for both users and restaurants." 

  gallery={[
    y1, y2, y3, y4, y5, y6, y7
  ]} 
  features={[
    "Real-time notifications using Socket.io", 
    "Seamless payment integration with Stripe/PayPal", 
    "User-friendly mobile interface built with React Native", 
    "Robust admin panel for managing orders and users", 
    "Secure authentication with JWT", 
    "Image upload and management using Cloudinary"
  ]} 
  technologies={[
    "React Native (Expo)", 
    "Node.js", 
    "Express.js", 
    "MongoDB", 
    "Mongoose", 
    "Socket.io", 
    "Stripe API", 
    "PayPal API",
    "Cloudinary",
    "Firebase",
    "JWT",
  
  ]} 
  ghLink="https://github.com/DhirajsGithub/yum-trux" // Replace with your GitHub link 
  apk="https://yumtruk-demo-link.com" // Replace with your demo link 
/>

          </Col>


          <Col md={5} className="project-card">
            <ProjectCards
              title="Meetup Platform"
              mainImg="https://example.com/meetup-platform-main-image.png"
              smallDescription="Meetup Platform is a Next.js-based application designed to help users create, join, and explore meetups seamlessly. With a user-friendly interface, it allows individuals to schedule meetings, add essential details, and engage in collaborative events."
              gallery={[
                m1, m2, m3, m4, m5
              ]}
              features={[
                "Create and join meetups",
                "User-friendly interface",
                "Detailed meeting descriptions",
                "Address-based search"
              ]}
              technologies={[
                "Next.js",
                "React.js",
                "MongoDB",
                "Node.js",
                "Express.js",
                "Fetch API",
                "SSR"
              ]}
              ghLink="https://github.com/DhirajsGithub/React_module_14.2"
              demoLink="https://react-module-14-2.vercel.app/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
