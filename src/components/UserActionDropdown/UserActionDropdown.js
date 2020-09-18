import React, { Component } from 'react'
import './UserActionDropdown.scss'
import { Link } from 'react-router-dom'

export default class UserActionDropdown extends Component {

    constructor() {
        super();

        this.state = {
            showMenu: false
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

    render() {
        return (
            <div style={{ marginLeft: 'auto' }}>
                <div className='user-action-dropdown-btn' onClick={this.showMenu}>
                    <i className="fas fa-user-circle"></i>
                </div>

                {
                    this.state.showMenu ? (
                        <div className="user-action-dropdown-container">
                            <Link to="#" className="user-action-dropdown-user-info">
                                <div className="user-img"><i className="fas fa-user-circle"></i></div>
                                <div className="user-info">
                                    <div className="user-name">Vipin Sharma</div>
                                    <div className='user-info-sec'>
                                        <div className="user-group">(Super-Admin)</div>
                                        <div>-</div>
                                        <div className="user-city">(GGN)</div>
                                    </div>
                                </div>
                            </Link>
                            <Link className="user-action-item" to="/permission">
                                <div className="user-action-item-icon"><i className="fas fa-key"></i></div>
                                <div className="user-action-item-label">Permission</div>
                            </Link>
                            <Link to="#" className="user-action-item">
                                <div className="user-action-item-icon"><i className="fas fa-sign-out-alt"></i></div>
                                <div className="user-action-item-label">Sign out</div>
                            </Link>
                        </div>
                    ) : (
                            null
                        )
                }
            </div>
        )
    }
}
