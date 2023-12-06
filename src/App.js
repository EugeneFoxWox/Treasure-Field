import Dice from './components/dice/Dice';
import './App.css';
import { getRandomNumber } from './helpers/getRandomNumber';
import { useState } from 'react'

function App() {
  const [cubeOne, setCubeOne] = useState(7);
  const [cubeTwo, setCubeTwo] = useState(8);


  const handleClickButton = function(){
    const randomFaceCubeOne = getRandomNumber(1, 6);
    const randomFaceCubeTwo = getRandomNumber(1, 7);
    setCubeOne(randomFaceCubeOne);
    setCubeTwo(randomFaceCubeTwo);

  }

  


  return (
    <div className="App">
      <header className="header">
        <h1>ПОЛЕ СОКРОВИЩ</h1>
      </header>
      <div className='table'>
        <div className="start-cube-1">
            <Dice className='cubeOne' faceNumber={cubeOne}></Dice>
        </div>
        <div className="start-cube-2">
            <Dice className='cubeTwo' faceNumber={cubeTwo}></Dice>
        </div>
        
        <button className='roll-button' onClick={handleClickButton}>СТАРТУЙ!</button>
      </div>
    </div>
  );
}

export default App;
