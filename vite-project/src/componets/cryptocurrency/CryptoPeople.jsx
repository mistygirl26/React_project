
import './crypto.css'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function CryptoPeople() {
  return (
    <div className='crypt_txt '>
        <Container>
            <Row>
                <Col  xl={6}lg={6}md={6}sm={12}xs={12}>
                  <img src="12.png" className="img-fluid" alt="crypto"/>
                </Col>    

                <Col xl={6}lg={6}md={6}sm={12}xs={12}>
                <span className="crtxt head_text">Cryptocurrency<br/>For People </span>
                        <p className="crypt_text">Our comprehensive educational resources cover everything from the fundamentals of blockchain technology to in-depth analysis of various cryptocurrencies. Whether you are looking for beginner guides or advanced tutorials, we have something for everyone.</p>
                        <Button variant="outline-dark">Join Our Wallet</Button>  
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default CryptoPeople;