import React, { useState } from 'react';
import Header from '../Header';
import Presets from './Presets';

import logo from '../../images/todomato_logo.png'
import dataDescription from '../../mock/dataDescription'

import './Timer.css'
import Circle from './Circle';
import Popup from '../Popup/Popup';

export default function Timer() {
    const presets = ['Работа', 'Короткий перерыв', 'Длинный перерыв']
    const [isOpen, setIsOpen] = useState(false)

    const popupToggleHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Header />

            <section className='timer-description'>
                <div className='timer-description__wrapper'>
                    <div className='timer__title-wrapper'>
                        <h1 className='timer__title'>Таймер-помидор</h1>
                        <img className='timer__image' src={logo} alt='tomatopicture' />
                    </div>
                    <p className='timer__description'>
                        — техника тайм-менеджмента, которая
                        предполагает увеличение эффективности вашей работы
                        при меньших временных затратах за счёт глубокой концентрации и коротких перерывов.
                    </p>
                    <p className='timer__description'>
                        Как пользоваться:
                    </p>
                    <div className='timer__card-container'>
                        {dataDescription.map((card, i) =>
                            <div className='timer-card' key={i}>
                                <div className='timer-card__wrapper'>
                                    <img className='timer-card__image' src={card.image} alt='pic' />
                                    <p className='timer-card__description'>{i + 1 + '. '}{card.description}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <Presets presetsName={presets} />
            <Circle popupToggleHandler={popupToggleHandler} />
            <Popup isOpen={isOpen} popupToggleHandler={popupToggleHandler} />
        </>
    )
}
