import React from 'react';
import axios from 'axios';
import "../css/user.css"
class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.location.state.id ? this.props.location.state.id : 0,
            userData: {}
        }
    }
    componentDidMount = () => {
        //get the user details using the id
        axios.get('https://5eedc94b4cbc3400163312be.mockapi.io/test/Employee/' + this.state.id).then(response => {
            this.setState({
                userData: response.data
            })
        })
    }
    goBack = () => {
        this.props.history.push("/dashboard")
    }
    render() {
        const { userData } = this.state;
        return (
            <div className="container">
                <div>
                    <img src={userData.avatar} alt="User photo" height="100px" style={{ width: "100%" }} />

                    <hr />
                    <ul class="list-group">
                        <li class="list-group-item">
                            <div className="row">
                                <div className="col-3">
                                    Name :
                        </div>

                                <div className="col-3">
                                    {userData.name}
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div className="row">
                                <div className="col-3">
                                    Department :
                        </div>

                                <div className="col-3">
                                    {userData.department}
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div className="row">
                                <div className="col-3">
                                    Designation :
                        </div>

                                <div className="col-3">
                                    {userData.designation}
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div className="row">
                                <div className="col-3">
                                    Email :
                        </div>

                                <div className="col-3">
                                    {userData.email}
                                </div>
                                <div className="col-3">
                                    Salary :
                                </div>
                                <div className="col-3">
                                    {userData.salary}
                                </div>
                            </div>
                        </li>

                    </ul>
                    <button type="button" class="btn btn-primary user_submit_btn" onClick={this.goBack}>Go Back</button>

                </div>
            </div>
        )
    }
}
export default User;