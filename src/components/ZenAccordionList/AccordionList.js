import React, { Component } from 'react'
import Accordion from './Accordion';

export default class AccordionList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            children: []
        }

        this.collapser = this.collapser.bind(this)
    }

    componentWillMount() {
        debugger
        const { state, props } = this;
        let newProps = {
            toggleAccordion: this.toggleAccordion,
            expanded: false,
            singleMode: props.singleMode ? props.singleMode : false
        }
        let children = [];
        React.Children.forEach(props.children, (child) => {
            if (child.type === Accordion) {
                newProps.expanded = child.props.expanded ? child.props.expanded : false
                children.push(React.cloneElement(child, newProps))
            }
        })
        this.setState({
            children: children
        })
    }

    collapser = (id) => {
        let { children } = this.state;
        let newProps = {
            collapser: this.collapser,
            singleMode: this.props.singleMode ? this.props.singleMode : false
        }
        let accordionList = []
        let childrenNew = []
        React.Children.forEach(children, (child) => {
            if (child.type === Accordion) {
                accordionList.push({
                    key: child.key,
                    expanded: id === child.key ? true : false
                })
                newProps.expanded = id === child.key ? true : false;
                childrenNew.push(React.cloneElement(child, newProps))
            }
        })

        this.setState({
            accordionList: accordionList,
            children: childrenNew
        })
    }

    toggleAccordion = (id) => {
        debugger
        const { state, props } = this;
        let newProps = {
            toggleAccordion: this.toggleAccordion,
            expanded: false,
            singleMode: props.singleMode ? props.singleMode : false
        }
        let children = [];

        if (props.singleMode) {
            React.Children.forEach(state.children, (child) => {
                if (child.type === Accordion) {
                    if (child.props.id === id) {
                        newProps.expanded = !child.props.expanded
                    } else {
                        newProps.expanded = false
                    }
                    children.push(React.cloneElement(child, newProps))
                }
            })
            this.setState({
                children: children
            })
        } else {
            React.Children.forEach(state.children, (child) => {
                if (child.type === Accordion) {
                    if (child.props.id === id) {
                        newProps.expanded = !child.props.expanded
                    } else {
                        newProps.expanded = child.props.expanded
                    }
                    children.push(React.cloneElement(child, newProps))
                }
            })
            this.setState({
                children: children
            })
        }
    }

    render() {
        const { state } = this;
        return (
            <div>
                {state.children}
            </div>
        )
    }
}
