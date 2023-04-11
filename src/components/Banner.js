import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
// import headerImg from "../assets/IMG_7443.png";
import headerImg from "../assets/header-img.png";


export const Banner = () => {
  return (
    <section className="banner">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                Hi! I'm Chen Qu
              </h1>
              <p>
              Highly motivated and energetic Year 4 student with strong coding and interpersonal skills. Honours Specialization in Computer Science. I'm looking for software development job to gain practical experience.
              </p>
              <button onClick={() => console.log("connect")}>
                Let’s Connect <ArrowRightCircle size={25} />
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="banner-img">
              <img src={headerImg} alt="banner-img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
