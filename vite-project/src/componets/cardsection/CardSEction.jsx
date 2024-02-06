/* eslint-disable react/prop-types */
import './CardSection.css'

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';



function CardSEction({sample}) {
  return (
    <>
     
    <Col lg={3}md={6}sm={6}xs={11}>
      <div className='d-flex justify-content-center'>
    <Card className='crd_main'>
      
      <Card.Body className='text-center'>
      <Image  src={sample.photoName} />
        <Card.Title>{sample.titles}</Card.Title>
        <Card.Text>
            {sample.details}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </Col>
   
    </>
  )
}

export default CardSEction;








