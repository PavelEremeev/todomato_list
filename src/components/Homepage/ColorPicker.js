import React from 'react'

import './ColorPicker.css'

export default function ColorPicker({ handleChangeColor, color }) {
    return (
        <div className='color-picker'>
            <input type='color' value={color} onChange={handleChangeColor} />
        </div>
    )
}
