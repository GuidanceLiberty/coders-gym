import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Equipment from './components/Equipment';
import Banner from './components/Banner/Banner';

import Img1 from "../src/assets/hero/fit-girl.jpeg";
import Img2 from "../src/assets/hero/fit-girl2.jpeg"
import Tabs from './components/tabs/Tabs';
import Testimonials from './components/testimonial/Testimonials';
import Banner2 from './components/Banner/Banner2';
import Footer from './components/footer/Footer';



const BannerData = {
  image: Img1,
  title: "The importants to take care of yourself",
  subtitle: "How Prioritizing Your Physical, Mental, and Emotional Well-Being Can Lead to a More Balanced Life, Greater Fulfillment, and Long-Term Success in Both Personal and Professional Realms",
  link: "#"
};
const Banner2Data = {
  image: Img2,
  title: "The importants to take care of yourself",
  subtitle: "How Prioritizing Your Physical, Mental, and Emotional Well-Being Can Lead to a More Balanced Life, Greater Fulfillment, and Long-Term Success in Both Personal and Professional Realms",
  link: "#"
};


// const bgStyle = {
//   backgroundImage: `url(${Bgimage})`,
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   backgroundAttachment: "fixed",
// };
const App = () => {
  return (
    <div className='overflow-hidden'>
      <div>
        <Navbar />
        <Hero />
        <Equipment />
        <Banner {...BannerData}/>
        <Tabs />
        <Banner {...Banner2Data}/>
        <Testimonials />
        <Banner2 />
        <Footer />
      </div> 
    </div>
  );
};

export default App
