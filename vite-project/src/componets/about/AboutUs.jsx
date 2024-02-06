import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import './aboutus.css';

function AboutUs() {
  return (
    <div className="mt-5">
        <div className="about">
        <h1>About Us</h1>
        <span >CRYPTO IS CHANGE THE WORLD OF FINANCE</span>
        </div>
        <Container>
            <Row>
                <div className="Subline">
                <p>At Crypto, we believe Bitcoin is the furure and a vehicle for change. Bulit with Bitcon is our initiative 
                     provide<br/> opporunities, improve lives, and make the worls a better place for communities
                     that need it the most, using<br/> Bitcoin. We live and work by three simple values to guide us on our mammth quest.
                </p>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default AboutUs