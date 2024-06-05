import React, { Component } from 'react'
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

  render() {
    return (
      <div className="app">
        <h1>List of Capital Cities</h1>
        <List list={this.state.list} />
        {/* {this.state.list.map((item) => {
          return <p>{item.name}</p>
        })} */}
      </div>
    )
  }
}

export default App
