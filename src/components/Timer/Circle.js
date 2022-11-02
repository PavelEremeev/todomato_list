import React, { useState } from 'react'

import './Circle.css'

export default function Circle() {

    const [progress, setProgress] = useState(55)

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
                                5:00
                            </h2>
                            <button className='circle__button'>ПАУЗА</button>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
