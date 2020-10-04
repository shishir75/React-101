import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Conditon1 extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false,
        };
    }

    render() {
        let button = null;
        if (this.state.loggedIn === true) {
            button = <button className="btn btn-danger">Logout</button>;
        } else {
            button = <button className="btn btn-primary">Login</button>;
        }

        return (
            <div>
                <h1>This is from Condition 1</h1>
                {button}
            </div>
        );
    }
}

export default Conditon1;
