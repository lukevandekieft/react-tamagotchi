import React from 'react';
import { Link } from 'react-router-dom';
import RouteButton from './RouteButton';

function StartScreen(){
  return (
    <div>
      <style jsx>{`
          * {
            margin: 0 auto;
            position: relative;
          }
          h1 {
            text-align: center;
            font-family: fantasy;
          }
      `}</style>
      <h1>Welcome to Tamagotchi!</h1>
      <RouteButton 
      buttonName='Play!'
      buttonLink='/choosecharacter'
      />
    </div>

  );
}

export default StartScreen;
