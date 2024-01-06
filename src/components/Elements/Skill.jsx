import React, { useState } from 'react';
import { Container, StyledSkill, StyledTab, TabButton } from '../../styles/Skill';
import { StyledTitle } from '../../styles/About';
import { Link } from 'react-router-dom';
import { framework, Language, PL, Tools } from '../Utils/Skill';

const Skill = () => { 

  const [isTab, setIsTab] = useState('PL');

  return (
    <StyledSkill>
      <StyledTitle>
        <h2>Skill</h2>
      </StyledTitle>
      <StyledTab>
        <TabButton onClick={() => setIsTab('PL')}>Programming Language</TabButton>
        <TabButton onClick={() => setIsTab('F')}>Framework</TabButton>
        <TabButton onClick={() => setIsTab('T')}>Utility</TabButton>
        <TabButton onClick={() => setIsTab('L')}>Language</TabButton>
      </StyledTab>
      <Container>
        {isTab === 'PL' ? (
          PL.map(language => (
            <img key={language.id} src={language.image} alt={language.name} />
          ))
        ) : (
          isTab === 'F' ? (
            framework.map(frame => (
              <img key={frame.id} src={frame.image} alt={frame.name} />
            ))
          ) : (
            isTab === 'T' ? (
              Tools.map(frame => (
                <img key={frame.id} src={frame.image} alt={frame.name} />
              ))
            ) : (
              isTab === 'L' ? (
                Language.map(frame => (
                  <img key={frame.id} src={frame.image} alt={frame.name} />
                ))
              ) : (
                null
              )
            )
          )
        )}
      </Container>
    </StyledSkill>
  );
}
 
export default Skill;