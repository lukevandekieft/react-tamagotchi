import React from 'react';
import StatusBar from './StatusBar';
import Avatar from './Avatar';
import { Redirect } from 'react-router-dom';
import ControlPanel from './ControlPanel';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RouteButton from './RouteButton';

class ActiveGame extends React.Component{

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onTimer();
  }

  componentWillUnmount(){
    this.props.onClearTimer();
  }

  render () {
    if (this.props.food <= 0 || this.props.play <= 0 || this.props.sleep <= 0) {
      return <Redirect to='/gameover' />;
    }
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
        <StatusBar
          food={this.props.food}
          sleep={this.props.sleep}
          play={this.props.play}
        />
        <Avatar
          picture={this.props.picture}
        />
        <ControlPanel
          onAddFood={this.props.onAddFood}
          onAddSleep={this.props.onAddSleep}
          onAddPlay={this.props.onAddPlay}
        />
        <RouteButton 
        buttonName='Back to Character Select'
        buttonLink='/choosecharacter'
        />
      </div>
    );
  }
}

ActiveGame.propTypes = {
  food: PropTypes.number.isRequired,
  sleep: PropTypes.number.isRequired,
  play: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  onAddFood: PropTypes.func.isRequired,
  onAddSleep: PropTypes.func.isRequired,
  onAddPlay: PropTypes.func.isRequired,
  onTimer: PropTypes.func.isRequired,
  onClearTimer: PropTypes.func.isRequired
};

export default ActiveGame;
