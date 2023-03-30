import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from "../assets/nav-icon1.svg";
import navIcon2 from "../assets/nav-icon2.svg";
import navIcon3 from "../assets/nav-icon3.svg";
import logo from "../assets/logo.svg";

export const NavBar = () => {
  return (
    <Navbar className="navbar" expand="md">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
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
