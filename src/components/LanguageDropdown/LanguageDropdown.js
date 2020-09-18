import React, { Component } from 'react';
import './LanguageDropdown.scss';
import 'react-flags-select/scss/react-flags-select.scss';
import Flag from 'react-world-flags'

const height = '9px';

export default class LanguageDropdown extends Component {

    constructor() {
        super();

        this.state = {
            showMenu: false,
            selectedValue: {
                flag: 'in',
                code: 'EN-IN'
            }
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }

    updateLanguage = (evt, flag, code) => {
        this.setState({
            selectedValue: {
                flag: flag,
                code: code
            }
        })
    }

    get() {
        return this.state.selectedValue;
    }

    render() {
        return (
            <div>
                <div className="zen-list-selected-item" onClick={this.showMenu}>
                    <div className="zen-list-selected-item-flag">
                        <Flag code={this.state.selectedValue.flag} height={height} fallback={<span>Unknown</span>} />
                    </div>
                    <div className="zen-list-selected-item-label">
                        {this.state.selectedValue.code}
                    </div>
                    <div className="zen-list-chevron">
                        {
                            this.state.showMenu ? (
                                <i class="fas fa-chevron-up"></i>
                            ) : (
                                    <i class="fas fa-chevron-down"></i>
                                )
                        }
                    </div>
                </div>

                {
                    this.state.showMenu ? (
                        <div className="zen-list-item-container">
                            <div onClick={(evt) => { this.updateLanguage(evt, 'in', 'EN-IN') }} className="zen-list-item">
                                <div className="zen-flag-icon">
                                    <Flag code="in" height={height} fallback={<span>Unknown</span>} />
                                </div>
                                <div className="zen-flag-label">
                                    EN-IN
                                </div>
                            </div>
                            <div onClick={(evt) => { this.updateLanguage(evt, 'us', 'EN-US') }} className="zen-list-item">
                                <div className="zen-flag-icon">
                                    <Flag code="us" height={height} fallback={<span>Unknown</span>} />
                                </div>
                                <div className="zen-flag-label">
                                    EN-US
                                </div>
                            </div>
                            <div onClick={(evt) => { this.updateLanguage(evt, 'gb', 'EN-GB') }} className="zen-list-item">
                                <div className="zen-flag-icon">
                                    <Flag code="gb" height={height} fallback={<span>Unknown</span>} />
                                </div>
                                <div className="zen-flag-label">
                                    EN-UK
                                </div>
                            </div>
                        </div>
                    ) : (
                            null
                        )
                }
            </div>
        );
    }
}
