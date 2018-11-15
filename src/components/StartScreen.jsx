import React from 'react';
import { Link } from 'react-router-dom';


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
          .playButton {
            position: relative;
            display: block;
            margin-top: 30px;
          }
      `}</style>
      <h1>Welcome to Tamagotchi!</h1>
      <Link to='/choosecharacter'><button className='playButton generalButton'>Play!</button></Link>
    </div>

  );
}

export default StartScreen;
