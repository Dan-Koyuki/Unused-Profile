import React from 'react';
import { IntroDesc, IntroImage, StyledIntro } from '../../styles/Intro';

const Intro = () => {
  return (
    <StyledIntro>
    <IntroDesc>
      <h3>Hello there, I'm</h3>
      <h1>Dan Koyuki</h1>
      <span>Aspiring Web Developer</span>
      <h3 className='quote'>"願いが続ける限り、希望を叶う"</h3>
      <span>(As long as you keep wishing, your wishes will come true)</span>
    </IntroDesc>
    <IntroImage>
      {/* Image here */}
      <img src='https://karachitesting.com/images/team/people-3.jpg'/>
    </IntroImage>
    </StyledIntro>
  );
}
 
export default Intro;