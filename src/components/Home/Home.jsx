import React from 'react';
import { HomeStyled } from '../../styles/Home';
import Navbar from './Navbar';
import Description from './Description';
import About from './About';

const Home = () => {
  return (
    <HomeStyled>
      {/*
        NavBar 
        // Link To Each Section
      */}
      <Navbar />
      {/* Description */}
      <section id='description-section'> 
        <Description/>
      </section>
      {/* About */}
      <section id='about-section'>
        <About />
      </section>
      {/* Portofolio */}
      {/* <Project /> */}
      {/* 
        Bottom Navbar
        // Contact
       */}
       {/* <BotNav /> */}
    </HomeStyled>
  );
}
 
export default Home;