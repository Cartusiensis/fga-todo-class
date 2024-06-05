import React, { Component } from "react";

class Item extends Component {
    render() {
        const { item, deleteItem } = this.props

        return (
            <div className="item">
                <p>{item.name}</p>
                <div>
                    <button className="delete" onClick={() => {deleteItem(item.id)}}>delete</button>
                </div>
            </div>
        )
    }
}

export default Item