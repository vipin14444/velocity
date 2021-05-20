/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from 'react'
import './FunctionalComponent.scss'

const FunctionalComponent = () => {
    // Equivalant to state in class component
    const [count, setCount] = useState(() => 0)
    const [theme, setTheme] = useState(() => 'pink')

    const minus = () => {
        setCount(prevCount => prevCount - 1)
        // setTheme('crimson')
    }

    const plus = () => {
        setCount(prevCount => prevCount + 1)
        // setTheme('green')
    }

    useEffect(() => {
        if (count % 2 === 0)
            setTheme('green')
        else
            setTheme('crimson')
    }, [count])

    return (
        <div className="functional__component">
            First functional component 🔥

            <div className="counter__container">
                <button onClick={minus}>-</button>
                <span style={{ backgroundColor: theme }} className="value">{count}</span>
                <button onClick={plus}>+</button>
            </div>
        </div>
    )
}

export default FunctionalComponent