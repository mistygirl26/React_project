import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import './CollectWallet.css';

function CollectWallet() {
  return (
    <>
    <Container>
        <Row className="d-flex align-items-center my-6">
            <Col xl={6}lg={6}md={6}sm={12}xs={12}>
                <span className="mb-2 text-muted">WALLET</span>
                <h2>Crypto Wallet</h2>
                <ul>
                    <li>Store and manage all of your crypto, NFTs, and multiple wallets in one place</li>
                    <li>Support for hundreds of thousands of tokens and dapps</li>
                    <li>Explore the decentralized web on your phone or browser</li>
                    <li>Protect your digital assets with industry-leading security</li>
                </ul>
                <a href="" className="readmore">Download Crypto Wallet</a>
            </Col>

            <Col xl={6}lg={6}md={6}sm={12}xs={12} className="d-flex justify-content-center">
            <img src="crypto wallet-01.svg" className=" pho_to" alt="cryptocurrency"/>
            </Col>
        </Row>


       
    </Container>
    </>
  )
}

export default CollectWallet