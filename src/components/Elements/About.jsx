import React from 'react';
import { StyledAbout, StyledIntro, StyledQuote, StyledTitle } from '../../styles/About';

const About = () => {
  return ( 
    <StyledAbout>
      <StyledTitle>
        <h2>About Me</h2>
      </StyledTitle>
      <StyledQuote>
        <h3>Initialize! Thrive!</h3>
        <h3>A Code to the Program turns to take off toward a dream!</h3>
      </StyledQuote>
      <StyledIntro>
        <p>Hello, I'm Dan Koyuki or You might known me as Irwanto Danang Bahtiar.</p>
        <p>Originally from Majalengka, currently i'm pursuing my studies in Informatics at State Islamic University of Sunan Gunung Djati Bandung.</p>
        <p>I thrive on the challenges that programming presents, constantly seeking to refine my skills and broaden my horizons.</p>
        <p>The prospect of creating innovative web and mobile solutions exhilarates me, driving my commitment to contribute meaningfully to this ever-evolving field.</p>
      </StyledIntro>
    </StyledAbout>
  );
}
 
export default About;