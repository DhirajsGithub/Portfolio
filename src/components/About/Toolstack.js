import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiNetlify,
  SiLeetcode
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { FaGithub } from "react-icons/fa";



function Toolstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col data-tooltip-id="tool-tooltip" data-tooltip-content="macOS" xs={4} md={2} className="tech-icons">
          <SiMacos />
        </Col>
        <Col data-tooltip-id="tool-tooltip" data-tooltip-content="Visual Studio Code" xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
        <Col data-tooltip-id="tool-tooltip" data-tooltip-content="Postman" xs={4} md={2} className="tech-icons">
          <SiPostman />
        </Col>
        <Col data-tooltip-id="tool-tooltip" data-tooltip-content="Netlify" xs={4} md={2} className="tech-icons">
          <SiNetlify />
        </Col>
        <Col data-tooltip-id="tool-tooltip" data-tooltip-content="VSCode Brand" xs={4} md={2} className="tech-icons">
          <TbBrandVscode />
        </Col>
        <Col data-tooltip-id="tool-tooltip" data-tooltip-content="Vercel" xs={4} md={2} className="tech-icons">
          <SiVercel />
        </Col>
        <Col data-tooltip-id="tool-tooltip" data-tooltip-content="Leetcode" xs={4} md={2} className="tech-icons">
          <SiLeetcode />
        </Col>
        <Col data-tooltip-id="tool-tooltip" data-tooltip-content="Github" xs={4} md={2} className="tech-icons">
          <FaGithub />
        </Col>
      </Row>
      <ReactTooltip id="tool-tooltip" />
    </>
  );
}

export default Toolstack;
