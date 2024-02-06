import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import './whowe.css';

function Whoweare() {
  return (
    <div>
        
        <Row className="d-flex align-items-center my-6">
          <Col xl={6}lg={6}md={6}sm={12}xs={12}>
            <h2>Who We Are</h2>
            <p>Cryptocurrency  is a team of passionate and experienced professionals in the fields of blockchain technology, finance, and cybersecurity. We came together with the shared vision of creating a cryptocurrency ecosystem that fosters financial inclusion, transparency, and innovation.</p>
          </Col>

          <Col xl={6}lg={6}md={6}sm={12}xs={12} className="d-flex justify-content-center">
             <img className="whopic img-fluid" src="who we are.svg"/>
            
          </Col>
        </Row>
      
    </div>
  )
}

export default Whoweare;