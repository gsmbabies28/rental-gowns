
import Body from '../components/body/Body';
import Banner from '../components/body/banner/Banner';
import Featured from '../components/body/products/Featured';


const Home = () => {

  return (
    <div id="main">

      <Body>
          <Banner title="Worry no more, gowns at your door." text="Quality gowns and tuxedos" btnTxt="Shop now" />
          <Featured />
      </Body>
 
    </div>
  )
}

export default Home