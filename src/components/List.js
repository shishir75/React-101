import React, { Component } from "react";

export default class List extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
        };
    }

    myDataChild = (item) => {
        return (
            <option value={item} key={item}>
                {item}
            </option>
        );
    };

    onChangeHandler = (event) => {
        let inputName = event.target.name;
        let inputValue = event.target.value;

        this.setState({ [inputName]: inputValue });
    };

    render() {
        const myList = ["Shishir", "Obydullah", "Mamun", "Kawsar"];
        const listItem = myList.map(this.myDataChild);

        return (
            <div>
                <select
                    name="name"
                    value={this.state.name}
                    onChange={this.onChangeHandler}
                >
                    <option value="" disabled>
                        Select a Name
                    </option>
                    {listItem}
                </select>
            </div>
        );
    }
}
