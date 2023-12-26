import Dice from './components/dice/Dice';
import './App.css';
import { getRandomNumber } from './helpers/getRandomNumber';
import { useState } from 'react';
import { titles } from './constants/titles';
import Square  from './components/square/Square';
import './styles/variables.css';
import Profil from './components/profil/Profil';
import Modal from './components/modal/Modal';
import pawYe from './img/pins/paw03.png';
import pawNo from './img/pins/paw02.png';
import pawQ from './img/pins/paw01.png';

function App() {
  const [buttonTitle, setButtonTitle] = useState("СТАРТУЙ!");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cubeOne, setCubeOne] = useState(7);
  const [cubeTwo, setCubeTwo] = useState(8);
  const [isActive, setAnimate] = useState(false);
  const [chip, setChip] = useState(false);
  const [move, setMove] = useState(0);
  const [wallet, setWallet] = useState(0);


  const backSq = Square[0];
  backSq.chip = setChip(true);
  
  const nextSq = Square;

  const closeModal = () => {
    setModalIsOpen(false);
    setAnimate(!isActive);
  };
  
//Нажатие кнопки
  const handleClickButton = async function(){
    
    const randomFaceCubeOne = getRandomNumber(1, 6);
    const randomFaceCubeTwo = getRandomNumber(1, 7);

    const randomTitle = getRandomNumber(0, titles.length - 1);

    setCubeOne(randomFaceCubeOne);
    setCubeTwo(randomFaceCubeTwo);
    setAnimate(!isActive);
    setButtonTitle(titles[randomTitle]);
    backSq.chip = setChip(false);
    nextSq = Square.index[backSq.index[move] + randomFaceCubeOne + randomFaceCubeTwo];
    //setWallet(Square[0].val);
    

  //Бросок фишка
   /* backSq.chip = setChip(false);
    nextSq.index = backSq.index + randomFaceCubeOne + randomFaceCubeTwo;
    nextSq.chip = setChip(true);

    console.log(backSq.index);
    console.log(nextSq.index);*/
  
  


    //Ожидание 1,5сек
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
        <div className='score'>Заработай женямы</div>
        
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
          <li>Денис не бросает</li>
          <li>Бросайте кубик</li>
          <li>Бросайте кубик</li>
          <li>Бросайте кубик</li>
          <li>Бросайте кубик</li>
        </div>
        <div className='table'>
          <Square poz={"top"} val="100" color={"white"} chip={chip} pin={pawYe} index={0}/>
          <Square poz={"top"} val="10" color={"red"} chip={setChip} pin={pawNo} index={7}/>
          <Square poz={"bot"} val="0" color={"yellow"}  chip={setChip} pin={pawQ} index={21}/>
          <Square poz={"bot"} val="0" color={"yellow"} chip={setChip} pin={pawYe} index={14}/>
          <div className='row-square top-row'>
            <Square poz={"top"} val="100" color={"yellow"} chip={setChip} pin={pawNo} index={1}/>
            <Square poz={"top"} val="200" color={"green"} chip={setChip} pin={pawYe} index={2}/>
            <Square poz={"top"} val="-50" color={"red"} chip={setChip} pin={pawNo} index={3}/>
            <Square poz={"top"} val="50" color={"blue"} chip={setChip} pin={pawNo} index={4}/>
            <Square poz={"top"} val="-100" color={"red"} chip={setChip} pin={pawNo} index={5}/>
            <Square poz={"top"} val="50" color={"blue"} chip={setChip} pin={pawNo} index={6}/>
          </div>
          <div className='column-square r-column'>
            <Square poz={"right"} val="200" color={"green"} chip={setChip} pin={pawNo} index={8}/>
            <Square poz={"right"} val="600" color={"white"} chip={setChip} pin={pawNo} index={9}/>
            <Square poz={"right"} val="500" color={"yellow"} chip={setChip} pin={pawNo} index={10}/>
            <Square poz={"right"} val="100" color={"blue"} chip={setChip} pin={pawNo} index={11}/>
            <Square poz={"right"} val="-200" color={"red"} chip={setChip} pin={pawNo} index={12}/>
            <Square poz={"right"} val="100" color={"green"} chip={setChip} pin={pawNo} index={13}/>
          </div>
          <div className='row-square bot-row'>
            <Square poz={"bot"} val="100" color={"blue"} chip={setChip} pin={pawNo} index={15}/>
            <Square poz={"bot"} val="600" color={"white"} chip={setChip} pin={pawNo} index={16}/>
            <Square poz={"bot"} val="300" color={"green"} chip={setChip} pin={pawNo} index={17}/>
            <Square poz={"bot"} val="200" color={"green"} chip={setChip} pin={pawYe} index={18}/>
            <Square poz={"bot"} val="-100" color={"red"} chip={setChip} pin={pawNo} index={19}/>
            <Square poz={"bot"} val="100" color={"green"} chip={setChip} pin={pawQ} index={20}/>
          </div>
          <div className='column-square l-column'>
            <Square poz={"left"} val="100" color={"blue"} chip={setChip} pin={pawNo} index={22}/>
            <Square poz={"left"} val="100" color={"green"} chip={setChip} pin={pawNo} index={23}/>
            <Square poz={"left"} val="-100" color={"red"} chip={setChip} pin={pawNo} index={24}/>
            <Square poz={"left"} val="200" color={"blue"} chip={setChip} pin={pawNo} index={25}/>
            <Square poz={"left"} val="-50" color={"red"} chip={setChip} pin={pawNo} index={26}/>
            <Square poz={"left"} val="300" color={"green"} chip={setChip} pin={pawNo} index={27}/>
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
            <Profil wallet={wallet}></Profil>
        </div>
      </div>
      
    </div>
  );
}

export default App;
