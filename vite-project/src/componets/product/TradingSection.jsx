import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import './tradingsection.css';


function TradingSection() {
  return (
    <div>
       <Container>
            <Row className="trade_section d-flex align-items-center my-6">
               <h2>Trade Anytime, Anywhere</h2>
                <Col xl={6}lg={6}md={6}sm={12}xs={12}>
                    <p>Open new option instantly, whether its on Bybit App or Web</p>
               <div className="code_txt">  
                  <div>
                  <img src="qr code.png" className="code" alt="qr code"/>
                  </div>

                  <div className="subtrad">
                    <span>scan Now to Download</span><br/>
                    <span className="app_txt">ios & Android</span>  
                  </div>
                </div>   

                <div className="appicn">
                  <i className="bi bi-apple change"></i>
                  <i className="bi bi-android change"></i>
                  <i className="bi bi-google-play change"></i>
                  <i className="bi bi-plugin change"></i>
                  </div>  

                </Col>

                <Col xl={6}lg={6}md={6}sm={12}xs={12} className="d-flex justify-content-center">
                    <img className="tradepic img-fluid" src="trade anytime-01.svg"/>
                </Col>

            </Row>

       </Container>


    </div>
  )
}

export default TradingSection;