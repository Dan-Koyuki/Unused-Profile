import React from 'react';
import { LandPageContainer } from '../../styles/LandingStyle';
import { useNavigate } from 'react-router-dom'
import useSound from 'use-sound'
import Authorize from '../Utils/Authorize.mp3'
// import Bujin from '../Utils/Bujin.mp3'

const LandingPage = () => {

  const navigate = useNavigate();
  const [sound] = useSound(Authorize, {volume: 0.8})

  const handleAccess = () => {
    sound()
    setTimeout(() => {
      navigate('home');
    }, 2000);
  }

  return (
    <LandPageContainer>
      <button onClick={handleAccess}>Access</button>
    </LandPageContainer>
  );
}
 
export default LandingPage;