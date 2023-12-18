import { useState } from 'react';
import './Profil.css';


function Profil(){
    const [wallet, setWallet] = useState(0);


    return(
        <div className='profil'>
            <div></div>
            <h1>ВАШ ПРОФИЛЬ</h1>
            <div className='notecase'>
                <div>
                    
                </div>
                <div className='card'>
                    <div className='photo'>
                        <img src="https://avatars.githubusercontent.com/u/98107337?v=4" alt='AVA'/>
                    </div>
                    <div>
                        <div className='name'>Kostya Vimovych</div>
                        <div >{wallet} $</div>
                    </div>
                    
                </div>
            </div>
            

                
         </div>
    )
}

export default Profil;