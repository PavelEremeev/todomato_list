import React, { useState } from 'react'

import './Presets.css'

export default function Presets({ presetsName }) {
    const [active, setActive] = useState(0)

    const handleClick = (index) => {
        setActive(index)
        console.log(active)
    }

    return (
        <section className='presets'>
            <div className='presets__wrapper'>
                {presetsName.map((tag, index) =>
                    <button className={active === index ? 'preset__name_active' : 'preset__name'}
                        onClick={() => handleClick(index)}
                        active={active ? index : undefined}
                        key={index}>{tag}</button>)}
            </div>
        </section>
    )
}
