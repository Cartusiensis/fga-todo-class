import React, { Component } from "react";

class ListForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };
    }

    handleChangeName = (event) => {
        this.setState({ name: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.addItem(this.state.name);
        this.setState({ name: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => {this.handleSubmit(event)}}>
                    <section>
                        <div className="input-wrapper">
                            <input 
                                type="text" 
                                value={this.state.name}
                                name="name"
                                className="input"
                                onChange={this.handleChangeName}
                            />
                        </div>
                        <button className="add">Add City</button>
                    </section>
                </form>
            </div>
        )
    }
}

export default ListForm;