import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cardioVet from "../../Assets/Projects/CardioVet.png";

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
              imgPath={cardioVet}
              isBlog={false}
              title="CardioVet"
              description="CardioVeT — Desktop app for veterinary cardiology reports
A custom clinical tool built with Electron for a veterinary cardiologist: it enables 
completing a structured form with echocardiographic parameters, ECG, and blood pressure,
generating a professional PDF report with custom letterhead in seconds. It stores patient 
history to compare previous studies in real time during the consultation.
The design focus was eliminating friction in a high-concentration clinical context (the doctor fills in data while examining the patient),
with a distinctive visual identity — far from generic hospital aesthetics or SaaS dashboard design — and WCAG AA accessibility.
Stack: Electron, vanilla JavaScript, jsPDF."
              ghLink="https://github.com/MateoHomps/CardioVet"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
