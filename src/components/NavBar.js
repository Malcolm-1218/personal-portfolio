import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from "../assets/nav-icon1.svg";
import navIcon2 from "../assets/nav-icon2.svg";
import navIcon3 from "../assets/nav-icon3.svg";
import logo from "../assets/logoName.png";
import { useState, useEffect } from "react";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  return (
    <Navbar className={scrolled ? "scrolled" : ""} expand="md">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" style={{borderRadius:'20px', width:'170px'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
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
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
};
