import React from 'react';
import PropTypes from 'prop-types';

function ControlPanel({onAddStat}){
  return (
    <div className='characterBox'>
      <style jsx>{`
        .characterBox {
          display: flex;
          justify-content: space-around;
          margin-top: 10px;
        }
        .generalButton {
          margin-top: 30px;
          padding: 5px;
          border-radius: 5px;
          box-sizing: border-box;
          font-size: 1em;
          font-family: sans-serif;
          font-weight: 900;
          color: lightcoral;
          border: 2px solid lightcoral;
          background-color: white;
        }
      `}</style>
      <button className='generalButton' onClick={()=>{onAddStat('food');}}>Feed Me!</button>
      <button className='generalButton' onClick={()=>{onAddStat('sleep');}}>Tuck me in!</button>
      <button className='generalButton' onClick={()=>{onAddStat('play');}}>I'm Lonely!</button>
    </div>

  );
}

ControlPanel.propTypes = {
  onAddStat: PropTypes.func.isRequired
};

export default ControlPanel;
