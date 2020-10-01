import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default class MultiImputForm extends Component {
    constructor() {
        super();
        this.state = {
            fname: "",
            lname: "",
            email: "",
            mobile: "",
        };
    }

    onChangeHandler = (event) => {
        let inputNames = event.target.name;
        let inputValues = event.target.value;

        this.setState({ [inputNames]: inputValues });
    };

    onSubmitHandler = () => {
        alert("Data Submited");
    };

    render() {
        return (
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-8 offset-2">
                            <form onSubmit={this.onSubmitHandler}>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        name="fname"
                                        onChange={this.onChangeHandler}
                                        className="form-control"
                                        placeholder="Enter First Name"
                                    ></input>
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input
                                        type="text"
                                        name="lname"
                                        onChange={this.onChangeHandler}
                                        className="form-control"
                                        placeholder="Enter Last Name"
                                    ></input>
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={this.onChangeHandler}
                                        className="form-control"
                                        placeholder="Enter Email Address"
                                    ></input>
                                </div>
                                <div className="form-group">
                                    <label>Mobile Number</label>
                                    <input
                                        type="number"
                                        name="mobile"
                                        onChange={this.onChangeHandler}
                                        className="form-control"
                                        placeholder="Enter Mobile Number"
                                    ></input>
                                </div>
                                <input
                                    type="submit"
                                    value="Submit"
                                    className="btn btn-success"
                                />
                            </form>

                            <h2 className="mt-4">Results</h2>
                            <h5>First Name : {this.state.fname}</h5>
                            <h5>Last Name : {this.state.lname}</h5>
                            <h5>Email Address : {this.state.email}</h5>
                            <h5>Mobile Number : {this.state.mobile}</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
