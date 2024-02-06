import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Product_2 from "./Product_2";
import "./ProductMain.css";
function ProductMain() {
  return (
    <div className="bt_box">
    <Container>
        <Row>
        <h3>DISCOVER OUR PRODUCTS</h3>
            <Col md={6} className="mt-4">
            
               <h4>Copy Trading</h4>
               <p>Let top traders work for you</p>
            <div className="product">
                 <div>
                   <Card.Title>38,445</Card.Title>
                   <Card.Subtitle className="mb-2 text-muted">Master Traders</Card.Subtitle>
                 </div>

                 <div>
                   <Card.Title>431,741</Card.Title>
                   <Card.Subtitle className="mb-2 text-muted">Followers</Card.Subtitle>
                 </div>   
            </div>
                
            <Button className='war_btn' variant="warning">Warning</Button>{' '}
            </Col>

            

          <Product_2 titleName={"TRUM MARGIN PRO"} follow={"40 Followers"} rate={"7D ROI"} rateper={"56.78%"} subrate={"7D Followers PnL"} subper={"74,867.10"}/>
          <Product_2 titleName={"DOGE DOGE DOGE"} follow={"89 Followers"} rate={"7D ROI"} rateper={"35.10%"} subrate={"7D Followers PnL"} subper={"78,352.49"}/>
        </Row>
    </Container>
    </div>
  )
}

export default ProductMain