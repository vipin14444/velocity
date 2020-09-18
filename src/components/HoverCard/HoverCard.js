import React, { Component } from 'react'
import './HoverCard.scss'

export default class HoverCard extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    scrollHandler = (idx) => {
        let listWidth = this.list.clientWidth
        let widthOfCard = 250
        let gutter = 25
        let elementPos = idx * widthOfCard + gutter

        if (idx == 1) {
            this.list.scrollTo({
                left: 0,
                behavior: 'smooth'
            })
        } else if (elementPos > listWidth) {
            this.list.scrollTo({
                left: elementPos - listWidth + 80 + widthOfCard / 2,
                behavior: 'smooth'
            })
        }
    }

    resetScroll = () => {
        this.list.scrollTo({
            left: 0,
            behavior: 'smooth'
        })
    }

    render() {

        return (
            <div className='hover__container'>

                <main ref={el => this.list = el}>

                    {
                        Array.from(Array(5)).map((item, idx) => {
                            return (
                                <article className='hover__main' onMouseOver={() => { this.scrollHandler(idx + 1) }}>
                                    <img alt='thumbnail' src={'https://i.picsum.photos/id/646/300/400.jpg?grayscale&hmac=qLPwdXQfBZOsxl7vdAs_cFNbgeONcFRnCpfjxT4fW_Y'}></img>
                                    <header>
                                        <h4>Object</h4>
                                        <h3>Number Plate Recognition</h3>
                                    </header>
                                </article>
                            )
                        })
                    }
                </main>

            </div>
        )
    }
}
