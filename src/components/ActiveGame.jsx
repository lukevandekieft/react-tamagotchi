import React from 'react';
import StatusBar from './StatusBar';
import Avatar from './Avatar';
import { Redirect, Route } from 'react-router-dom';

const status = {
  food: 3,
  sleep: 10,
  play: 10
}

class ActiveGame extends React.Component{

  constructor() {
    super();
    this.state = {
      status
    };
  }

  componentDidMount() {

    this.foodTimer = setInterval(() => {
      // console.log(this.state.status.food);
      this.decreaseFood();
    },
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.foodTimer);

  }

  decreaseFood() {
    let newStatus =  JSON.parse(JSON.stringify(this.state.status));
    newStatus.food --;
    this.setState({
      status: newStatus
    })
    // console.log(newStatus.food);
  }



  render () {
    if (this.state.status.food <= 0) {
      return <Redirect to='/gameover' />
    }
    return (
      <div>
        <StatusBar
          food={this.state.status.food}
          sleep={this.state.status.sleep}
          play={this.state.status.play}
        />
        <Avatar/>
      </div>
    );
  }
}

export default ActiveGame;
