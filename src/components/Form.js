import React, { Component } from "react";

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
        };
    }

    onChangeHandler = (event) => {
        let newName = event.target.value;
        this.setState({ name: newName });
    };

    render() {
        return (
            <div>
                <form>
                    <h2>My First Form</h2>

                    {this.state.name !== "" ? (
                        <h3>Your Name is {this.state.name}</h3>
                    ) : (
                        ""
                    )}

                    <input
                        onChange={this.onChangeHandler}
                        type="text"
                        placeholder="Enter Your Name"
                    ></input>
                    <br></br>
                    <input type="submit" value="Submit Now"></input>
                </form>
            </div>
        );
    }
}
