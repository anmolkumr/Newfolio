import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tlbooking from "../../Assets/Projects/TlBooking.png";
import emotion from "../../Assets/Projects/emotion.png";
import scolas from "../../Assets/Projects/scolas.png";
import disp from "../../Assets/Projects/disp.png";
import notezip from "../../Assets/Projects/notezipper.png";
import colorgame from "../../Assets/Projects/colorgame.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={disp}
              isBlog={false}
              title="Dispensary Management System"
              description="Created a website for the Indian Institute of Technology Gandhinagar's (IIT GN) Medical Inventory System. Leveraging Flask seamlessly integrated the website with the system, offering an efficient and user-friendly solution. "
              ghLink="https://github.com/AmaanAnsari123/IITGNmedical"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={colorgame}
              isBlog={false}
              title="ColorGame"
              description="Developed an user interface that displays a randomly generated color in RGB format and provides input fields for the user to guess the values."
              ghLink="https://github.com/AmaanAnsari123/PROJECT-ES102"
          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scolas}
              isBlog={false}
              title="Numerical Analysis of Black – Scholes Equation"
              description="Conducted Numerical Analysis of the Black-Scholes Equation for Stock Price Prediction using Python, addressing real-world challenges. Leveraged data from OIC, CRSP, and CBOE for comprehensive analysis. "
              ghLink="https://docs.google.com/document/d/1ehSsGpgRhJNMLIut8OMqUcbQjLWIws9838myGb2NGYA/edit"
               
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tlbooking}
              isBlog={false}
              title="Tinkerers’ Lab Booking System"
              description="Developed a Customised Booking System with Admin Panel for Tinkerers' Lab, IITGN 
Built using Node.js, MongoDB and EJS with a real-time mailing feature. 
Used an API-based Approach for Operations, which enables other developers to further Contribute. "
              ghLink="https://github.com/AmaanAnsari123/TinkerersLabBookingNew"
              demoLink="https://rich-cyan-bear-wear.cyclic.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notezip}
              isBlog={false}
              title="NotesZipper"
              description="The Notes Keeper App is a full-stack web application developed using the MERN (MongoDB, ExpressJS, ReactJS, NodeJS) stack. It provides users with a convenient platform to create, manage, and organize their daily notes. The app includes robust user authentication and registration functionality, allowing users to securely create and log into their accounts."
              ghLink="https://github.com/AmaanAnsari123/NOTES-ZIPPER"
         
            />
          </Col>

    
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
