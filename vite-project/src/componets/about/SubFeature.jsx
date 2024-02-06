/* eslint-disable react/prop-types */

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import './subfeature.css';

function SubFeature({sample}) {
  return (
    
         <Col lg={4}md={4}sm={8}xs={8}>
      <div className="d-flex justify-content-center ">
    <Card className='featu_box my-3'>
      
      <Card.Body className='choose'>
      <Image className='whypic' src={sample.pic}/>
        <Card.Title>{sample.titile}</Card.Title>
        <Card.Text>
            {sample.detail}
        </Card.Text>
      </Card.Body>
      
    </Card>
    </div>
    </Col>
    
  )
}

export default SubFeature