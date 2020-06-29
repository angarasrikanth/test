import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import "../css/form.css"
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            experience: 0,
            designation: "",
            department: "",
            salary: "",
            avatar: "",
            successAlert: false,
            errors: {
                firstNameError: '',
                lastNameError: '',
                emailError: '',
            },
        }
    }
    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    validateEmail = (email) => {
        return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    }
    async validate() {
        const { firstName, lastName, email, startDate, errors } = this.state; //destructing
        let isError = firstName === undefined || firstName === "" || firstName.length < 1;
        errors.firstNameError = isError ? "First name is required" : "";
        isError = lastName === undefined || lastName === "" || lastName.length < 1;
        errors.lastNameError = isError ? "Last name is required" : "";
        isError = email === undefined || email === "" || email.length < 1;
        errors.emailError = isError ? "Email is required" : !this.validateEmail(email) ? "Invalid Email! Please provide a valid email" : ""

        this.setState({
            errors: errors
        })
        isError = Object.keys(errors).some((error) => {
            return errors[error] !== undefined && errors[error] !== "" && errors[error] !== null
        })
        let valid = !(isError);
        return valid;
    }
    submit = () => {
        this.validate().then(valid => {
            if (valid) {
                let data = {
                    name: this.state.firstName + " " + this.state.lastName,
                    email: this.state.email,
                    experience: this.state.experience,
                    designation: this.state.designation,
                    department: this.state.department,
                    salary: this.state.salary,
                    avatar: this.state.avatar,


                }
                axios.post("http://localhost:5000/api/employee", data).then(response => {
                    alert(response.data)
                    this.setState({
                        successAlert: true
                    });

                }).catch(err => {
                    //error handling
                    console.log(err)
                })

            }
        }).catch(err => {
            console.log(err)
        });

    }
    goBack = () => {
        this.props.history.push("/dashboard")
    }
    render() {
        const { successAlert, errorData } = this.state;
        return (
            <div className="form_container form_position" style={{ width: "100%" }}>

                {successAlert &&
                    <div class="alert alert-success" role="alert" id="successAlert">
                        User successfully updated!!
              </div>}
                <h2 >Form </h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="firstName" className="form_label">
                            First Name*
                    </label>
                        <input className="form-control"
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            maxLength="40"
                            value={this.state.firstName}
                            onChange={this.onChangeHandler} />
                        <span className="pull-right text-danger form_small_danger">
                            <small>{this.state.errors.firstNameError}</small>
                        </span>
                    </div>
                    <div className="form-group mg-top">
                        <label htmlFor="lastName" className="form_label">
                            Last Name*
                    </label>
                        <input className="form-control"
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            maxLength="40"
                            value={this.state.lastName}
                            onChange={this.onChangeHandler} />
                        <span className="pull-right text-danger form_small_danger">
                            <small>{this.state.errors.lastNameError}</small>
                        </span>
                    </div>
                    <div className="form-group mg-top">
                        <label htmlFor="email" className="form_label">Email address *</label>
                        <input type="email" name="email" className="form-control" placeholder="email" id="email" value={this.state.email} onChange={this.onChangeHandler} />
                        <span className="pull-right text-danger form_small_danger">
                            <small>{this.state.errors.emailError}</small>
                        </span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="experience" className="form_label">
                            Experience
                    </label>
                        <input className="form-control"
                            type="number"
                            maxLength="2"
                            placeholder="Experience"
                            name="experience"
                            value={this.state.experience}
                            onChange={this.onChangeHandler} />

                    </div>
                    <div className="form-group">
                        <label htmlFor="salary" className="form_label">
                            Salary
                    </label>
                        <input className="form-control"
                            type="number"
                            placeholder="Salary"
                            name="salary"
                            maxLength="40"
                            value={this.state.salary}
                            onChange={this.onChangeHandler} />

                    </div>
                    <div className="form-group">
                        <label htmlFor="department" className="form_label">
                            Department
                    </label>
                        <input className="form-control"
                            type="text"
                            placeholder="Department"
                            name="department"
                            maxLength="40"
                            value={this.state.department}
                            onChange={this.onChangeHandler} />

                    </div>
                    <div className="form-group">
                        <label htmlFor="designation" className="form_label">
                            Designation
                    </label>
                        <input className="form-control"
                            type="text"
                            placeholder="Designation"
                            name="designation"
                            maxLength="40"
                            value={this.state.designation}
                            onChange={this.onChangeHandler} />

                    </div>
                </form>
                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-primary" onClick={this.submit}>Submit</button>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-primary" onClick={this.goBack}>Back</button>

                    </div>
                </div>

            </div>
        )
    }
}

export default Form;