import React, { Component } from "react";

class ListForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            err: false
        };
    }

    handleChangeName = (event) => {
        this.setState({ name: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.name === '') {
            this.setState({ err: true });
        } else {
            this.setState({ err: false });
            this.props.addItem(this.state.name);
            this.setState({ name: ''});
        }
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
                            {this.state.err && <p className="error">Can't be empty!!!</p>}
                        </div>
                        <button className="add">Add City</button>
                    </section>
                </form>
            </div>
        )
    }
}

export default ListForm;