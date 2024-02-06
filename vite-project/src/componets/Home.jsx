import BannerSection from './banner/BannerSection';
import BrandSection from './banner/BrandSection';
import NewDescade from './cardsection/NewDescade';
import NewCards from './cardsection/NewCard';
import CryptoPeople from './cryptocurrency/CryptoPeople';
import StayCrypto from './cryptocurrency/StayCrypto';
import JoinCrypto from './cryptocurrency/JoinCrypto';
import SubRate from './cryptoprice/SubRate';
function Home() {
  return (
    <>
     <BannerSection/>
      <BrandSection/>
      <SubRate/>
      <CryptoPeople/>
      <NewDescade/>
      <NewCards/>
      <StayCrypto/>
      <JoinCrypto/>
    </>
  )
}

export default Home