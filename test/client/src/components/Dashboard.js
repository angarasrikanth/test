import React, { Component } from "react";
import axios from "axios";
import "../css/dashboard.css";

let selectedItem = null;
class Dashboard extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            selected: null
        }
    }
    componentDidMount = () => {
        let userUrl = "https://5eedc94b4cbc3400163312be.mockapi.io/test/Employee"
        axios.get(userUrl).then(response => {
            this.setState({
                data: response.data,
            })
        }).catch(err => {
            console.log(err.toString())
        })

    }
    onListItemClick = (id) => {
        this.props.history.push("/user", { id: id })
    }
    listItem = () => {
        const { data } = this.state;
        if (data != undefined || data !== null || data !== []) {
            //list elements of the employees
            return <ul class="list-group">
                <li class="list-group-item bold" >List of Employees</li>
                {data.map(item => {
                    if (selectedItem === null || selectedItem === undefined) {
                        return (
                            <li class="list-group-item" style={{ cursor: "pointer" }} onClick={this.onListItemClick.bind(this, item.id)}>
                                <div>
                                    {item.name}
                                </div>
                                <div className="row">
                                    <div className="col-2">
                                        {item.designation}
                                    </div>
                                    <div className="col-2">
                                        {item.department}
                                    </div>
                                </div>
                            </li>
                        )
                    } else if (selectedItem === item.department) {
                        return (
                            <li class="list-group-item" style={{ cursor: "pointer" }} onClick={this.onListItemClick.bind(this, item.id)}>
                                <div>
                                    {item.name}
                                </div>
                                <div className="row">
                                    <div className="col-2">
                                        {item.designation}
                                    </div>
                                    <div className="col-2">
                                        {item.department}
                                    </div>
                                </div>
                            </li>
                        )
                    }



                })
                }
            </ul>
        }

    }
    depOnClick = (department) => {
        //selected item on dropdown value
        selectedItem = department
        this.forceUpdate();
    }
    department = () => {
        const { data } = this.state; //destructring
        //list items for the dropdown
        return data.map(item => {
            var depCaptialCase = item.department.charAt(0).toUpperCase() + item.department.slice(1)
            return <a className="dropdown-item" style={{ cursor: "pointer" }} onClick={this.depOnClick.bind(this, item.department)}>{depCaptialCase}</a>
        })

    }
    onReset = () => {
        selectedItem = null;
        this.forceUpdate();
    }
    form = () => {
        this.props.history.push("/form")
    }
    render() {

        return (
            <div className="container">
                <div>

                </div>
                <div className="dropdown dropdown_dashboard">
                    <button className="btn btn-secondary " type="button" onClick={this.form} style={{ float: "left" }}>
                        Employee Form
                </button>
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Departments
                </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {this.department()}
                        <a class="dropdown-item" onClick={this.onReset} style={{ cursor: "pointer" }}>Clear All</a>
                    </div>

                </div>

                {this.listItem()}

            </div>
        )
    }
}
export default (Dashboard);