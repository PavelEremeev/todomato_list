import React, { useContext } from 'react'
import { StateContext } from '../StateProvider/StateProvider'

import './Presets.css'

export default function Presets({ presetsName }) {
    const { activePreset, setActivePreset } = useContext(StateContext)

    const handleClick = (index) => {
        setActivePreset(index)
    }

    return (
        <section className='presets'>
            <div className='presets__wrapper'>
                {presetsName.map((tag, index) =>
                    <button className={activePreset === index ? 'preset__name_active' : 'preset__name'}
                        onClick={() => handleClick(index)}
                        active={activePreset ? index : undefined}
                        key={index}>{tag}</button>)}
            </div>
        </section>
    )
}
