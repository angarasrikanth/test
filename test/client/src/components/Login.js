import React, { Component } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        if (userData.email === "test" && userData.password === "test") {
            this.props.history.push("/dashboard");
        } else {
            this.setState({
                error: "Please provide a valid username or password"
            })
        }
    };
    render() {
        const { errors } = this.state;
        return (

            < div class="wrapper fadeInDown" >
                {this.state.error && <div className="alert alert-warning" role="alert">{this.state.error}</div>}

                <div id="formContent">

                    <div class="fadeIn first">
                        <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
                    </div>

                    <form >
                        <input type="text"
                            className=""
                            placeholder="Email Address"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            error={errors.email} />
                        <input type="password"
                            className=""
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                            error={errors.password} />
                        <input type="submit" class="fadeIn fourth" value="Log In" onClick={this.onSubmit} />
                    </form>


                </div>
            </div >
        );
    }
}

export default (Login);
