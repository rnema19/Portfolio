import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { SiLeetcode, SiGeeksforgeeks, SiCodechef, SiCodeforces,SiHackerrank } from "react-icons/si";

const Profiles = () => {

  return (
    <Row style={{justifyContent:"center", paddingBottom : "50px"}}>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://leetcode.com/u/rnema19/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode/>
            </a>
        </Col> 
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.codechef.com/users/rnema_coder19
" target="_blank" rel="noopener noreferrer">
            <SiCodechef/>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.geeksforgeeks.org/user/nemarisrplx/
" target="_blank" rel="noopener noreferrer">
            <SiGeeksforgeeks/>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://codeforces.com/profile/rnema19
" target="_blank" rel="noopener noreferrer">
            <SiCodeforces/>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.hackerrank.com/profile/nemarishabh9" target="_blank" rel="noopener noreferrer">
            <SiHackerrank/>
            </a>
        </Col>   
    </Row>

  )
}

export default Profiles