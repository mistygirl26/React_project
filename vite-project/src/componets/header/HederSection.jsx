
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import './HeaderSection.css'
import Container from 'react-bootstrap/esm/Container';


import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function HeaderSection() {
  return (
    <>

<Navbar expand="lg" className="bg-body-tertiary act_dc ">
      <Container >
      <Link to={"/"} ><img src="logo.svg" className="grind " alt="logo"/></Link>
      
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='actio'>
          <Nav
            className=" head me-auto my-2  "
            navbarScroll
          >
          
          <Nav.Link > <Link to={"/"} > Home</Link> </Nav.Link>
          <Nav.Link > <Link to={"coins"} > Coins</Link> </Nav.Link>
          <Nav.Link > <Link to={"products"} > Products</Link> </Nav.Link>
          <Nav.Link > <Link to={"aboutus"} >About Us</Link> </Nav.Link>
          <Nav.Link > <Link to={"contactus"} >Contact Us</Link> </Nav.Link>
            
            
            
            
          </Nav>
         
          <Link to={"singin"}><Button variant="dark">Sing In</Button></Link>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
  </>

  )
}

export default HeaderSection;