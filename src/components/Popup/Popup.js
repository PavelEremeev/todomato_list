import React from 'react'

import './Popup.css'

export default function Popup({ isOpen, popupToggleHandler }) {



    return (
        <>
            {isOpen ? <section className='popup'>
                <div className='popup__wrapper'>
                    <h3 className='popup__title'> title</h3>
                    <button onClick={popupToggleHandler} className='popup__close-button'>x</button>
                    <input className='popup__input'></input>
                    <input className='popup__input'></input>
                    <input className='popup__input'></input>
                    <button className='popup__apply-button'>применить</button>
                </div>
            </section> : ''}
        </>
    )
}
