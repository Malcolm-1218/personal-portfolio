import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logoName.png";
import navIcon1 from "../assets/nav-icon1.svg";
import navIcon2 from "../assets/nav-icon2.svg";
import navIcon3 from "../assets/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" className="logo" style={{borderRadius:'20px', width:'200px'}}/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a
                href="https://www.linkedin.com/in/malcolm-chenqu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="linkedin"></img>
              </a>
              <a
                href="https://github.com/Malcolm-1218"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="github"></img>
              </a>
              <a
                href="https://www.instagram.com/chen_qu_m/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="ins"></img>
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
    )
};