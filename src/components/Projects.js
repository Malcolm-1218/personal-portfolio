import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import SIT from "../assets/SIT.png";
import votingbuck from "../assets/votingbuck.png";
import HCI from "../assets/HCI.png";

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
      <div>
        <h2>Projects</h2>
        <p className="intro-context">
          As a CS student, I have worked on many projects. Here are some of my favorites.
        </p>
      </div>
        <Row>
          <Col>
            <Card className="card">
              <Card.Img variant="top" src={SIT} />
              <Card.Body>
                <Card.Title>SIT</Card.Title>
                <Card.Text>
                Seniors-in-IT is a usc club that helps seniors in London learn about Tech and connect online.
                </Card.Text>
                <Button href="https://www.figma.com/file/Qr2jPuEMmKUHQahsXsbIT1/Seniors-in-IT-Website-Mock-Up?node-id=1-1404&t=HKKtl8yhyGn9lEpw-0" variant="outline-primary">
                  Figma Design
                </Button><br/> <br/>
                <Button href="https://github.com/jalladleen/SIT" variant="outline-primary">Source Code</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card >
              <Card.Img variant="top" src={votingbuck}  />
              <Card.Body>
                <Card.Title>Votingbuck</Card.Title>
                <Card.Text>
                Votingbuck is a web platform that documents monetary connections between politics and the corporate world
                </Card.Text>
                <Button href="https://www.figma.com/file/5ioczRqPJeUGUirht0sdJn/Votingbuck?node-id=243-2746&t=0PNP6HwXlv8VKlcH-0" variant="outline-primary">
                  Figma Design
                </Button><br/> <br/>
                <Button href="https://dev.votingbuck.com/" variant="outline-primary">Live Demo</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card >
              <Card.Img variant="top" src={HCI}  />
              <Card.Body>
                <Card.Title>HCI Web Report</Card.Title>
                <Card.Text>
                This is the final report of UWO HCI course (CS4474) in the form of an interactive webpage.
                </Card.Text>
                <Button href="https://github.com/Malcolm-1218/cs4474-report" variant="outline-primary">
                  Source Code
                </Button><br/> <br/>
                <Button href="malcolm-1218.github.io/cs4474-report/" variant="outline-primary">Live Demo</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
