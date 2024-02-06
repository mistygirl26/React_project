import Container from "react-bootstrap/esm/Container";
import OurMission from "./about/OurMission";
import Whoweare from "./about/Whoweare";

import AboutFeature from "./about/AboutFeature";
import AboutUs from "./about/AboutUs";



function AboutPage() {
  return (
    <div>
      <Container>
           <AboutUs/>
           <OurMission/>
           <Whoweare/>
           <AboutFeature/>
      </Container>
    </div>
  )
}

export default AboutPage


