import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StartScreen from './StartScreen';
import ActiveGame from './ActiveGame';
import GameOverScreen from './GameOverScreen';
import ChooseCharacter from './ChooseCharacter';

const status = {
  food: 10,
  play: 10,
  sleep: 10
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeCharacter: 'bearsum',
      status
    };
    this.handleAddFood = this.handleAddFood.bind(this);
    this.handleAddSleep = this.handleAddSleep.bind(this);
    this.handleAddPlay = this.handleAddPlay.bind(this);
    this.handleTimer = this.handleTimer.bind(this);
    this.handleClearTimer = this.handleClearTimer.bind(this);
    this.handleDecreaseStat = this.handleDecreaseStat.bind(this);
  }


  handleTimer() {
    this.timer = setInterval(() => {
      this.decreaseStat();
    },
    3000
    );
  }

  handleClearTimer() {
    clearInterval(this.timer);
  }

  // selectCharacter() {
  //
  // }

  handleDecreaseStat() {
    let newStatus =  JSON.parse(JSON.stringify(this.state.status));
    newStatus.food --;
    newStatus.sleep --;
    newStatus.play --;
    this.setState({
      status: newStatus
    });
  }


  handleAddFood() {
    let newStatus =  JSON.parse(JSON.stringify(this.state.status));
    console.log(this.state.status);
    newStatus.food = newStatus.food +5;
    this.setState({
      status: newStatus
    });
  }

  handleAddSleep() {
    let newStatus =  JSON.parse(JSON.stringify(this.state.status));
    console.log(this.state.status);
    newStatus.sleep = newStatus.sleep +5;
    this.setState({
      status: newStatus
    });
  }

  handleAddPlay() {
    let newStatus =  JSON.parse(JSON.stringify(this.state.status));
    console.log(this.state.status);
    newStatus.play = newStatus.play +5;
    this.setState({
      status: newStatus
    });
  }


  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={StartScreen}/>
          <Route path='/choosecharacter' component={ChooseCharacter}/>
          <Route path='/activegame' render={(props)=> (<ActiveGame
            food={this.state.status.food}
            sleep={this.state.status.sleep}
            play={this.state.status.play}
            onAddFood={this.handleAddFood}
            onAddSleep={this.handleAddSleep}
            onAddPlay={this.handleAddPlay}
            onTimer={this.handleTimer}
            onClearTimer={this.handleClearTimer}
            onDecreaseStat={this.handleDecreaseStat}
          />)} />
          <Route path='/gameover' component={GameOverScreen}/>
        </Switch>
      </div>
    );
  }
}

export default App;
