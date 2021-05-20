import React from 'react'
import { useState } from 'react'
import './ThemeSwitch.scss'

const ThemeSwitch = () => {
    const [lightTheme, setLightTheme] = useState(false)

    return (
        <div onClick={() => { setLightTheme(!lightTheme) }} className='ts__container'>
            <div className="ts__container__thumbcontainer">
                <div className={`ts__container__thumbcontainer__thumb ${lightTheme ? 'light' : 'dark'}`}></div>
            </div>
        </div>
    )
}

export default ThemeSwitch
