import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import HeaderSection from './componets/header/HederSection'
import FooterSection from './componets/footer/FooterSection';
import Cryptocurrencies from './componets/crypto/Cryptocurrencies';
import Home from './componets/Home';
import ProductsPage from './componets/ProductsPage';
import { Route, Routes } from 'react-router-dom';
import SingupPage from './componets/SingupPage';
import AboutPage from './componets/AboutPage';
import ContactUsPage from './componets/ContactUsPage';
import { useEffect, useState } from 'react';
import axios from 'axios';
let isMounted;
 
function App() {
  const [data,setData]= useState(['']);
  isMounted= true
useEffect(()=>{
 const fetchdata= async ()=>{
   try{
     const respons = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`);
     
     if(isMounted){
       setData(respons.data);
     }
     
   }
  catch(error){
   console.log(error.message);
  }
 }
const debouncefetech= setTimeout(() => {
 fetchdata();
},5000);
return () => {
 isMounted = false;
 clearTimeout(debouncefetech);
};

},[])
console.log(data)
  return (
    <>
      
      <HeaderSection/>

      <Routes >
          <Route path='/' element={ <Home/>}></Route>
          <Route path='coins' element={<Cryptocurrencies />}></Route>
          <Route path='products' element={ <ProductsPage/>}></Route>
          <Route path='aboutus' element={<AboutPage/>}></Route>
          <Route path='contactus' element={<ContactUsPage/>}></Route>
          <Route path='singin' element={<SingupPage/>}></Route>
      </Routes>
      
      <FooterSection/>
     
    
    
    </>
  )
}

export default App
