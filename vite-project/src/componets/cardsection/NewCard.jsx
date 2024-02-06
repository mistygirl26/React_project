
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import CardSEction from './CardSEction';




const naa=[{
    id:1,
    photoName:"card 95.svg",
    titles:"Real-Time Data",
    details:" Access up-to-the-minute data on cryptocurrency prices,trading volumes,and market capitalizations. ",
},
{
    id:2,
    photoName:"card 132.svg",
    titles:"Customized Alerts",
    details:" Visualize price movements and patterns with our interactive charts and technical analysis tools. ",
},
{
    id:3,
    photoName:"card 75.svg",
    titles:"Comprehensive Charts",
    details:" Set personalized alerts for price thresholds and market events to stay ahead of the curve. ",
},
{
    id:4,
    photoName:"card 186.svg",
    titles:"Educational Content",
    details:" Access exclusive educational content to enhance your understanding of market dynamics. ",
}];

function NewCards() {
  return (
    
    <Container>
      <Row className='d-flex justify-content-center'>

{naa.map((q)=> (<CardSEction key={q.id} sample={q}/>))}
      </Row>
    </Container>
  )
}

export default NewCards;