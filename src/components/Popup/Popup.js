import React from 'react'

import './Popup.css'

export default function Popup({ isOpen, popupToggleHandler }) {


    return (
        <>
            {isOpen ? <section className='popup' onClick={popupToggleHandler}>
                <div className='popup__wrapper' onClick={evt => evt.stopPropagation()}>
                    <h3 className='popup__title'>НАСТРОЙКИ ТАЙМЕРА</h3>
                    <button onClick={popupToggleHandler} className='popup__close-button' />
                    <input className='popup__input' placeholder='' />
                    <input className='popup__input' />
                    <input className='popup__input' />
                    <button className='popup__apply-button'>Применить</button>
                </div>
            </section> : ''}
        </>
    )
}
