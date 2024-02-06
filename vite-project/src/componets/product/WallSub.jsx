/* eslint-disable react/prop-types */
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import './wallsub.css';

function WallSub({current}) {
  return (
    <>

    <Col lg={3}md={6}sm={6}xs={11}>
       <Card className='wallet_main'>

   <       Card.Body className='text-center'>
              <Image className='pic_siz' src={current.photoName} />
              <Card.Title>{current.titles}</Card.Title>
              <Card.Text>{current.details}</Card.Text>
         </Card.Body>
      </Card>

   </Col>
    </>
  )
}

export default WallSub