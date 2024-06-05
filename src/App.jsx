import React, { Component } from 'react'
import ListForm from './components/ListForm';
import List from './components/List';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          name: "Jayapura",
          edit: false,
        },
        {
          id: 2,
          name: "Nabire",
          edit: false,
        },
        {
          id: 3,
          name: "Biak",
          edit: false,
        },
      ]
    };
  }

  addItem = (itemName) => {
    if (itemName === '') {
      return '';
    }

    const newItem = {
      id: this.state.list.length + 1,
      name: itemName,
      edit: false
    };

    const pushItem = this.state.list.concat(newItem);
    this.setState({ list: pushItem });
  }

  deleteItem = (itemId) => {
    const deleteItem = this.state.list.filter((item) => {
      return item.id !== itemId;
    });

    this.setState({ list: deleteItem });
  }

  render() {
    return (
      <div className="app">
        <ListForm addItem={this.addItem} />

        <h1>List of Capital Cities</h1>
        <List 
          list={this.state.list} 
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
