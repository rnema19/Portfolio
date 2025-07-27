import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import playground from "../../Assets/Projects/playground_proj.png"
import cons_proj from "../../Assets/Projects/cons_proj.png"
import chatbot from "../../Assets/Projects/CSVchatbot_proj.png"
import jobsite from "../../Assets/Projects/jobsite_proj.png"

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
              imgPath={cons_proj}
              isBlog={false}
              title="Construction Management App"
              description="Virtual construction project management app with authorization and authentication. Various stakeholders could approve bills, add progress and give comments. Made with Node.js, Express.js, MongoDB, JWT and HTML-CSS."
              ghLink="https://github.com/VNITCiv-FinalYearProject/ProjectManagement/tree/temp_R3"
              liveLink="https://constructionmanagement-jwdr.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={playground}
              isBlog={false}
              title="Playgrounds Project"
              description="Community usage application where you could list all the playgrounds available in your city, their rates, their address, along with their photos. Made with simple Javascript, Node.js, Express.js, MongoDB and HTML-CSS."
              ghLink="https://github.com/rnema19/section52"
              liveLink="https://playgrounds-project.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="CSV Chatbot application"
              description="Developed a LLM chatbot to extract information from .csv files. On the similar lines developed such chatbots for .json and PDF formats. Used Python and Langchain framework. Used Chroma DB, FAISS to store the chat for context. Used Google GEN AI APIs for open source usage and RAG pipelines. "
              ghLink="https://github.com/rnema19/CSV-Chat-Agent"
              liveLink="https://csv-chat-agent.streamlit.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobsite}
              isBlog={false}
              title="Jobsite Portal"
              description="Developed a static jobsite for freshers exclusively as no experience jobs are hard to find. Used Javascript framework like React.js, React-router-dom, tailwind.css. Could be optimised to connect with a database to make it a webservice."
              ghLink="https://github.com/rnema19/Jobsite"
              liveLink="https://react-crashcourse.onrender.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
