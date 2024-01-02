import React from 'react';
import { HomeStyled } from '../../styles/Home';
import Navbar from './Navbar';

const Home = () => {
  return (
    <HomeStyled>
      {/*
        NavBar 
        // Link To Each Section
      */}
      <Navbar />
      {/* Description */}
      {/* About */}
      {/* Portofolio */}
      {/* Skill */}
      {/* 
        Bottom Navbar
        // Contact
       */}
    </HomeStyled>
  );
}
 
export default Home;