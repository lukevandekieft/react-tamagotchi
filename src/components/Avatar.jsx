import React from 'react';
import PropTypes from 'prop-types';

function Avatar(props){
  return (
    <div>
      <style jsx>{`
          * {
            margin: 0 auto;
            position: relative;
          }
          img {
            position: relative;
            display: block;
            margin-top: 30px;
          }
      `}</style>
      <img src={props.picture}/>
    </div>

  );
}

Avatar.propTypes = {
  picture: PropTypes.string.isRequired
};

export default Avatar;
