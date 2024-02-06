/* eslint-disable react/prop-types */

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import './subproductBox.css';

function SubProductBox({subsample}) {
  return (
    
     
    <Col lg={3}md={6}sm={6}xs={11}>

    <Card className='bit_box my-5'>
      
      <Card.Body className='bit_bdy'>
      <Image className='img-fluid bit_pic'  src={subsample.photoName} />
        <Card.Title>{subsample.titles}</Card.Title>
        <Card.Text>
            {subsample.details}
        </Card.Text>
      </Card.Body>

      
    </Card>



    </Col>
    
  )
}

export default SubProductBox;