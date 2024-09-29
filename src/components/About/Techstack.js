import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaPython, FaHtml5, FaCss3Alt, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiDjango } from "react-icons/di";
import { SiFastapi } from "react-icons/si";
import { SiPrisma } from "react-icons/si";

import { SiSocketdotio } from "react-icons/si";

import { SiMysql, SiFirebase, SiNextdotjs, SiSpringboot } from "react-icons/si";
import { DiReact, DiNodejs, DiMongodb, DiGit } from "react-icons/di";
import { Tooltip as ReactTooltip } from 'react-tooltip'

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col data-tooltip-id="my-tooltip" xs={4} md={2} className="tech-icons" data-tooltip-content="Java">
        <FaJava />
      </Col>
      <Col data-tooltip-id="my-tooltip" xs={4} md={2} className="tech-icons" data-tooltip-content="Python">
        <FaPython />
      </Col>
      <Col data-tooltip-id="my-tooltip" xs={4} md={2} className="tech-icons" data-tooltip-content="JavaScript">
        <IoLogoJavascript />
      </Col>
      <Col data-tooltip-id="my-tooltip" xs={4} md={2} className="tech-icons" data-tooltip-content="Node.js">
        <DiNodejs />
      </Col>
      <Col data-tooltip-id="my-tooltip" xs={4} md={2} className="tech-icons" data-tooltip-content="React">
        <DiReact />
      </Col>
      <Col data-tooltip-id="my-tooltip" xs={4} md={2} className="tech-icons" data-tooltip-content="Spring Boot">
        <SiSpringboot />
      </Col>
      <Col data-tooltip-id="my-tooltip" xs={4} md={2} className="tech-icons" data-tooltip-content="Django">
        <DiDjango />
      </Col>
      <Col data-tooltip-id="my-tooltip" xs={4} md={2} className="tech-icons" data-tooltip-content="Fast API">
        <SiFastapi />
      </Col>
      <Col data-tooltip-id="my-tooltip" xs={4} md={2} className="tech-icons" data-tooltip-content="MongoDB">
        <DiMongodb />
      </Col>
      <Col data-tooltip-id="my-tooltip" xs={4} md={2} className="tech-icons" data-tooltip-content="MySQL">
        <SiMysql />
      </Col>
      <Col data-tooltip-id="my-tooltip" xs={4} md={2} className="tech-icons" data-tooltip-content="Next.js">
        <SiNextdotjs />
      </Col>
      <Col data-tooltip-id="my-tooltip" xs={4} md={2} className="tech-icons" data-tooltip-content="Git">
        <DiGit />
      </Col>
      <Col data-tooltip-id="my-tooltip" xs={4} md={2} className="tech-icons" data-tooltip-content="Firebase">
        <SiFirebase />
      </Col>
      <Col data-tooltip-id="my-tooltip" xs={4} md={2} className="tech-icons" data-tooltip-content="Socket.io">
        <SiSocketdotio />
      </Col>
      <Col data-tooltip-id="my-tooltip" xs={4} md={2} className="tech-icons" data-tooltip-content="Prisma">
        <SiPrisma />
      </Col>
     
      <Col data-tooltip-id="my-tooltip" xs={4} md={2} className="tech-icons" data-tooltip-content="HTML5">
        <FaHtml5 />
      </Col>
      <Col data-tooltip-id="my-tooltip" xs={4} md={2} className="tech-icons" data-tooltip-content="CSS3">
        <FaCss3Alt />
      </Col>
      <ReactTooltip id="my-tooltip"  />
    </Row>
  );
}

export default Techstack;
