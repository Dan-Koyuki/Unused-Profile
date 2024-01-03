import React from 'react';
import { HomeStyled } from '../../styles/Home';
import Navbar from '../Nav/TopNavbar';
import Description from '../Elements/Description';
import About from '../Elements/About';
import BottomNavbar from '../Nav/BottomNavbar';

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
       <BottomNavbar />
    </HomeStyled>
  );
}
 
export default Home;