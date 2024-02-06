/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Rate.css';
import Col from "react-bootstrap/esm/Col"
import Image from 'react-bootstrap/Image';


function Rate({details}) {
  return (
    <>

  
  <Col lg={4}md={6}sm={6}xs={11} className="d-flex justify-content-center mb-4">
  <Card style={{ width: '18rem' }}>
      <Card.Body className='pricebox'>
      
      <Image  className='price' src={details.image} roundedCircle />
        <Card.Title>{details.id}</Card.Title>

        <div className='d-flex justify-content-between'>
          <div className='d-flex flex-column'>
        <Card.Text>7D ROI</Card.Text>
        <Card.Subtitle className="mb-2 text-muted rr">{details.price_change_24h}</Card.Subtitle>
        </div>

        <div className='d-flex flex-column'>
        <Card.Text>7D PNL</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">{details.price_change_percentage_24h}</Card.Subtitle>
        </div>
        </div>
        
        <div className='d-flex justify-content-between'>
        <div className='d-flex flex-column'>
        <Card.Text>7D MDD</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">{details.market_cap_change_percentage_24h}</Card.Subtitle>
        </div>

        <div className='d-flex flex-column'>
        <Button className='blk_btn' variant="dark">Copy</Button>
        </div>
        </div>
        
      </Card.Body>
    </Card>
    </Col>
    

    </>
  )
}

export default Rate;