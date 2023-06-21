import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.png";
import hms from "../../Assets/Projects/HMS.png";
import paaf from "../../Assets/Projects/paaf.png";
import sm from "../../Assets/Projects/SM.png";
import unlimited from "../../Assets/Projects/Unlimited.png";
import portal from "../../Assets/Projects/studentPortal.png";


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
              imgPath={hms}
              isBlog={false}
              title="Hospital Management system"
              description="Helps manage the information related to health care and aids in the job completion of health care providers effectively."
              ghLink="https://github.com/stevoyk/Hospital-Management-system.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paaf}
              isBlog={false}
              title="Nigeria Constitution Translate"
              description="Prince Ade Ajayi Foundation is a platform through which youths and women in Africa are groomed to become good leaders and to realize their full potentials."
              ghLink="https://github.com/stevoyk/paaf.git"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sm}
              isBlog={false}
              title="SDMS"
              description="School database Management System streamlines the activities that needs to be performed, it helps for better communication between parents and teachers"
              ghLink="https://github.com/stevoyk/sdms.git"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unlimited}
              isBlog={false}
              title="Unlimited Digitech Limited"
              description="UNLIMITED DIGITECH LIMITED is a registered limited liability company in Nigeria. It is an information Technology company with head Office in Abeokuta, It engages but not limited in the following.Software Testing and Analyzing, Developing Software/Application and Users Supports. Router and Network Device Configuration,LAN-Extension,WAN Configuration. Closed Circuit Television (CCTV), Internet/Network Security:"
              ghLink="https://github.com/stevoyk/unlimited.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="My personal Portfolio"
              description="My professonal website which provides information about what i do, the services i offer and how to contact me. "
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portal}
              isBlog={false}
              title="Student Registration Portal"
              description="This Portal is web-based designed systems that takes care of student registration, produces students' blacklist, quick report of students' result, provision for uploading and downloading course materials and departmental course allocation"
              ghLink="https://github.com/stevoyk/student-registration-portal.git"
               
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
