import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import WallSub from './WallSub';


const details=[
    {
        id:1,
        photoName:"control.org.svg",
        titles:"Control your crypto",
        details:"Coinbase Wallet is a self-custody wallet, giving you complete control of your crypto. ",
    },
    {
        id:1,
        photoName:"nft.svg",
        titles:"Store all of your NFTs",
        details:" Safely store and easily view all of your Ethereum and Polygon NFTs right in your Wallet. ",
    },
    {
        id:1,
        photoName:"tick-01.svg",
        titles:"Industry-leading security",
        details:" Additional security options of your devices more ways to keep your crypto safe and secure. ",
    },
    {
        id:1,
        photoName:"recu-01.svg",
        titles:"Works with Coinbase",
        details:" Already a Coinbase customer? Link your Coinbase account to your Wallet access your crypto. ",
    },
  ]

function WallColBox() {
  return (
    <>
    <Container>
       <Row>

          {details.map((d)=> (<WallSub key={d.id} current={d}/>))}
       </Row>
    </Container>

    
    </>
  )
}

export default WallColBox