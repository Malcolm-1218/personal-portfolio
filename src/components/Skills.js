import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter95 from "../assets/meter1.svg";
import meter80 from "../assets/meter2.svg";
import meter90 from "../assets/meter3.svg";
import colorSharp from "../assets/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                I have a strong proficiency in HTML, CSS, and JavaScript<br/> and I am familiar with frontend frameworks and libraries such as React and Angular.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter95} alt="image1" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter90} alt="image2" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={meter80} alt="image5" />
                  <h5>RESTful API</h5>
                </div>
                <div className="item">
                  <img src={meter90} alt="image3" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter80} alt="image4" />
                  <h5>Angular</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image5" />
    </section>
  );
};
