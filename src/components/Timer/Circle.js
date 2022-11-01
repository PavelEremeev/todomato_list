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

                    </div>
                </div>
            </div>
        </section >
    )
}
