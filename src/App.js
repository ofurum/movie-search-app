import React, { Component } from 'react';
import './App.css';
import {SearchField} from './components/searchField/searchField.component'
import {CardList} from './components/cardList/cardList.component'

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
    };
  }

  handleChange(e){
    const {value} = e.target
    // this.setState({ searchField : value });
    console.log(value);
  }

  componentDidMount() {
    fetch(" http://www.omdbapi.com/?i=tt3896198&apikey=6a3b9a04")
    .then((resp) =>resp.json())
    .then((boby) => (this.setState({ searchField : boby})));
  }
  render() {
    return (
      <div className="App">
        <div>
          <SearchField 
          value = {this.searchField}
          placeholder = "search for movies"
          handleChange={this.handleChange}
          />
        </div>
        <div>
          <CardList />
        </div>
      </div>
    );
  }
}

export default App;
