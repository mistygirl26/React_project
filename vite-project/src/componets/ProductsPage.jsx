import ProductMain from './product/ProductMain';
import ProductBox from './product/ProductBox';
import CollectWallet from './product/CollectWallet';
import Wallet from './product/Wallet';
import WallColBox from './product/WallColBox';
import TradingSection from './product/TradingSection';



function ProductsPage() {
  return (
    <>
      <ProductMain/>
      <ProductBox/>
      <CollectWallet/>
      <Wallet/>
      <WallColBox/>  
      <TradingSection/>
      
    </>
  )
}

export default ProductsPage