import React from 'react';
import CarouselWithContent from './CarouselWithContent';
import Events from './Events';
import ContentWithCarousel from './ContentWithCarousel';
import Member from './Members';
import UCSlider from './UCSlider';
import Top from './Top';

const Home = () => {
  return (
    <div>
      <Top/>
      <CarouselWithContent />
      <UCSlider/>
      <ContentWithCarousel />
      <Member/>
      <Events />
    </div>
  );
};

export default Home;