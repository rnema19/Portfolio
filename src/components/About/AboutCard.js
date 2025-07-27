import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rishabh Nema </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I am currently looking out for Full-stack development and Gen AI freelancing, internship and job related opportunities.
            <br />
            I have completed Bachelor in Technology from <span className="purple">Visvesvaraya National Institute
            of Technology, Nagpur.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing football
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Blogs and Articles
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Great ideas are built by perseverence and determination!"{" "}
          </p>
          <footer className="blockquote-footer">Rishabh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
