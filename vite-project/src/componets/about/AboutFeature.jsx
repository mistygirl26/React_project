
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import './aboutfeature.css';
import SubFeature from "./SubFeature";


const info=[
	{
		id:1,
		pic:"mobile app-01.svg",
		titile:"Mobile Apps",
		detail:"Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
	{
		id:2,
		pic:"safe.svg",
		titile:"Safe & Secure",
		detail:"Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
	{
		id:3,
		pic:"wallet-01.svg",
		titile:"Wallet",
		detail:"Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
	{
		id:4,
		pic:"support-01.svg",
		titile:"Experts Support",
		detail:"Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
	{
		id:5,
		pic:"instant-01.svg",
		titile:"Instant Exchange",
		detail:"Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
	{
		id:6,
		pic:"recuring buys-01.svg",
		titile:"Recuring Buys",
		detail:"Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
	
]

function AboutFeature() {
  return (
    <div>
        <Container>
            <h2 className="whyus">Why Choose Us</h2>
            <Row className='d-flex justify-content-center'>    
				{info.map((p)=>(<SubFeature key={p.id} sample={p}/>))}
            </Row>
        </Container>
    </div>
  )
}

export default AboutFeature