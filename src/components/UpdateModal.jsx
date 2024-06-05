import React, { Component } from "react";

class UpdateModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.item.name,
            id: this.props.item.id,
            err: false
        };
    }

    showModal = () => {
        if (this.props.item.edit === true) {
            return {display: 'block'};
        } else {
            return {display: 'none'};
        }
    };

    handleUpdateName = (event) => {
        this.setState({ name: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.name === '') {
            this.setState({ err: true });
        } else {
            this.setState({ err: false });
            this.props.updateItem(this.state.id, this.state.name);
        }
    }

    render() {
        return (
            <div className="modal" style={this.showModal()}>
                <div className="modal-content">
                <button 
                    className="close" 
                    onClick={() => this.props.toggleModal(this.props.item.id, false)}
                >&times;</button>
                <form onSubmit={this.handleSubmit}>
                    <section>
                        <div className="input-wrapper">
                            <input 
                                type="text" 
                                value={this.state.name}
                                onChange={this.handleUpdateName}
                            />
                            {this.state.err && <p className="error">Can't be empty!!!</p>}
                        </div>
                        <button type="submit">Change</button>
                    </section>
                </form>
                </div>
            </div>
        )
    }
}

export default UpdateModal;