import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import colorsharp2 from "../Assets/images/color-sharp2.png";
import projectimg1 from "../Assets/images/project-img1.png";
const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      card: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      card: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      card: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      card: 1,
    },
  };
  return (
    <>
      <Container className="projects" id="projects">
        <Row>
          <Col>
            <div className="projects__content text-center pt-2 pb-2 mb-3">
              <h2>Projects</h2>
              <h4>Here are some Projects I have done</h4>
            </div>
            <Carousel
              responsive={responsive}
              infinite={true}
              className="project-slider text-center
                mt-5 mb-5"
            >
              <div className="card d-flex justify-content-center mt-5">
                <div className="card-content">
                  <img src= {projectimg1} alt="" />
                  <p className="card-title">Card hover effect</p>
                  <p className="card-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorsharp2} alt="" />
    </>
  );
};

export default Projects;
