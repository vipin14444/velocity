import React, { Component } from 'react'
import ThemeSwitch from './ThemeSwitch'
import './ThemeSwitchContainer.scss'

export default class ThemeSwitchContainer extends Component {
    render() {
        return (
            <div className='tsc__main'>
                <ThemeSwitch />
            </div>
        )
    }
}
