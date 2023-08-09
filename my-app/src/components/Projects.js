import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/InstaClone.png";
import projImg2 from "../assets/img/AI-SAAS.PNG";
import projImg3 from "../assets/img/ComingSoon.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Instagram clone",
      description: "This is a simple instagram clone i designed and developed with limit functionality",
      imgUrl: projImg1,
    },
    {
      title: "AI-SAAS",
      description: "This is a project that I integrated open AI to generate images,code,text,pictures,videos, and music. Technologies- Next 13, React, Tailwind,Prisma,MySQL,Stripe,and Crisp url=https://2nd-project-r2fn-j6edlmxxl-markmathison.vercel.app/",
      imgUrl: projImg2,
    },
    {
      title: "Coming Soon",
      description: "NA",
      imgUrl: projImg3,
    },
    {
      title: "Coming Soon",
      description: "NA",
      imgUrl: projImg3,
    },
    {
      title: "Coming Soon",
      description: "NA",
      imgUrl: projImg3,
    },
    {
      title: "Coming Soon",
      description: "NA",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>
These are the projects I have completed, and I am deeply passionate about them. I took charge of designing, building, and successfully deploying each one of them.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                           <p>Description.</p>
                                      </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                      <p>Description.</p>
                                              </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
