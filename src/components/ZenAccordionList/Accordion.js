import React, { Component } from 'react'
import './Accordion.scss';

export default class Accordion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            maxHeight: '0px'
        }
    }

    componentDidMount() {
        const { props } = this;
        const expanded = props.expanded
        this.handleHeight(expanded)
    }

    componentWillReceiveProps(props) {
        const expanded = props.expanded
        this.handleHeight(expanded)
    }

    handleHeight = (expanded) => {
        let content = this.refs['accordian__content-ref']
        this.setState({
            expanded: expanded,
            maxHeight: expanded ? `${content.scrollHeight}px` : "0px"
        })
    }

    toggleAccordion = () => {
        debugger
        const { props } = this;
        props.toggleAccordion(props.id);
    }

    render() {
        const { state, props } = this;
        let expanded = props.expanded

        let styles = {
            maxHeight: state.maxHeight,
            borderBottomWidth: expanded ? '1px' : '0px'
        }
        return (
            <div className="accordion__container">
                <div onClick={this.toggleAccordion} className="accordion__header">
                    <div className="accordion__header-icon-container"><i className={`accordion__header-icon ${props.icon}`}></i></div>
                    <div className="accordion__header-title">{props.title ? props.title : ''}</div>
                    <div className="accordion__header-action-container"><i className={`accordion__header-action fas fa-${expanded ? 'minus' : 'plus'}`}></i></div>
                </div>

                <div className="accordion__content-container" style={styles} ref={"accordian__content-ref"}>
                    <div className={`accordion__content ${expanded ? 'expanded' : ''}`}>
                        {props.children}
                    </div>
                </div>
            </div>
        )
    }
}
