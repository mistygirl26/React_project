/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/esm/Container';

import './cryptocurrencies.css'
import Table from 'react-bootstrap/Table';

import SubCrypto from './SubCrypto';

import details from './response.json'


function Cryptocurrencies({data}) {


 
  return (
    
    <>

   <Container>
    <h3>Coins</h3>
    <Table  responsive>
    <thead>
      <tr>
   
        <th></th>
        <th>Coins</th>
        <th>current_price</th>
        <th>low_24h</th>
        <th>high_24h</th>
        <th>Volume(24h)</th>
        <th>MarketCap</th>
        <th>CirculatingSupply</th>
      </tr>
      
    {data?data.map((details)=>(<SubCrypto Key={details.id} coins={details}/>)):details.map((p)=>(<SubCrypto key={p.market_cap_rank} coins={p}/>))}
    </thead>

  </Table>
  </Container>
    </>

  )
}

export default Cryptocurrencies;