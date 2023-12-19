import { useState } from 'react';
import './Profil.css';
import flymoneypng from "../../img/pins/flymoneypng.png"


function Profil({wallet}){
    


    return(
        <div className='profil'>
            <div></div>
            <h1>ВАШ ПРОФИЛЬ</h1>
            <div className='notecase'>
                
                <div className='card'>
                    <div className='card-info'>
                        <div className='photo'>
                            <img src="https://avatars.githubusercontent.com/u/98107337?v=4" alt='AVA'/>
                        </div>
                        <div>
                            <div className='name'>Kostya Vimovych</div>
                            <div>{wallet} $</div>
                        </div>
                    </div>
                    <div className='card-number'>1234 1234 5678 7891</div>
                    <div className='line'></div>
                    
                </div>
            </div>
            <div className='screen'>
                <div className='notecase-pin'>
                    <img src={flymoneypng}alt=''></img>
                </div>
            </div>

                
         </div>
    )
}

export default Profil;