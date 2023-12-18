import Dice from './components/dice/Dice';
import './App.css';
import { getRandomNumber } from './helpers/getRandomNumber';
import { useState } from 'react';
import { titles } from './constants/titles';
import Square  from './components/square/Square';
import './styles/variables.css';
import Profil from './components/profil/Profil';


import Modal from './components/modal/Modal';

function App() {
  const [buttonTitle, setButtonTitle] = useState("СТАРТУЙ!");
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  const [cubeOne, setCubeOne] = useState(7);
  const [cubeTwo, setCubeTwo] = useState(8);
  const [score, setScore ] = useState(0);

  const [isActive, setAnimate] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
    setAnimate(!isActive);
  };
  

  const handleClickButton = async function(){
    
    const randomFaceCubeOne = getRandomNumber(1, 6);
    const randomFaceCubeTwo = getRandomNumber(1, 7);

    const randomTitle = getRandomNumber(0, titles.length - 1);

    setCubeOne(randomFaceCubeOne);
    setCubeTwo(randomFaceCubeTwo);
    setAnimate(!isActive);

    setButtonTitle(titles[randomTitle]);

    setScore(score + randomFaceCubeOne + randomFaceCubeTwo);
    
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        setModalIsOpen(true); 
      }, 1500)
    });
  
    await promise;
 
  }



  return (
    <div className="App">
      <header className="header">
        <h1>ПОЛЕ СОКРОВИЩ</h1>
        <div className='score'>
           На вашем счету: {score} женямов
        </div>
        <div className='warning'>Мы не несем ответственности за то,что
         это вас могло оскорбить или наоборот -
          влюбить в женямов и тратить своё время
           на фарме женямов в нашем поле сокровищ!
        </div>
      </header>
      <Modal isOpen={modalIsOpen} closeModal={closeModal}></Modal> 
      <div className='container'> 
        <div className='rules'>
          <h2>Правила игры:</h2>
          <li>Бросайте кубик</li>
          <li>Бросайте кубик</li>
          <li>Бросайте кубик</li>
          <li>Бросайте кубик</li>
          <li>Бросайте кубик</li>
          <li>Бросайте кубик</li>
        </div>
        <div className='table'>
          <Square poz={"top"} val="СТАРТ" color={"white"}/>
          <Square poz={"top"} val="БАЙТ" color={"red"}/>
          <Square poz={"bot"} val="БОНУС" color={"yellow"}/>
          <Square poz={"bot"} val="ОТПУСК" color={"yellow"}/>
          <div className='row-square top-row'>
            <Square poz={"top"} val="100" color={"yellow"}/>
            <Square poz={"top"} val="200" color={"green"}/>
            <Square poz={"top"} val="-50" color={"red"}/>
            <Square poz={"top"} val="50" color={"blue"}/>
            <Square poz={"top"} val="-100" color={"red"}/>
            <Square poz={"top"} val="50" color={"blue"}/>
          </div>
          <div className='row-square bot-row'>
            <Square poz={"bot"} val="100" color={"blue"}/>
            <Square poz={"bot"} val="600" color={"white"}/>
            <Square poz={"bot"} val="300" color={"green"}/>
            <Square poz={"bot"} val="200" color={"green"}/>
            <Square poz={"bot"} val="-100" color={"red"}/>
            <Square poz={"bot"} val="100" color={"green"}/>
          </div>
          <div className='column-square l-column'>
            <Square poz={"left"} val="100" color={"blue"}/>
            <Square poz={"left"} val="100" color={"green"}/>
            <Square poz={"left"} val="-100" color={"red"}/>
            <Square poz={"left"} val="200" color={"blue"}/>
            <Square poz={"left"} val="-50" color={"red"}/>
            <Square poz={"left"} val="300" color={"green"}/>
          </div>
          <div className='column-square r-column'>
            <Square poz={"right"} val="200" color={"green"}/>
            <Square poz={"right"} val="600" color={"white"}/>
            <Square poz={"right"} val="500" color={"yellow"}/>
            <Square poz={"right"} val="100" color={"blue"}/>
            <Square poz={"right"} val="200-" color={"red"}/>
            <Square poz={"right"} val="100" color={"green"}/>
          </div>

          <div className='center-field'>
            <div className={isActive ? 'cubes animate' : "cubes"}>
              <Dice className='dice_in_field' faceNumber={cubeOne}></Dice>
              <Dice className='dice_in_field' faceNumber={cubeTwo}></Dice>
            </div>
            <button className='roll-button' onClick={handleClickButton}>{buttonTitle}</button>
          </div>
  
        </div>
        <div className='event-box'>
            <Profil></Profil>
        </div>
      </div>
      
    </div>
  );
}

export default App;
