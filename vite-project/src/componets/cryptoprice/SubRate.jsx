import Row from "react-bootstrap/esm/Row"
import Rate from "./Rate"
import Container from "react-bootstrap/esm/Container"
import "./subRate.css";
import details from './response.json'





function SubRate() {
  return (
    <>
    
    <Container>
    <h2 className="rate_head">CRYPTO PRICES</h2>
    <p className="pricetxt">Cryptocurrency, sometimes called crypto-currency or crypto, is any<br/> form of currency that exists digitally or virtually and uses cryptography to secure transactions.<br/> Cryptocurrencies dont have a central issuing or regulating authority.</p>
    <Row>
    {details.map((details)=>(<Rate details={details}  key={details.id}/>
    )
    )}
    </Row>
    </Container>
    </>
  )
}

export default SubRate