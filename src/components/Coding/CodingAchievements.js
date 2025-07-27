import React from 'react'
import Profiles from './Profiles'
import { Container, Row, Col } from "react-bootstrap";
import { GrAchievement } from "react-icons/gr";

const CodingAchievements = () => {
  return (
    <section>
    <Container fluid className="about-section">
            <Row style={{ justifyContent: "center", padding: "10px" }}>
              <Col
                md={7}
                style={{
                  justifyContent: "center",
                  paddingTop: "30px",
                  paddingBottom: "30px",
                }}
              >
                <h1 style={{ fontSize: "1.4em", paddingBottom: "20px" }}>
                  I used to do competitive programming for fun. I have participated in many algorithmic and development based hackathons.
                  <span></span>
                  <br/>
                  <br/>
                  <GrAchievement/>Achieved a rank of 2288 in <span className="purple">TCS Codevita Season12</span> with a preplacement offer.
                  <br/>
                  <br/>
                  <GrAchievement/>Achieved a rank of 7758 in MetaHackerCup 2025.
                  <br/>
                  <br/>
                  <GrAchievement/>Participated in Flipkart Grid5.0, Adobe GenSolve, Luminous, Rebelfoods, TVS Credit Analyst&IT domain, Hackvega and moved past round1 in many.
                </h1>

                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" , paddingTop : "30px"}}>
                  I code and solve many problems <strong className="purple">here: </strong>
                </h1>
              </Col>
            </Row>
      </Container>     
          
    <Profiles/>
    </section>
  )
}

export default CodingAchievements