import React from 'react';
import RouteButton from './RouteButton';

function StartScreen(){
  return (
    <div>
      <h1 className="headerStyles">Welcome to Tamagotchi!</h1>
      <RouteButton 
        buttonName='Play!'
        buttonLink='/choosecharacter'
      />
    </div>

  );
}

export default StartScreen;
