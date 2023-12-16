import { useState } from 'react';
import './Modal.css';

function Modal({isOpen, closeModal, number}){

    if(isOpen){
        return(
            <div className='modal'>
                <header className='header'>
                    <h2>Вы получили!</h2>
                </header>
                <div className='text-modal'>
                    <p>Текст модального окна</p>
                    <p>Кошкожену</p>
                </div>

                <footer className='footer'>
                    <button onClick={closeModal}>ПРИНЯТЬ</button>
                </footer>
                
            </div>
        );
    }else{
        return null;
    }

}
export default Modal;
