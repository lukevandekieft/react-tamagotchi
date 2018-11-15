import React from 'react';
import StatusBar from './StatusBar';
import Avatar from './Avatar';
import { Redirect, Route } from 'react-router-dom';
import ControlPanel from './ControlPanel';

const status = {
  food: 10,
  sleep: 10,
  play: 10
}

class ActiveGame extends React.Component{

  constructor() {
    super();
    this.state = {
      status
    };
    this.handleAddFood = this.handleAddFood.bind(this)
    this.handleAddSleep = this.handleAddSleep.bind(this)
    this.handleAddPlay = this.handleAddPlay.bind(this)

  }

  componentDidMount() {

    this.Timer = setInterval(() => {
      this.decreaseStat();
    },
      3000
    );
  }

  componentWillUnmount(){
    clearInterval(this.Timer);

  }

  decreaseStat() {
    let newStatus =  JSON.parse(JSON.stringify(this.state.status));
    newStatus.food --;
    newStatus.sleep --;
    newStatus.play --;
    this.setState({
      status: newStatus
    })
  }


  handleAddFood() {
    let newStatus =  JSON.parse(JSON.stringify(this.state.status));
    console.log(this.state.status)
    newStatus.food = newStatus.food +5;
    this.setState({
      status: newStatus
    })
  }
  handleAddSleep() {
    let newStatus =  JSON.parse(JSON.stringify(this.state.status));
    console.log(this.state.status)
    newStatus.sleep = newStatus.sleep +5;
    this.setState({
      status: newStatus
    })
  }
  handleAddPlay() {
    let newStatus =  JSON.parse(JSON.stringify(this.state.status));
    console.log(this.state.status)
    newStatus.play = newStatus.play +5;
    this.setState({
      status: newStatus
    })
  }


  render () {
    if (this.state.status.food <= 0 || this.state.status.play <= 0 || this.state.status.sleep <= 0) {
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
        <ControlPanel
          onAddFood={this.handleAddFood}
          onAddSleep={this.handleAddSleep}
          onAddPlay={this.handleAddPlay}
          />
      </div>
    );
  }
}

export default ActiveGame;
