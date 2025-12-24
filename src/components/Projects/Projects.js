import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import suicide from "../../Assets/Projects/suicide.png";
import journallite from "../../Assets/Projects/journallite.png";
import unistop from "../../Assets/Projects/unistop.png";
import prediction from "../../Assets/Projects/prediction.png";
import mealAgent from "../../Assets/Projects/mealAgent.png";
import projectSeries from "../../Assets/Projects/projectSeries.png";

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
              imgPath={journallite}
              isBlog={false}
              title="Modern Journaling"
              description="Journalling platform for students to share their thoughts and feelings. It generates the insights based on the entries. It also detetcts the mood of the user and suggests the appropriate content."
              ghLink="https://github.com/Jain-Tirth/Journalite"
              demoLink="https://journalite-a1327.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unistop}
              isBlog={false}
              title="UniStop"
              description="Platform for the students to find the competition from various platform and collects it under single platfrom Unistop. It is created to save the time of the students to find the competition."
              ghLink="https://github.com/Jain-Tirth/OpportuneX"
              demoLink="https://unistop.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prediction}
              isBlog={false}
              title="Disease Prediction System"
              description="Disease prediction system predicts the disease based on the symptoms entered by the user. It is created to help the user to find the disease based on the symptoms."
              ghLink="https://github.com/Jain-Tirth/Disease-Prediction-System"
              demoLink="https://disease-prediction-system-one.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mealAgent}
              isBlog={false}
              title="Meal Planner Agent"
              description="Created a meal planner agent which plans the meal for the user based on the user's preference. It also helps the user to find the recipe for the meal and also checks if the budget provided by the user is sufficient or not."
              ghLink="https://github.com/NikzRN01/Agent"
              demoLink="https://www.youtube.com/watch?si=I3RdzEsWlKU0yDTB&v=dLqA-BjQf0E&feature=youtu.be"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectSeries}
              isBlog={false}
              title="21 Days ML, DL and GenAI Project Series"
              description="All in combine 21 project series on Machine Learning, Deep Learning and Generative AI. It showscase the hunger to learn about the machine learning, deep learning, and the Generative AI."
              ghLink="https://github.com/Jain-Tirth/21-Days-Project-Series"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
