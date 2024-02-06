import './BannerSection.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



function BannerSection() {
  return (
    
    <div>
      <Container>
        <Row className='d-flex align-items-center'>
          <Col className='mb-5' xl={6}lg={6}md={6}sm={12}xs={12}>
     
              <span>EVERYTHING YOU NEED</span>
              <h1 className="head-one">Buy, Sell <br/>& Accept</h1>
              <p>Now, it’s time to come up with a great slogan to tie all the pieces together.
              And not just a slogan, but a catchy and timeless slogan that people across the world will remember you for.</p>

              <div className="banner_btn">
                 <Button variant="dark">Create Account</Button>{' '}
                 <Button variant="outline-dark">Collect Wallet</Button>
              </div>

         </Col>  

            <Col xl={6}lg={6}md={6}sm={12}xs={12}>
              <img src="vecteezy_cryptocurrency-3d-illustration_11064679_757.png" className=" photo" alt="cryptocurrency"/>
            </Col>  
        </Row>     
        </Container>

    </div>
  )
}

export default BannerSection