import React from 'react';
import { StyledSkill, StyledTab } from '../../styles/Skill';
import { StyledTitle } from '../../styles/About';
import { Link } from 'react-router-dom';

const Skill = () => {
  return (
    <StyledSkill>
      <StyledTitle>
        <h2>Skill</h2>
      </StyledTitle>
      <StyledTab>
        <Link>Programming Language</Link>
        <Link>Framework</Link>
        <Link>Utility</Link>
        <Link>Language</Link>
      </StyledTab>
    </StyledSkill>
  );
}
 
export default Skill;