import React, { Component } from 'react'
import './CRUD.scss'

export default class CRUD extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [
                {
                    employeeID: '1',
                    employeeName: '1'
                },
                {
                    employeeID: '1',
                    employeeName: '1'
                },
                {
                    employeeID: '1',
                    employeeName: '1'
                }
            ],
            newForm: {
                employeeID: '',
                employeeName: ''
            },
            readForm: {
                employeeID: '',
                employeeName: ''
            },
            editForm: {
                employeeID: '',
                employeeName: ''
            }
        }
    }

    onChangeNew = (e) => {
        let { newForm } = this.state
        newForm[e.target.id] = e.target.value
        this.setState({ newForm })
    }

    onChangeEdit = (e) => {
        let editForm = this.state.editForm
        editForm[(e.target.id).replace("_edit", "")] = e.target.value
        this.setState({ editForm: editForm })
    }

    saveData = (e) => {
        e.preventDefault();
        let { data, newForm } = this.state
        data.push(newForm);
        this.setState({
            data,
            newForm: {
                employeeID: '',
                employeeName: ''
            }
        }, () => { alert('Saved Successfully') })
    }

    updateData = (e, id) => {
        e.preventDefault();
        let { data, editForm } = this.state;
        let oldObj = data.find(x => x.employeeID === id);
        oldObj.employeeName = editForm.employeeName;
        this.setState({
            data,
            editForm: {
                employeeID: '',
                employeeName: ''
            }
        }, alert("Updated Successfully"))
    }

    showRead = (id) => {
        let { data, readForm } = this.state;
        readForm = data.find(x => x.employeeID === id);
        this.setState({ readForm })
    }

    showEdit = (id) => {
        debugger
        let { data, editForm } = this.state;
        editForm = JSON.parse(JSON.stringify(data.find(x => x.employeeID === id)));
        this.setState({ editForm })
        this.props.history.push('/vipin/wohoo')
    }

    delete = (id) => {
        let { data } = this.state;
        const index = data.findIndex(x => x.employeeID === id);
        data.splice(index, 1);
        this.setState({ data }, alert('Deleted Successfully'))
    }

    render() {
        const { data, newForm, readForm, editForm } = this.state;

        return (
            <div className="crud-container">
                <div className="data-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Employee ID</th>
                                <th>Employee Name</th>
                                <th>Read</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item, idx) => {
                                    return (
                                        <tr key={idx} className="body-row">
                                            <td>{item.employeeID}</td>
                                            <td>{item.employeeName}</td>
                                            <td><button onClick={(e) => { this.showRead(item.employeeID) }}>Read</button></td>
                                            <td><button onClick={(e) => { this.showEdit(item.employeeID) }}>Edit</button></td>
                                            <td><button onClick={(e) => { this.delete(item.employeeID) }}>Delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div className="operations-container">
                    <div className="new-container">
                        <h3>New Record</h3>
                        <form>
                            <div>
                                <label>Employee ID:</label>
                                <input onChange={(e) => { this.onChangeNew(e) }} id="employeeID" value={newForm.employeeID} type="text" />
                            </div>
                            <div>
                                <label>Employee Name:</label>
                                <input onChange={(e) => { this.onChangeNew(e) }} id="employeeName" value={newForm.employeeName} type="text" />
                            </div>
                            <div><button onClick={this.saveData}>Save</button></div>
                        </form>
                    </div>

                    <div className="read-container">
                        <h3>Read</h3>
                        <form>
                            <div>
                                <label>Employee ID:</label>
                                <span>{readForm.employeeID}</span>
                            </div>
                            <div>
                                <label>Employee Name:</label>
                                <span>{readForm.employeeName}</span>
                            </div>
                        </form>
                    </div>

                    <div className="edit-container">
                        <h3>Edit Record</h3>
                        <form>
                            <div>
                                <label>Employee ID:</label>
                                <input onChange={(e) => { this.onChangeEdit(e) }} id="employeeID_edit" value={editForm.employeeID} type="text" />
                            </div>
                            <div>
                                <label>Employee Name:</label>
                                <input onChange={(e) => { this.onChangeEdit(e) }} id="employeeName_edit" value={editForm.employeeName} type="text" />
                            </div>
                            <div><button onClick={(e) => { this.updateData(e, editForm.employeeID) }}>Update</button></div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
