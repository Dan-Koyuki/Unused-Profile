import React from 'react';
import { LandPageContainer } from '../styles/LandingStyle';
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

  const navigate = useNavigate();

  const handleAccess = () => {
    navigate('home')
  }

  return (
    <LandPageContainer>
      <button onClick={handleAccess}>Access</button>
    </LandPageContainer>
  );
}
 
export default LandingPage;