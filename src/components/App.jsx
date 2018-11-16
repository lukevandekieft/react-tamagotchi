import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StartScreen from './StartScreen';
import ActiveGame from './ActiveGame';
import GameOverScreen from './GameOverScreen';
import ChooseCharacter from './ChooseCharacter';
import backgroundImage from '../assets/images/tamagotchi-cover.png';
import bearsumDefault from '../assets/images/bearsumDefault.png';
import lilaDefault from '../assets/images/lilaDefault.png';
import rohonDefault from '../assets/images/rohonDefault.png';
import bearsumDead from '../assets/images/bearsumDead.png';
import lilaDead from '../assets/images/lilaDead.png';
import rohonDead from '../assets/images/rohonDead.png';

const characterList = {
  'bearsum' : {
    food: 10,
    sleep: 20,
    play: 25,
    picture: bearsumDefault,
    deadPicture: bearsumDead
  },
  'lila' : {
    food: 5,
    sleep: 10,
    play: 15,
    picture: lilaDefault,
    deadPicture: lilaDead
  },
  'rohon' : {
    food: 100,
    sleep: 20,
    play: 5,
    picture: rohonDefault,
    deadPicture: rohonDead
  }
};
const startStats = characterList;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCharacter: 'bearsum',
      characterList,
      startStats,
      history: []
    };
    this.handleAddStat = this.handleAddStat.bind(this);
    this.handleDecreaseStat = this.handleDecreaseStat.bind(this);
    this.handleTimer = this.handleTimer.bind(this);
    this.handleClearTimer = this.handleClearTimer.bind(this);
    this.handleSetCharacter = this.handleSetCharacter.bind(this);
    this.handleResetGame = this.handleResetGame.bind(this);
  }
  
  handleTimer() {
    this.timer = setInterval(() => {
      this.handleDecreaseStat();
    },
    1000
    );
  }

  handleClearTimer() {
    clearInterval(this.timer);
  }
  
  handleAddStat(stat) {
    let newCharacterList =  JSON.parse(JSON.stringify(this.state.characterList));
    newCharacterList[this.state.activeCharacter][stat] = newCharacterList[this.state.activeCharacter][stat] +5;
    this.setState({
      characterList: newCharacterList
    });
  }

  handleDecreaseStat() {
    let newCharacterList =  JSON.parse(JSON.stringify(this.state.characterList));
    newCharacterList[this.state.activeCharacter].food --;
    newCharacterList[this.state.activeCharacter].sleep --;
    newCharacterList[this.state.activeCharacter].play --;
    this.setState({
      characterList: newCharacterList
    });
  }

  handleResetGame() {
    let starterCharacterList =  JSON.parse(JSON.stringify(this.state.startStats));
    this.setState({
      characterList: starterCharacterList
    });
  }

  handleSetCharacter(name) {
    let newActiveCharacter = name;
    this.setState({
      activeCharacter: newActiveCharacter
    });
  }

  render() {
    return (
      <div className='mainContainer'>
        <style jsx global>{`
          .headerStyles {
            text-align: center;
          }
        `}</style>
        <style jsx>{`
          .mainContainer {
            background-image: url(${backgroundImage});
            max-width: 700px;
            width: 100vw;
            height: 100vh;
            max-height: 1200px;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }
          .screenContainer {
            width: 50vw;
            height: 50vh;
            max-width: 400px;
            max-height: 440px;
            top: 25%;
          }
          .placeholder {
            height: 25vh;
          }
        `}</style>
        <div className="placeholder">
        </div>
        <div className='screenContainer'>
          <Switch>
            <Route exact path='/' component={StartScreen}/>
            <Route path='/choosecharacter' render={()=>(<ChooseCharacter
              onSetCharacter={this.handleSetCharacter}
              lilaPicture={this.state.characterList['lila'].picture}
              bearsumPicture={this.state.characterList['bearsum'].picture}
              rohonPicture={this.state.characterList['rohon'].picture}
            />)}/>
            <Route path='/activegame' render={()=> (<ActiveGame
              food={this.state.characterList[this.state.activeCharacter].food}
              sleep={this.state.characterList[this.state.activeCharacter].sleep}
              play={this.state.characterList[this.state.activeCharacter].play}
              picture={this.state.characterList[this.state.activeCharacter].picture}
              activeCharacter={this.state.activeCharacter}
              onAddStat={this.handleAddStat}
              onTimer={this.handleTimer}
              onClearTimer={this.handleClearTimer}
              onDecreaseStat={this.handleDecreaseStat}
            />)} />
            <Route path='/gameover' render={()=>(<GameOverScreen
              deadPicture={this.state.characterList[this.state.activeCharacter].deadPicture}
              onResetGame={this.handleResetGame}
            />)}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;