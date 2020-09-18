import React, { Component } from 'react'
import './ZenMenu.scss'
import './variables.scss'
import DoubleChevron from './DoubleChevron'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const menuData = [
    {
        categoryHeader: 'Custom',
        listKey: 'custom_header',
        list: [
            {
                icon: 'fas fa-bullseye',
                label: 'Applications',
                listKey: 'applications_item',
                list: [
                    {
                        label: 'Users',
                        listKey: 'users_item',
                        list: [
                            {
                                label: 'Male',
                                listKey: 'male_item',
                            },
                            {
                                label: 'Female',
                                listKey: 'female_item',
                            },
                            {
                                label: 'Others',
                                listKey: 'others_item',
                            }
                        ]
                    },
                    {
                        label: 'Contacts',
                        listKey: 'contacts_item',
                    }
                ]
            },
            {
                icon: 'fas fa-expand',
                label: 'Guns',
                listKey: 'guns_item',
                list: [
                    {
                        label: 'Assault Rifles',
                        list: [
                            {
                                label: 'AKM',
                                listKey: 'akm_item',
                            },
                            {
                                label: 'M416',
                                listKey: 'm416_item',
                            }
                        ]
                    },
                    {
                        label: 'Bolt-Action Snipers',
                        listKey: 'basnipers_item',
                        list: [
                            {
                                label: 'AWM',
                                listKey: 'awm_item',
                            },
                            {
                                label: 'Kar-98',
                                listKey: 'k98_item',
                            },
                            {
                                label: 'M24',
                                listKey: 'm24_item',
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        categoryHeader: 'Layout',
        listKey: 'layout_header',
        list: [
            {
                icon: 'fas fa-bullseye',
                label: 'Skins',
                listKey: 'skins_item'
            },
            {
                icon: 'fas fa-expand',
                label: 'Subheaders',
                listKey: 'subheaders_item',
            }
        ]
    }
]

export default class ZenMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            partialSidebar: false,
            partialSidebarActive: false
        }

        this.zenMenuToggle = this.zenMenuToggle.bind(this);
        this.mouseOverOnPartialSidebar = this.mouseOverOnPartialSidebar.bind(this);
        this.mouseLeaveOnPartialSidebar = this.mouseLeaveOnPartialSidebar.bind(this);
        this.anchorOnClick = this.anchorOnClick.bind(this);
    }

    componentDidMount() {
        this.closeAllMenu();
    }

    componentDidUpdate() {
        this.closeAllMenu();
    }

    closeAllMenu = () => {
        var innerLists = document.querySelectorAll("li .inner");
        for (var i = 0; i < innerLists.length; i++) {
            innerLists[i].classList.add("slideUp");
        }
    }

    zenMenuToggle = (e) => {
        const status = this.state.partialSidebar;
        this.setState(prevState => {
            return {
                partialSidebar: !prevState.partialSidebar
            }
        });
        if (this.state.partialSidebarActive) {
            this.setState({
                partialSidebarActive: false,
                partialSidebar: false
            })
        }
    }

    mouseOverOnPartialSidebar = (e) => {
        console.log("Welcome boi!!")
        this.setState({
            partialSidebar: false,
            partialSidebarActive: true
        });
    }

    mouseLeaveOnPartialSidebar = (e) => {
        console.log("Leaving this early?")
        this.setState({
            partialSidebar: true
        });
    }

    anchorOnClick = (e) => {
        debugger
        e.preventDefault();

        //When menu is closed
        if (e.currentTarget.nextSibling.classList.contains("show-menu")) {
            var allArrows = e.currentTarget.parentElement.parentElement.getElementsByClassName("fa-chevron-right");
            for (var i = 0; i < allArrows.length; i++) {
                allArrows[i].classList.add("rotate-0-deg");
                allArrows[i].classList.remove("rotate-90-deg");
            }

            try {
                var currentarrow = e.currentTarget.getElementsByClassName("rotate-0-deg").item(0);
                currentarrow.classList.add("rotate-0-deg");
                currentarrow.classList.remove("rotate-90-deg");
            } catch (exp) {
            }

            e.currentTarget.nextSibling.classList.remove("show-menu")
            var innerLists = e.currentTarget.parentElement.parentElement.querySelectorAll("li .inner");
            for (var i = 0; i < innerLists.length; i++) {
                innerLists[i].classList.remove("show-menu");
                innerLists[i].classList.add("slideUp");
            }
            e.currentTarget.nextSibling.classList.add("slideUp")
        }

        //When menu is opened
        else {
            // To Turn up all the arrows
            var allArrows = e.currentTarget.parentElement.parentElement.getElementsByClassName("fa-chevron-right");
            for (var i = 0; i < allArrows.length; i++) {
                allArrows[i].classList.add("rotate-0-deg");
                allArrows[i].classList.remove("rotate-90-deg");
            }

            try {
                var arrow = e.currentTarget.getElementsByClassName("rotate-0-deg").item(0);
                arrow.classList.add("rotate-90-deg");
                arrow.classList.remove("rotate-0-deg");
            } catch (exp) {
            }

            var innerLists = e.currentTarget.parentElement.parentElement.querySelectorAll("li .inner");
            for (var i = 0; i < innerLists.length; i++) {
                innerLists[i].classList.remove("show-menu");
                innerLists[i].classList.add("slideUp");
            }
            if (e.currentTarget.nextSibling.classList.contains("show-menu")) {
                e.currentTarget.nextSibling.classList.remove("show-menu")
            } else {
                e.currentTarget.nextSibling.classList.add("show-menu")
            }

            if (e.currentTarget.nextSibling.classList.contains("slideUp")) {
                e.currentTarget.nextSibling.classList.remove("slideUp")
            } else {
                e.currentTarget.nextSibling.classList.add("slideUp")
            }
        }
    }

    createChild = (item, paddingLevel, invisibleClass) => {
        const paddingValue = paddingLevel * 10;
        if (item.label) {
            return (
                <li className="zen-category-content" key={item.listKey}>
                    <a className="toggle" onClick={this.anchorOnClick} href="#">
                        <div className="zen-hoverable">
                            <div className="zen-menu-item">
                                <div style={{ width: `${paddingValue}px` }}></div>
                                <div className={`zen-menu-item-icon ${invisibleClass}`}>-</div>
                                <div className={`zen-menu-item-label ${invisibleClass}`}>{item.label}</div>
                                {item.list ? (
                                    <div className={`zen-menu-item-arrow ${invisibleClass}`}><i className="fas fa-chevron-right"></i></div>
                                ) : (
                                        <div></div>
                                    )}
                            </div>
                        </div>
                    </a>

                    {item.list ? (
                        <ul className="inner">
                            {item.list.map(child => {
                                return this.createChild(child, paddingLevel + 1, invisibleClass);
                            })}
                        </ul>
                    ) : (
                            <div></div>
                        )}
                </li>
            );
        } else {
            return null;
        }
    }

    createChildWithIcon = (item, invisibleClass) => {
        const defaultIcon = "fas fa-sitemap";
        const itemIcon = item.icon ? item.icon : defaultIcon;
        const paddingLevel = 1;
        if (item.label) {
            return (
                <li className="zen-category-content" key={item.listKey}>
                    <a className="toggle" onClick={this.anchorOnClick} href="#">
                        <div className="zen-hoverable">
                            <div className="zen-menu-item">
                                <div className="zen-menu-item-icon"><i className={itemIcon}></i></div>
                                <div className={`zen-menu-item-label ${invisibleClass}`}>{item.label}</div>
                                {item.list ? (
                                    <div className={`zen-menu-item-arrow ${invisibleClass}`}><i className="fas fa-chevron-right"></i></div>
                                ) : (
                                        <div></div>
                                    )}
                            </div>
                        </div>
                    </a>
                    {item.list ? (
                        <ul className="inner">
                            {item.list.map(child => {
                                return this.createChild(child, paddingLevel, invisibleClass);
                            })}
                        </ul>
                    ) : (
                            <div></div>
                        )}
                </li>
            );
        } else {
            return null;
        }
    }

    createCategory = (item, status, invisibleClass) => {
        if (item.categoryHeader != null) {
            return (
                <li className="zen-category" key={item.listKey}>
                    <div className="zen-category-header">{status ? <div className="zen-menu-header-icon"><i className="fas fa-ellipsis-h"></i></div> : <span>{item.categoryHeader}</span>}</div>
                    {item.list ?
                        (
                            <ul>
                                {item.list.map(child => {
                                    return this.createChildWithIcon(child, invisibleClass);
                                })}
                            </ul>
                        ) : (
                            <div></div>
                        )}
                </li>
            )
        } else {
            return null;
        }
    }

    render() {
        let status = this.state.partialSidebar;
        let containerClass = status ? 'partial-sidebar' : '';
        let hiddenClass = status ? 'hidden' : '';
        let invisibleClass = status ? 'invisible' : '';
        let rotateClass = status ? 'rotate-180' : '';
        let partialSidebarActive = this.state.partialSidebarActive;

        //Create scroll bar only in full layout
        if (status) {
            return (
                <div onMouseEnter={this.mouseOverOnPartialSidebar} onMouseLeave={this.mouseLeaveOnPartialSidebar} className={`zen-container ${containerClass}`}>
                    <div className="zen-menu-header">
                        <div className={`zen-brand ${hiddenClass}`}><span className="zen-menu-title"></span></div>
                        <div className={`zen-tools ${rotateClass}`} onClick={this.zenMenuToggle}><DoubleChevron /></div>
                    </div>

                    <div className="zen-navigation-container">
                        <ul>
                            {menuData.map(item => {
                                return this.createCategory(item, status, invisibleClass);
                            })}
                        </ul>
                    </div>
                </div>
            )
        } else {
            return (
                <div onMouseLeave={partialSidebarActive ? this.mouseLeaveOnPartialSidebar : () => { }} className={`zen-container ${containerClass}`}>
                    <SimpleBar style={{ maxHeight: `100%` }}>
                        <div className="zen-menu-header">
                            <div className={`zen-brand ${hiddenClass}`}><span className="zen-menu-title"></span></div>
                            <div className={`zen-tools ${rotateClass}`} onClick={this.zenMenuToggle}>
                                <DoubleChevron showPinIcon={partialSidebarActive} />
                            </div>
                        </div>

                        <div className="zen-navigation-container">
                            <ul>
                                {menuData.map(item => {
                                    return this.createCategory(item, status, invisibleClass);
                                })}
                            </ul>
                        </div>
                    </SimpleBar>
                </div>
            )
        }
    }
}



// export default class ZenMenu extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             partialSidebar: false
//         }
//         this.zenMenuToggle = this.zenMenuToggle.bind(this);
//     }

//     zenMenuToggle = (e) => {
//         const status = this.state.partialSidebar;
//         this.setState(prevState => {
//             return {
//                 partialSidebar: !prevState.partialSidebar
//             }
//         });
//     }

//     render() {
//         let status = this.state.partialSidebar;
//         let containerClass = status ? 'partial-sidebar' : '';
//         let hiddenClass = status ? 'hidden' : '';
//         let invisibleClass = status ? 'invisible' : '';
//         let rotateClass = status ? 'rotate-180' : '';
//         return (
//             <div className={`zen-container ${containerClass}`}>
//                 <div className="zen-menu-header">
//                     <div className={`zen-brand ${hiddenClass}`}><span className="zen-menu-title"></span></div>
//                     <div className={`zen-tools ${rotateClass}`} onClick={this.zenMenuToggle}><DoubleChevron /></div>
//                 </div>

//                 <div className="zen-navigation-container">
//                     <ul>
//                         <li className="zen-category">
//                             <div className="zen-category-header">{status ? <div className="zen-menu-header-icon"><i class="fas fa-ellipsis-h"></i></div> : <span>Custom</span>}</div>
//                             <ul>
//                                 <li className="zen-category-content">
//                                     <a href="#">
//                                         <div className="zen-hoverable">
//                                             <div className="zen-menu-item">
//                                                 <div className="zen-menu-item-icon"><i class="fas fa-bullseye"></i></div>
//                                                 <div className={`zen-menu-item-label ${invisibleClass}`}>Applications</div>
//                                                 <div className={`zen-menu-item-arrow ${invisibleClass}`}><i class="fas fa-chevron-right"></i></div>
//                                             </div>
//                                         </div>
//                                     </a>
//                                     <ul>
//                                         <li className="zen-category-content">
//                                             <a href="#">
//                                                 <div className="zen-hoverable">
//                                                     <div className="zen-menu-item">
//                                                         <div style={{ width: '10px' }}></div>
//                                                         <div className={`zen-menu-item-icon ${invisibleClass}`}>-</div>
//                                                         <div className={`zen-menu-item-label ${invisibleClass}`}>Users</div>
//                                                         <div className={`zen-menu-item-arrow ${invisibleClass}`}><i class="fas fa-chevron-right"></i></div>
//                                                     </div>
//                                                 </div>
//                                             </a>
//                                             <ul>
//                                                 <li className="zen-category-content">
//                                                     <a href="#">
//                                                         <div className="zen-hoverable">
//                                                             <div className="zen-menu-item">
//                                                                 <div style={{ width: '20px' }}></div>
//                                                                 <div className={`zen-menu-item-icon ${invisibleClass}`}>-</div>
//                                                                 <div className={`zen-menu-item-label ${invisibleClass}`}>Male</div>
//                                                                 <div className={`zen-menu-item-arrow ${invisibleClass}`}><i class="fas fa-chevron-right"></i></div>
//                                                             </div>
//                                                         </div>
//                                                     </a>
//                                                 </li>
//                                                 <li className="zen-category-content">
//                                                     <a href="#">
//                                                         <div className="zen-hoverable">
//                                                             <div className="zen-menu-item">
//                                                                 <div style={{ width: '20px' }}></div>
//                                                                 <div className={`zen-menu-item-icon ${invisibleClass}`}>-</div>
//                                                                 <div className={`zen-menu-item-label ${invisibleClass}`}>Female</div>
//                                                                 <div className={`zen-menu-item-arrow ${invisibleClass}`}><i class="fas fa-chevron-right"></i></div>
//                                                             </div>
//                                                         </div>
//                                                     </a>
//                                                 </li>
//                                             </ul>
//                                         </li>
//                                         <li className="zen-category-content">
//                                             <a href="#">
//                                                 <div className="zen-hoverable">
//                                                     <div className="zen-menu-item">
//                                                         <div style={{ width: '10px' }}></div>
//                                                         <div className={`zen-menu-item-icon ${invisibleClass}`}>-</div>
//                                                         <div className={`zen-menu-item-label ${invisibleClass}`}>Contact</div>
//                                                         <div className={`zen-menu-item-arrow ${invisibleClass}`}><i class="fas fa-chevron-right"></i></div>
//                                                     </div>
//                                                 </div>
//                                             </a>
//                                         </li>
//                                     </ul>
//                                 </li>
//                                 <li className="zen-category-content">
//                                     <a href="#">
//                                         <div className="zen-hoverable">
//                                             <div className="zen-menu-item">
//                                                 <div className="zen-menu-item-icon"><i class="fas fa-expand"></i></div>
//                                                 <div className={`zen-menu-item-label ${invisibleClass}`}>Pages</div>
//                                                 <div className={`zen-menu-item-arrow ${invisibleClass}`}><i class="fas fa-chevron-right"></i></div>
//                                             </div>
//                                         </div>
//                                     </a>
//                                 </li>
//                             </ul>
//                         </li>
//                         <li className="zen-category">
//                             <div className="zen-category-header">{status ? <div className="zen-menu-header-icon"><i class="fas fa-ellipsis-h"></i></div> : <span>Layout</span>}</div>
//                             <ul>
//                                 <li className="zen-category-content">
//                                     <a href="#"><div className="zen-hoverable">
//                                         <div className="zen-menu-item">
//                                             <div className="zen-menu-item-icon"><i class="fas fa-bullseye"></i></div>
//                                             <div className={`zen-menu-item-label ${invisibleClass}`}>Skins</div>
//                                             <div className={`zen-menu-item-arrow ${invisibleClass}`}><i class="fas fa-chevron-right"></i></div>
//                                         </div>
//                                     </div>
//                                     </a>
//                                 </li>
//                                 <li className="zen-category-content">
//                                     <a href="#">
//                                         <div className="zen-hoverable">
//                                             <div className="zen-menu-item">
//                                                 <div className="zen-menu-item-icon"><i class="fas fa-expand"></i></div>
//                                                 <div className={`zen-menu-item-label ${invisibleClass}`}>Subheaders</div>
//                                                 <div className={`zen-menu-item-arrow ${invisibleClass}`}><i class="fas fa-chevron-right"></i></div>
//                                             </div>
//                                         </div>
//                                     </a>
//                                 </li>
//                             </ul>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         )
//     }
// }
