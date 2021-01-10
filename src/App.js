import React, { Component } from 'react';
import './App.css';
import {SearchBox} from './components/searchField/searchField.component'
import {CardList} from './components/cardList/cardList.component'

class App extends Component {
  constructor() {
    super();
    this.state = {
      listofMovies: [],

      searchField: "",
    };
     this.handleChange = this.handleChange.bind(this);
  }

 async componentDidMount(){
    await this.searchForMovies()
  }

    searchForMovies(searchField) {
      fetch(
        `http://www.omdbapi.com/?s=${searchField}&apikey=6a3b9a04`
      )
        .then((resp) => resp.json())
        .then((body) => this.setState({ listofMovies: body })); 
  }

  componentWillMount(){
      
  }


  handleChange(e) {
     const { value } = e.target;
    // this.setState({ searchField: this.searchForMovies(value) });
    this.setState({ searchField: value });
    console.log(value)
  }

  
  render() {
    const { searchField, listofMovies } = this.state;

    console.log(listofMovies)
    return (
      <div className="App">
        <div>
          <form onSubmit={() => this.searchForMovies(searchField)}>
            <SearchBox
              value={searchField}
              placeholder="search for movies"
              handleChange={this.handleChange}
            />
          </form>
        </div>
        <div>
          <CardList />
        </div>
      </div>
    );
  }
}

export default App;
