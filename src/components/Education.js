import { Container, Row, Col, Tab, TabContainer } from "react-bootstrap";
import { EducationCard } from "./EducationCard";
import eduImg1 from "../assets/img/education-img1.jpg";
import eduImg2 from "../assets/img/education-img2.jpg";
import eduImg3 from "../assets/img/education-img3.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Education = () => {

  const educations = [
    {
      title: "Secoundary(X)",
      description: "Passed out with a over all agreagate of 9.5 out of 10 CGPA",
      imgUrl: eduImg1,
    },
    {
      title: "Senior Secoundary(XII)",
      description: "Passed out with a over all agreagate of 946 out of 1000 Marks",
      imgUrl: eduImg2,
    },
    {
      title: "Graduation (B.Tech/B.E)",
      description: "Passed out with a over all agreagate of 9.3 out of 10 CGPA",
      imgUrl: eduImg3,
    },
  ];

  return (
    <section className="education" id="educations">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Education</h2>
                <p>Providing my Educational Details below with the Final Report.</p>
                <TabContainer>
                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Row>
                        {
                          educations.map((education, index) => {
                            return (
                              <EducationCard
                                key={index}
                                {...education}
                                />
                            )
                          })
                        }
                      </Row>
                  </Tab.Content>
                </TabContainer>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
