import React, { Component } from "react";

export default class JSONList extends Component {
    myDataChild = (item) => {
        return (
            <option key={item.zip}>
                {item.city} - {item.zip}
            </option>
        );
    };

    render() {
        const myList = [
            { city: "Dhaka", zip: 1000 },
            { city: "Rangpur", zip: 5000 },
            { city: "Rajshahi", zip: 4000 },
            { city: "Khulna", zip: 2000 },
            { city: "Barisal", zip: 7000 },
        ];

        const listItem = myList.map(this.myDataChild);

        return (
            <div>
                <select>{listItem}</select>
            </div>
        );
    }
}
