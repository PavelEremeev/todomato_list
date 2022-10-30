import React from 'react'

import './Presets.css'

export default function Presets({ presetsName }) {
    return (
        <section className='presets'>
            <div className='presets__wrapper'>
                {presetsName.map((tag, index) =>
                    <button className='preset__name' key={index}>{tag}</button>)}
            </div>
        </section>
    )
}
