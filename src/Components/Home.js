import React from 'react';
import CarouselWithContent from './CarouselWithContent';
import Events from './Events';
import ContentWithCarousel from './ContentWithCarousel';
import Member from './Members';
import UCSlider from './UCSlider';

const Home = () => {
  return (
    <div>
      <CarouselWithContent />
      <UCSlider/>
      <ContentWithCarousel />
      <Member/>
      <Events />
    </div>
  );
};

export default Home;