import React from 'react';
import Hero from '../components/Hero';
import NewsLetter from '../components/NewsLetter';
import Testimonial from '../components/testimonial';
import FeaturedDestination from '../components/FeaturedDestination';
import ExclusiveOffer from '../components/ExclusiveOffer';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDestination />
      <ExclusiveOffer />
      <Testimonial />
      <NewsLetter />
     
    </>
  );
};

export default Home;
