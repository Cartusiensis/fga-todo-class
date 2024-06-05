import React, { Component } from "react";
import UpdateModal from "./UpdateModal";

class Item extends Component {
    render() {
        const { item, deleteItem, updateItem, toggleModal } = this.props;

        return (
            <div className="item">
                <p>{item.name}</p>
                <div>
                    <button className="delete" onClick={() => {deleteItem(item.id)}}>delete</button>
                    <button 
                        className="update" 
                        onClick={() => {toggleModal(item.id, true)}}
                    >update</button>
                    <UpdateModal 
                        item={item}
                        toggleModal={toggleModal}
                        updateItem={updateItem}
                    />
                </div>
            </div>
        )
    }
}

export default Item