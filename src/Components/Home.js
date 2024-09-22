import React from 'react';
import CarouselWithContent from './CarouselWithContent';
// import Events from './Events';
import ContentWithCarousel from './ContentWithCarousel';
import Member from './Members';
import UCSlider from './UCSlider';
import Top from './Top';
import ImgNav from './imgnav';

const Home = () => {
  return (
    <div>
      <Top/>
      <ImgNav/>
      <CarouselWithContent />
      {/* <UCSlider/> */}
      <ContentWithCarousel />
      <Member/>
    </div>
  );
};

export default Home;