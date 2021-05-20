import React, { Component } from 'react'
import './ZenToast.scss'

var toastSetState = null
var toastReadState = null

export default class ZenToast extends Component {

    constructor(props) {
        super(props)

        this.state = {
            toastList: []
        }

        toastSetState = this.changeState
        toastReadState = (() => { return this.state })
    }

    changeState = (state) => {
        this.setState(state)
    }

    render() {
        const { toastList } = this.state

        return (
            <div className='zen-toast-container'>

                <div className="zen-toast-container__wrapper zen-toast-container__top-left">
                    {
                        toastList.filter(x => x.position === 'top-left').map((item, idx) => (
                            <div
                                className={`zen-toast ${item.variant}`}
                                key={idx}
                            >
                                {item.data}
                            </div>
                        ))
                    }
                </div>
                <div className="zen-toast-container__wrapper zen-toast-container__top-center">
                    {
                        toastList.filter(x => x.position === 'top-center').map((item, idx) => (
                            <div
                                className={`zen-toast ${item.variant}`}
                                key={idx}
                            >
                                {item.data}
                            </div>
                        ))
                    }
                </div>
                <div className="zen-toast-container__wrapper zen-toast-container__top-right">
                    {
                        toastList.filter(x => x.position === 'top-right').map((item, idx) => (
                            <div
                                className={`zen-toast ${item.variant}`}
                                key={idx}
                            >
                                {item.data}
                            </div>
                        ))
                    }
                </div>
                <div className="zen-toast-container__wrapper zen-toast-container__bottom-left">
                    {
                        toastList.filter(x => x.position === 'bottom-left').map((item, idx) => (
                            <div
                                className={`zen-toast ${item.variant}`}
                                key={idx}
                            >
                                {item.data}
                            </div>
                        ))
                    }
                </div>
                <div className="zen-toast-container__wrapper zen-toast-container__bottom-center">
                    {
                        toastList.filter(x => x.position === 'bottom-center').map((item, idx) => (
                            <div
                                className={`zen-toast ${item.variant}`}
                                key={idx}
                            >
                                {item.data}
                            </div>
                        ))
                    }
                </div>
                <div className="zen-toast-container__wrapper zen-toast-container__bottom-right">
                    {
                        toastList.filter(x => x.position === 'bottom-right').map((item, idx) => (
                            <div
                                className={`zen-toast ${item.variant}`}
                                key={idx}
                            >
                                {item.data}
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

const uuid = () => {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

export class toast {
    static error = (data, config) => {
        this.createToast(data, 'zt-error', config)
    }

    static info = (data, config) => {
        this.createToast(data, 'zt-info', config)
    }

    static success = (data, config) => {
        this.createToast(data, 'zt-success', config)
    }

    static warn = (data, config) => {
        this.createToast(data, 'zt-warn', config)
    }

    static createToast = (data, variant, config) => {
        let state = toastReadState()
        const id = uuid()
        state.toastList.push({
            id: id,
            data: data,
            variant: variant,
            position: config?.position || 'top-right'
        })

        toastSetState(state)

        setTimeout(() => {
            let state = toastReadState()
            state.toastList.splice(state.toastList.findIndex(x => x.id === id), 1)
            toastSetState(state)
        }, config?.duration ? config?.duration * 1000 : 3000)
    }
}