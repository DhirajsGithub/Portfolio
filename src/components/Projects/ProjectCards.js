import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal"; // For fullscreen modal
import {CgWebsite} from "react-icons/cg";
import {BsGithub} from "react-icons/bs";
import { ImPointRight } from "react-icons/im";
import { FaAppStoreIos } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";


import Badge from "react-bootstrap/Badge";

function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // To track the active image in carousel

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setShowModal(true); // Open the modal when an image is clicked
  };

  const handleModalClose = () => setShowModal(false);

  return (
    <>
      <Card className="project-card-view" style={{border: "none", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "10px"}}>

        {/* Demo Gallery (Carousel) */}
        {props.gallery && (
          <Carousel
            activeIndex={currentIndex}
            onSelect={(selectedIndex) => setCurrentIndex(selectedIndex)} // Sync carousel index
            style={{cursor: "pointer"}} // Make it clear that images are clickable
          >
            {props.gallery.map((imgSrc, index) => (
              <Carousel.Item key={index} onClick={() => handleImageClick(index)}>
                <Card.Img
                  // variant="top"
                  src={imgSrc}
                  alt={`gallery-img-${index}`}
                  style={{height: "300px", objectFit: "contain", borderRadius: "10px"}} // Fixed height for consistent card size
                />
              </Carousel.Item>
            ))}
          </Carousel>
        )}

        <Card.Body>
          {/* Project Title */}
          <Card.Title style={{fontWeight: "600", fontSize: "1.5rem"}}>{props.title}</Card.Title>

          {/* Small Description */}
          <Card.Text style={{textAlign: "justify", marginBottom: "15px"}}>
            {props.smallDescription}
          </Card.Text>

          {/* Key Features */}
          <Card.Text>
            <ul style={{textAlign: "left", listStyleType: "none", paddingLeft: "1rem"}}>
              {props.features.map((feature, index) => (
                <li key={index} style={{marginBottom: "3px"}}>
                <ImPointRight style={{ marginRight: "10px",  }} />
                {feature}
                </li>
              ))}
            </ul>
          </Card.Text>

          {/* Technologies Tags */}
          <Card.Text style={{ marginBottom: "15px" }}>
            <div style={{ marginTop: "10px" }}>
              {props.technologies.map((tech, index) => (
                <Badge key={index} pill bg="secondary" style={{ margin: "5px" }}>
                  {tech}
                </Badge>
              ))}
            </div>
          </Card.Text>

          {/* GitHub and Demo Buttons */}
         {props.ghLink && <Button variant="primary" href={props.ghLink} target="_blank" style={{marginRight: "10px"}}>
            <BsGithub /> &nbsp; {props.isBlog ? "Blog" : "GitHub"}
          </Button>}
          {props.android && <Button variant="primary" href={props.ios} target="_blank" style={{marginRight: "10px"}}>
            <IoLogoGooglePlaystore /> &nbsp; { "Download on Android"}
          </Button>}
         {props.ios && <Button variant="secondary" href={props.ios} target="_blank" style={{marginRight: "10px"}}>
            <FaAppStoreIos /> &nbsp; { "Download on ios"}
          </Button>}
       

          {!props.isBlog && props.demoLink && (
            <Button variant="secondary" href={props.demoLink} target="_blank">
              <CgWebsite /> &nbsp; {"Demo"}
            </Button>
          )}

        </Card.Body>
      </Card>

      {/* Fullscreen Modal for Image Gallery */}
      <Modal style={{backgroundColor: "#000"}} show={showModal} onHide={handleModalClose} size="xl" centered>
        <Modal.Body style={{padding: 0}}>
          {props.gallery && (
            <Carousel
              activeIndex={currentIndex}
              onSelect={(selectedIndex) => setCurrentIndex(selectedIndex)} // Sync carousel index
              interval={null} // No auto-slide
              controls={true} // Show prev/next buttons
              indicators={true} // Show indicators
            >
              {props.gallery.map((imgSrc, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={imgSrc}
                    alt={`modal-gallery-img-${index}`}
                    style={{
                      width: "100%",
                      height: "80vh",
                      objectFit: "contain",
                      backgroundColor: "rgba(0, 0, 0, 0.8)"
                    }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectCards;
