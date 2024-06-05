import React, { Component } from "react";

class Item extends Component {
    render() {
        const { item } = this.props

        return (
            <div className="item">
                <p>{item.name}</p>
            </div>
        )
    }
}

export default Item