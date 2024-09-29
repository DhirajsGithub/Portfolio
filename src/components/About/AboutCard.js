import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: "justify"}}>
            Hi Everyone, I am <span className="purple">Dhiraj Borse </span>
            from <span className="purple"> Maharashtra, India.</span>
            <br />
            I am currently intern as a software developer at <a style={{textDecoration: "underline", color: "inherit"}} target="_blank" href="https://pathbeat.in/">pathbeat.in</a>.
            <br />
            I am a passionate programmer and a tech enthusiast who loves to learn new technologies and build projects.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
    <li className="about-activity">
    🏋️‍♂️ Fitness and Gym Training 
    </li>
    <li className="about-activity">
    ⚽️ Playing Football
    </li>
    <li className="about-activity">
    🎬 Watching Web Series 
    </li>
</ul>


          <p style={{color: "rgb(155 126 172)"}}>
          "Creating free, simple, and inspiring solutions for everyone!"
          </p>
          <footer className="blockquote-footer">Dhiraj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
