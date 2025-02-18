import Navbar from './components/Navbar';
import garden_1 from './assets/img/1d99cf0e3a0144c1229f92ee5b3c63b0eaae893c_home-hero.jpg';
import shop_outside from './assets/img/8f74dfabde9ebd66d0d078ba6cf794c77dc8ac5b_home_page_one.jpg';
import shop_inside from './assets/img/20c7997073b456fda0e6de872d23b6183892bdde_home_page_two.jpg';
import shop_employees from './assets/img/13a988aff3e9c672350fe8330eb7386c3a85eeb9_home_page_three.jpg';
import Details from './components/Details';
import { IDetails } from './components/Details';
import MarketEvents from './layout/MarketEvents';
import MarketAddress from './layout/MarketAddress';
import Footer from './layout/Footer';
import CanalStreetMarketIcon from './components/CanalStreetMarketIcon';
import { useInView } from 'react-intersection-observer';
import HamburgerNavbar from './components/HamburgerNavbar';

const detailsArr: IDetails[] = [
  {
    image: shop_outside,
    altText: 'shop_outside',
    description: 'Merging retail, food, art, and culture, Canal Street Market highlights top retail and design concepts, restaurants, and up-and-coming players in the downtown New York City community.'
  },
  {
    image: shop_inside,
    altText: 'shop_inside',
    description: 'Retail Market Hours:',
    breakLine: 'Thursday - Sun: 11:00AM - 7:00PM'
  },
  {
    image: shop_employees,
    altText: 'shop_employees',
    description: 'Food Hall Hours:',
    breakLine: 'Mon - Sun: 11:00AM - 8:00PM'
  }
];

function App() {
  const { ref: imgRef, inView: imgInView } = useInView({
    triggerOnce: true,
    threshold: 0.4
  });
  const { ref: detailsRef, inView: detailsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <div className='main-container'>
      <div className='fixed top-7.5 z-1 md:left-15 md:top-15 w-full px-7.5 flex justify-between items-center animate-logo'>
        <CanalStreetMarketIcon />
        <HamburgerNavbar />
      </div>
      <Navbar />
      
      <section className='mb-52 md:mb-15'>
        <h2 className='pt-75 pb-44 px-7.5 font-ogg text-4xl md:text-[75px] md:pt-[250px] md:px-15 md:pb-30 opacity-0 animate-hero-text z-1'>
          Canal Street Market is a carefully curated retail market, food hall & community space open year-round at 265 Canal Street. Support Small Business this weekend!
        </h2>
        <div className='overflow-x-clip'>
          <img ref={imgRef} src={garden_1} alt='garden_1' className={`scale-148 md:scale-100 opacity-0 ${ imgInView ? 'animate-hero-image' : '' }`} />
        </div>
      </section>
      <section className='px-7.5 md:px-15 lg:grid lg:grid-cols-3 lg:gap-x-15'>
        <h2 className='font-ogg text-6xl mb-15 md:text-[113px] md:leading-40 lg:col-start-1 lg:col-end-4'>A New Kind of Market</h2>
        <div ref={detailsRef} className={`opacity-0 lg:col-start-1 lg:col-end-4 lg:grid lg:grid-cols-3 lg:gap-x-15 ${ detailsInView ? 'animate-details' : '' }`}>
          {
            detailsArr.map((obj, index) =>
              <Details 
                key={index} 
                image={obj.image} 
                altText={obj.altText} 
                description={obj.description} 
                breakLine={obj.breakLine}
              />
            )
          }
        </div>
      </section>

      <MarketEvents />
      <MarketAddress />
      <Footer />
    </div>
  );
}

export default App;