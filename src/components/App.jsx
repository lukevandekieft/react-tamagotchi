import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StartScreen from './StartScreen';
import ActiveGame from './ActiveGame';
import GameOverScreen from './GameOverScreen';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={StartScreen}/>
          <Route path='/activegame' component={ActiveGame}/>
          <Route path='/gameover' component={GameOverScreen}/>
        </Switch>
      </div>

    );
  }
}

export default App;
