import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import algoVisualizer from "../../Assets/Projects/algoVisualizer.png";
import chatletUI from "../../Assets/Projects/chatletUI.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p >
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={algoVisualizer}
              isBlog={false}
              title="Algo-Visualizer"
              description="This project is a Web Visualization tool for sorting algorithms. Build React application visualization sorting algorithm. Implemented Merge Sort, Quick Sort, Bubble Sort, Selection Sort, Insertion Sort."
              link="https://github.com/ranjith-web/algo-visualizer"
              completed={true}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatletUI}
              isBlog={false}
              title="chatlet.ui"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Redux, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              link="https://github.com/ranjith-web/frontend-portfolio"
              completed={false}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
