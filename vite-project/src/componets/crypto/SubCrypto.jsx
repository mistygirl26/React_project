/* eslint-disable react/prop-types */
import './Subcrypto.css';

function SubCrypto({id,coins}) {
    
  return (
    <>
        <tr>
     
        <td>{coins.market_cap_rank}{id}</td>
        <td><img className='img-fluid coin_img me-3' src={coins.image}></img>{coins.name}</td> 
        <td>${coins.current_price}</td>
        <td style={{color:'red'}} >{coins.low_24h}%</td>
        <td style={{color:'green'}} >{coins.high_24h}%</td>
        <td>${coins.total_volume}</td>
        <td>${coins.market_cap}</td>
        <td>${coins.circulating_supply}</td>
        
       
    </tr>
    
    </>
  )
}

export default SubCrypto;