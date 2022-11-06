import React, { useEffect, useContext } from 'react'
import { StateContext } from '../StateProvider/StateProvider';

import './Circle.css'

export default function Circle({ popupToggleHandler }) {

    const { progress, setProgress, timer, setTimer, active, setActive, initialState } = useContext(StateContext)

    useEffect(() => {
        if (active && timer > 0) {
            const interval = setInterval(() => {
                setTimer((timer) => timer - 1)
            }, 1000);


            return () => {
                clearInterval(interval)
            }
        }
    }, [timer, active])

    useEffect(() => {
        setProgress(timer / (initialState / 100))
    }, [setProgress, timer])

    const toggleTimer = () => {
        setActive(!active)
    }

    const restartTimer = () => {
        setTimer(initialState)
        setActive(false)
    }

    const getTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
    }


    return (
        <section className='circle'>
            <div className='circle__wrapper'>
                <div className='circle__outer'
                    style={{
                        background: `conic-gradient(#fff ${progress}%, transparent ${progress}%)`
                    }}>
                    <div className='circle__inner'>
                        <div className='circle__clock-container'>
                            <button onClick={popupToggleHandler} className='timer__button' />
                            <h2 className='circle__clock'>
                                {getTime(timer)}
                            </h2>
                            {timer === 0 ? <button onClick={restartTimer}
                                className='circle__button'>РЕСТАРТ</button>
                                :
                                <button onClick={toggleTimer} className='circle__button'>
                                    {active ? 'ПАУЗА' : 'СТАРТ'}</button>}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
