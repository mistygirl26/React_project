import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import SubProductBox from "./SubProductBox";
import './productbox.css';

const product=[{
  id:1, 
  titles:"Crypto Card",
  details:"Seamlessly convert and pay with crypto worldwide",
  photoName:"bybit card org_Artboard 1.svg",
},
{
  id:2, 
  titles:" Trading Account",
  details:"Trade spot, Derivatives and options from one account",
  photoName:"trading.svg",
},
{
  id:3, 
  titles:"Crypto Web3",
  details:"Next-level Reliability,innovation,and opportunities in web3",
  photoName:"bybit web 3_Artboard 1.svg",
},
{
  id:3, 
  titles:"Spot Trading",
  details:"Transact globally with using multiple cryptocurrencies in one",
  photoName:"spot trade_Bar Chart Increase In Flat And Glyph Styles.svg"
}];

function ProductBox() {
  return (
    
<Container>
    <h2 className="bittxt">Discover Our CRYPTO</h2>
    <Row>
      {product.map((p)=>(<SubProductBox key={p.id} subsample={p}/>))}
    </Row>

</Container>

  )
}

export default ProductBox;