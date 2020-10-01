import React, { Component } from "react";

export default class Form2 extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
        };
    }

    onChangeHandler = (event) => {
        let myName = event.target.name;
        let myValue = event.target.value;

        this.setState({ [myName]: myValue });
    };

    render() {
        return (
            <div>
                <form>
                    <h2>My First Form</h2>

                    {this.state.username !== "" ? (
                        <h3>Your Username is {this.state.username}</h3>
                    ) : (
                        ""
                    )}

                    <input
                        onChange={this.onChangeHandler}
                        type="text"
                        name="username"
                        placeholder="Enter Your Username"
                    ></input>
                    <br></br>
                    <input type="submit" value="Submit Now"></input>
                </form>
            </div>
        );
    }
}
