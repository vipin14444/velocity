import React, { Component } from 'react'
import './ResponsiveTable.scss'

export default class ResponsiveTable extends Component {

    constructor(props) {
        super(props)

        this.state = {
            columns: [],
            data: [],
        };
        this.tableHeader = []
    }


    updateDimensions = () => {
        let clientWidth = this.table.clientWidth

        let theadrefs = this.tableHeader
        let { columns } = this.state
        let oldColumns = JSON.stringify(columns);

        let totalColWidth = 0;
        theadrefs.forEach((th, idx) => {
            try {
                let thWidth = columns[idx].minWidth;
                totalColWidth = totalColWidth + thWidth;
                if (totalColWidth < clientWidth) {
                    columns[idx].render = true;
                    columns[idx].style = { display: '' };
                } else {
                    columns[idx].render = false;
                    columns[idx].style = { display: 'none' };
                }
            } catch (err) { }
        })

        if (oldColumns !== JSON.stringify(columns))
            this.setState({ columns, oldWidth: clientWidth });
    };
    componentDidMount() {
        let { columns, data } = this.props;
        this.setState({ columns, data, width: window.innerWidth, height: window.innerHeight })
        window.addEventListener('resize', this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    render() {
        const { columns, data } = this.state;
        let allRender = true;
        columns.forEach(el => {
            if (!el.render) {
                allRender = false;
                return;
            }
        })

        let hiddenColumns = columns.filter(x => x.render !== true)

        console.log({ action: 'Rendered' })
        return (
            <div ref={e => this.table = e} className='responsive-table-container'>
                <table>
                    <thead>
                        <tr>
                            {
                                columns.map((item, idx) => {
                                    return <th style={item.style} ref={e => this.tableHeader[idx] = e} key={idx}>{item.label}</th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, idx) => {
                                if (!allRender) {
                                    return ([
                                        <tr key={idx}>
                                            {
                                                columns.map((col, colIdx) => {
                                                    return <td style={col.style} key={colIdx}>{item[col.id]}</td>
                                                })
                                            }
                                        </tr>,
                                        <tr key={idx}>
                                            <td colSpan={10000}>
                                                <ul>
                                                    {
                                                        hiddenColumns.map((col, colIdx) => {
                                                            return <li key={colIdx}>{col.label} : {item[col.id]}</li>
                                                        })
                                                    }
                                                </ul>
                                            </td>
                                        </tr>
                                    ])
                                } else {
                                    return <tr key={idx}>
                                        {
                                            columns.map((col, colIdx) => {
                                                return <td style={col.style} key={colIdx}>{item[col.id]}</td>
                                            })
                                        }
                                    </tr>
                                }
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
