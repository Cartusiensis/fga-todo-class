import React, { Component } from "react";
import Item from "./Item";

class List extends Component {
    render() {
        return (
            <div className="list">
                {this.props.list.map((item) => {
                    return (
                        <Item 
                            item={item} 
                            deleteItem={this.props.deleteItem}
                        />
                    );
                })}
            </div>
        );
    }
}

export default List;