import React from 'react';
import { HomeStyled } from '../../styles/Home';
import Navbar from '../Nav/TopNavbar';
import Intro from '../Elements/Intro';
import About from '../Elements/About';
import BottomNavbar from '../Nav/BottomNavbar';
import Skill from '../Elements/Skill';
import Project from '../Elements/Project';

const Home = () => {
  return (
    <HomeStyled>
      {/*
        NavBar 
        // Link To Each Section
      */}
      <Navbar />
      {/* Description */}
      <section id='intro-section'> 
        <Intro/>
      </section>
      {/* About */}
      <section id='about-section'>
        <About />
      </section>
      {/* Skill */}
      <section id='skill-section'>
        <Skill />
      </section>
      {/* Portofolio */}
      <section id='project-section'>
        <Project />
      </section>
      {/*
        resume will go to another page, where people can see formal cv
      */}
      {/* 
        Bottom Navbar
        // Contact
       */}
       <BottomNavbar />
    </HomeStyled>
  );
}
 
export default Home;