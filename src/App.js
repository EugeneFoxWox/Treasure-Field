import Dice from './components/dice/Dice';
import './App.css';
import { getRandomNumber } from './helpers/getRandomNumber';
import { useState } from 'react';
import { titles } from './constants/titles';
import Square  from './components/square/Square';
import './styles/variables.css';
import './components/square/Square.css';

function App() {
  const [buttonTitle, setButtonTitle] = useState("СТАРТУЙ!");

  const [cubeOne, setCubeOne] = useState(7);
  const [cubeTwo, setCubeTwo] = useState(8);


  const handleClickButton = function(){
    const randomFaceCubeOne = getRandomNumber(1, 6);
    const randomFaceCubeTwo = getRandomNumber(1, 7);

    const randomTitle = getRandomNumber(0, titles.length - 1);

    setCubeOne(randomFaceCubeOne);
    setCubeTwo(randomFaceCubeTwo);

    setButtonTitle(titles[randomTitle]);

  }

  


  return (
    <div className="App">
      <header className="header">
        <h1>ПОЛЕ СОКРОВИЩ</h1>
      </header>
      <div className='table'>
        <Square/>
        <Square/>
        <Square/>
        <Square />
        <div className='row-square top-row'>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
        </div>
        <div className='row-square bot-row'>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
        </div>
        <div className='column-square l-column'>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
        </div>
        <div className='column-square r-column'>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
        </div>

        <div className='center-field'>
          <div className='cubes'>
            <Dice className='cubeOne dice-in-field' faceNumber={cubeOne}></Dice>
            <Dice className='cubeTwo dice-in-field' faceNumber={cubeTwo}></Dice>
          </div>
          <button className='roll-button' onClick={handleClickButton}>{buttonTitle}</button>
        </div>
        
        
      </div>
      <div className='score'>
        На вашем счету: ... женямов
      </div>
    </div>
  );
}

export default App;
