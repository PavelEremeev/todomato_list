import { hasFormSubmit } from '@testing-library/user-event/dist/utils'
import React, { useContext } from 'react'
import { StateContext } from '../StateProvider/StateProvider'

import './Popup.css'

export default function Popup({ isOpen, popupToggleHandler }) {

    const { shortBreakTime,
        setShortBreakTime,
        longBreakTime,
        setLongBreakTime,
        workTime,
        setWorkTime } = useContext(StateContext)

    const handleWorkTimerChange = (evt) => {
        setWorkTime(evt.target.value * 60)
    }

    const handleShortBreakTimerChange = (evt) => {

        setShortBreakTime(evt.target.value * 60)

    }

    const handleLongBreakTimerChange = (evt) => {
        setLongBreakTime(evt.target.value * 60)
    }



    return (
        <>
            {isOpen ? <section className='popup' onClick={popupToggleHandler}>
                <div className='popup__wrapper' onClick={evt => evt.stopPropagation()}>
                    <h3 className='popup__title'>НАСТРОЙКИ ТАЙМЕРА</h3>
                    <button onClick={popupToggleHandler} className='popup__close-button' />
                    <input className='popup__input' maxLength={2} placeholder={`Работа: ${workTime / 60} мин.`} onChange={(evt) => handleWorkTimerChange(evt)}></input>
                    <input className='popup__input' maxLength={2} placeholder={`Короткий перерыв: ${shortBreakTime / 60} мин.`} onChange={(evt) => handleShortBreakTimerChange(evt)}></input>
                    <input className='popup__input' maxLength={2} placeholder={`Длинный перерыв: ${longBreakTime / 60} мин.`} onChange={(evt) => handleLongBreakTimerChange(evt)}></input>
                    {/* <button className='popup__apply-button' >Применить</button> */}
                </div>
            </section> : ''}
        </>
    )
}
