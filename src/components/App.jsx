import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StartScreen from './StartScreen';
import ActiveGame from './ActiveGame';
import GameOverScreen from './GameOverScreen';
import ChooseCharacter from './ChooseCharacter';
import defaultStance from '../assets/images/jump1.png';
import lilaDefault from '../assets/images/lilaDefault.png';
import rohonDefault from '../assets/images/rohonDefault.png';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeCharacter: 'fail',
      characterList: {
        'bearsum' : {
          food: 1000,
          sleep: 1000,
          play: 1000,
          picture: defaultStance
        },
        'lila' : {
          food: 1000,
          sleep: 1000,
          play: 1000,
          picture: lilaDefault
        },
        'rohon' : {
          food: 1000,
          sleep: 1000,
          play: 1000,
          picture: rohonDefault
        }
      }

    };
    this.handleAddFood = this.handleAddFood.bind(this);
    this.handleAddSleep = this.handleAddSleep.bind(this);
    this.handleAddPlay = this.handleAddPlay.bind(this);
    this.handleTimer = this.handleTimer.bind(this);
    this.handleClearTimer = this.handleClearTimer.bind(this);
    this.handleDecreaseStat = this.handleDecreaseStat.bind(this);
    this.handleSetCharacter = this.handleSetCharacter.bind(this);

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

  // selectCharacter() {
  //
  // }

  handleDecreaseStat() {
    let newCharacterList =  JSON.parse(JSON.stringify(this.state.characterList));
    newCharacterList[this.state.activeCharacter].food --;
    newCharacterList[this.state.activeCharacter].sleep --;
    newCharacterList[this.state.activeCharacter].play --;
    this.setState({
      characterList: newCharacterList
    });
  }


  handleAddFood() {
    let newCharacterList =  JSON.parse(JSON.stringify(this.state.characterList));
    newCharacterList[this.state.activeCharacter].food = newCharacterList[this.state.activeCharacter].food +5;
    this.setState({
      characterList: newCharacterList
    });
  }

  handleAddSleep() {
    let newCharacterList =  JSON.parse(JSON.stringify(this.state.characterList));
    newCharacterList[this.state.activeCharacter].sleep = newCharacterList[this.state.activeCharacter].sleep +5;
    this.setState({
      characterList: newCharacterList
    });
  }

  handleAddPlay() {
    let newCharacterList =  JSON.parse(JSON.stringify(this.state.characterList));
    newCharacterList[this.state.activeCharacter].play = newCharacterList[this.state.activeCharacter].play +5;
    this.setState({
      characterList: newCharacterList
    });
  }

  handleSetCharacter(name) {
    console.log(this.state.activeCharacter);
    let newActiveCharacter = name;
    this.setState({
      activeCharacter: newActiveCharacter
    });
  }


  render() {
    return (
    <div className='mainContainer'>
      <style jsx>{`
          .mainContainer {
            background-image: url('https://images-na.ssl-images-amazon.com/images/I/61htZVHNomL._SL1200_.jpg');
            max-width: 916px;
            width: 100vw;
            height: 98vh;
            max-height: 1200px;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }
          .screenContainer {
            width: 50vw;
            height: 50vh;
            max-width: 480px;
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
      </div>
    );
  }
}

export default App;
