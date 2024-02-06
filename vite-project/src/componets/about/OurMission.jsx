import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import "./Ourmission.css";
import Container from "react-bootstrap/esm/Container";

function OurMission() {
  return (
    <div>
        <Container>
        <Row className="d-flex align-items-center my-6">
          
          <Col xl={6}lg={6}md={6}sm={12}xs={12} >
            <img className="missionpic img-fluid" src="our mission [Converted].svg"/>
          </Col>

          <Col xl={6}lg={6}md={6}sm={12}xs={12} >
            <h2>Our Mission</h2>
            <p>At Cryptocurrency , we are driven by a singular mission: to revolutionize the world of finance by empowering individuals with secure, accessible, and decentralized financial solutions.</p>
          </Col>
        </Row>
        </Container>
      
    </div>
  )
}

export default OurMission;