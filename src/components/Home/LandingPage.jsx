import React, { useState } from 'react';
import { AccessKey, LandPageContainer } from '../../styles/LandingStyle';
import { useNavigate } from 'react-router-dom'
import useSound from 'use-sound'
import Authorize from '../Utils/Authorize.mp3'
// import Bujin from '../Utils/Bujin.mp3'

const LandingPage = () => {

  const navigate = useNavigate();
  const [isVolume, setIsVolume] = useState(0.8);
  const [isSound, setIsSound] = useState(true);
  const [sound] = useSound(Authorize, {volume: isVolume})

  const handleAccess = () => {
    if (isSound){
      sound()
      setTimeout(() => {
        navigate('home');
      }, 2000);
    } else {
      navigate('home');
    }
  }

  const handleSound = () => {
    if (isSound){
      setIsSound(false);
      setIsVolume(0);
    } else {
      setIsSound(true);
      setIsVolume(0.8);
    }
  }

  return (
    <LandPageContainer>
      <AccessKey src='https://res.cloudinary.com/dankoyuki/image/upload/v1706689636/Custom%20Card/nzeeyvcglufwb6l1vhe2.png' onClick={handleAccess}/>
      <button onClick={handleAccess}>Access</button>
      {isSound ?
        <button onClick={handleSound}>TurnOff</button> :
        <button onClick={handleSound}>TurnOn</button>
      }
    </LandPageContainer>
  );
}
 
export default LandingPage;