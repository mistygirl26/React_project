/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/esm/Col"
import './product_2.css';


function Product_2(props) {
  return (
    
      <Col md={3}>
        <div className='sub_bit p-4' >
          <div>
            <h4> {props.titleName}</h4>
            <Card.Subtitle className="mb-2 text-muted">{props.follow}</Card.Subtitle>
        </div>
        <div className="pro_duct">
                 <div>
                   
                   <Card.Subtitle className="mb-2 text-muted">{props.rate}</Card.Subtitle>
                   <Card.Title>{props.rateper}</Card.Title>
                 </div>

                 <div>
                   
                   <Card.Subtitle className="mb-2 text-muted">{props.subrate}</Card.Subtitle>
                   <Card.Title>{props.subper}</Card.Title>
                 </div>   
            </div>
            <Button className='cpy_btn' variant="warning">Copy</Button>{' '}
  
          
            </div>
            </Col>
            
   
  )
}

export default Product_2;