import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row className="footer1">
        <Col md="4" className="footer-copywright">
          <h4>Designed and Developed By Ichrak Ben Asker</h4>
        </Col>
        <Col md="4" className="footer-copywright">
          <h4>Copyright © {year} Ichrak Ben Asker</h4>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;