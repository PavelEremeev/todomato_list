import React, { useState, useEffect } from 'react'

import './Circle.css'

export default function Circle() {

    const [progress, setProgress] = useState(55)
    const [timer, setTimer] = useState(100);
    const [active, setActive] = useState(false);

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

    const toggleTimer = () => {
        setActive(!active)
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
                            <h2 className='circle__clock'>
                                {getTime(timer)}
                            </h2>
                            <button onClick={toggleTimer} className='circle__button'>{active ? 'ПАУЗА' : 'СТАРТ'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
