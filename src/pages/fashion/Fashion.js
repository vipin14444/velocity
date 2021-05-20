import React from 'react'
import './Fashion.scss'
import { ReactComponent as FacebookIcon } from './assets/facebook.svg'
import { ReactComponent as InstagramIcon } from './assets/instagram.svg'
import { ReactComponent as GithubIcon } from './assets/github.svg'

const Fashion = () => {
    return (
        <div className='fashion'>

            <div className="bg-wrapper">
                <div className="background">
                    <div className="gradient gradient-orange"></div>
                    <div className="gradient gradient-white"></div>
                    <div className="layer-top"></div>
                </div>
            </div>

            <main>

                <header>
                    <div className="logo">
                        Designhunt
                    </div>

                    <nav>
                        <div className="bar bar-1"></div>
                        <div className="bar bar-2"></div>
                        <div className="bar bar-3"></div>
                    </nav>
                </header>

                <section>

                    <div className="socials">
                        <FacebookIcon />
                        <InstagramIcon />
                        <GithubIcon />
                    </div>

                    <div className="model-list">
                        <div className="model-one">
                            <div className="image-container">
                                <div className="top-left">
                                    <div className="category">
                                        <div className="name">Fashion Design</div>
                                        <div className="year">2021</div>
                                    </div>

                                    <div className="swag">
                                        <div className="line">Elegant</div>
                                        <div className="line exceptional">exceptional</div>
                                    </div>

                                    <div className="oval"></div>
                                </div>

                                <div className="clothing">
                                    <div className="title">Jackets</div>
                                    <div className="sub-title">Contoured Black Collections</div>
                                </div>

                                <div className="desc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum vitae ipsa. Doloremque temporibus, possimus explicabo culpa ab accusantium provident!
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <footer>
                    <div className="f-link collection">Collections</div>
                    <div className="f-link">Similar Projects</div>
                    <div className="f-link">Send The Application</div>
                </footer>

            </main>
        </div>
    )
}

export default Fashion
