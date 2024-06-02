import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import HTH from '../assets/img/HTH.svg'
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={HTH} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/haripreeth-thota/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/haripreeth369" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/h_a_r_i_p_r_e_e_t_h/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright @2024 HTH. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
