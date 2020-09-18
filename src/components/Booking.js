import React, { Component } from 'react'

export default class Booking extends Component {

    componentDidMount() {
        this.init(this.props)
    }

    // componentWillReceiveProps(props) {
    //     this.init(props)
    // }

    init = (props) => {
        console.log(props)
    }

    render() {
        return (
            <div>
                Booking
                <button onClick={() => { this.props.history.push('/booking', { data: 'from Booking' }) }}>Click</button>
            </div>
        )
    }
}
