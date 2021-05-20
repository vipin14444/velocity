import React from 'react'

const NestedListContainer = () => {

    const list = [
        {
            "icon": "fas fa-plane",
            "PageName": "Master",
            "expanded": false,
            "child": [
                {
                    "icon": "fas fa-plane",
                    "PageName": "Cost Engine",
                    "child": [
                        {
                            "icon": "fas fa-plane",
                            "PageName": "Cost Engine",
                            "child": []
                        },
                        {
                            "icon": "fas fa-plane",
                            "PageName": "Capacity Forecast",
                            "child": []
                        }
                    ]
                },
                {
                    "icon": "fas fa-plane",
                    "PageName": "Capacity Forecast",
                    "child": [
                        {
                            "icon": "fas fa-plane",
                            "PageName": "Cost Engine",
                            "child": []
                        },
                        {
                            "icon": "fas fa-plane",
                            "PageName": "Capacity Forecast",
                            "child": [
                                {
                                    "icon": "fas fa-plane",
                                    "PageName": "Cost Engine",
                                    "child": [
                                        {
                                            "icon": "fas fa-plane",
                                            "PageName": "Cost Engine",
                                            "child": []
                                        },
                                        {
                                            "icon": "fas fa-plane",
                                            "PageName": "Capacity Forecast",
                                            "child": []
                                        }
                                    ]
                                },
                                {
                                    "icon": "fas fa-plane",
                                    "PageName": "Capacity Forecast",
                                    "child": []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "icon": "fas fa-plane",
            "PageName": "Demand Forecast",
            "child": []
        },
        {
            "icon": "fas fa-plane",
            "PageName": "Network Optimizer",
            "child": []
        },
        {
            "icon": "fas fa-plane",
            "PageName": "Reports",
            "child": []
        },
        {
            "icon": "fas fa-plane",
            "PageName": "Target Planning System",
            "child": []
        }
    ]


    return (
        <div>
            Here is the list

            <NestedList list={list} />
        </div>
    )
}


const NestedList = ({ list }) => {
    return (
        <ul>
            {
                list.map((item, idx) => {

                    // Item is a parent (have children)
                    if (item?.child?.length) {
                        return <ListElementWithChild item={item} />
                    }

                    return <ListElementWithoutChild item={item} />

                })
            }
        </ul>
    )
}

const ListElementWithChild = ({ item }) => {
    return (
        <li>
            {item.PageName || ''}
            <NestedList list={item.child} />
        </li>
    )
}

const ListElementWithoutChild = ({ item }) => {
    return (
        <li>{item.PageName || ''}</li>
    )
}


export default NestedListContainer
