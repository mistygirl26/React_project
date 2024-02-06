
import './StayCrypto.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



function StayCrypto() {
  return (
    <div className='side_txt'>
        <Container>
            <Row>
                <Col xl={6}lg={6}md={6}sm={12}xs={12}>
                      <span>THERE ONLINE TRADING</span>
                      <h2 className="head-two">Stay Cool With <br/>Crypto</h2>
                      <p className="crypt_text">We know that sometimes deep dive into the crypto economy may mean some technical barriers.Sometimes it can be difficult to deal with blockchain
                        transactions and crypto trading procedures.</p>
                        <Button variant="outline-dark">Collect Wallet</Button>
                      
                </Col>    

                <Col xl={6}lg={6}md={6}sm={12}xs={12}>
                      <img src="phone.png" className="img-fluid" alt="crypto"/> 
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default StayCrypto;