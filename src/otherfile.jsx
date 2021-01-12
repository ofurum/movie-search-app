import React, { Component } from "react";
// import _ from "lodash";
import "./App.css";
import { SearchBox } from "./components/searchField/searchField.component";
import { CardList } from "./components/cardList/cardList.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      listofMovies: [],

      searchField: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    this.searchForMovies(this.state.searchField);
  }

  searchForMovies(searchField) {
    // console.log(searchField);
    fetch(`http://www.omdbapi.com/?s=${searchField}&apikey=6a3b9a04`)
      .then((resp) => resp.json())
      .then((body) =>
        this.setState({ listofMovies: this.cleanContent(body.Search) })
      );
  }

  /** you may not need this function again */
  handleChange(e) {
    const { value } = e.target;
    this.setState({ searchField: value });
  }

  cleanContent(apiData) {
    let listOfApi;
    console.log("api", apiData);
    if (apiData) {
      listOfApi = apiData.map((data) => {
        return data;
      });
    }
    return listOfApi;
  }

  render() {
    const { searchField, listofMovies } = this.state;
    //  const apiData = listofMovies.filter(movies => (
    //  movies.toLowercase().includes(searchField.toLowercase())
    //  ))
    console.log(listofMovies);
    return (
      <div className="App">
        <div>
          <SearchBox
            value={searchField}
            placeholder="search for movies"
            handleChange={this.handleChange}
            onEnter={(e) => this.searchForMovies(e.target.value)}
          />
        </div>
        <div>
          <CardList listofMovie={listofMovies} />
        </div>
      </div>
    );
  }
}

export default App;
