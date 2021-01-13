import React, { Component } from "react";
// import _ from "lodash";
import "./App.css";
import { SearchBox } from "./components/searchField/searchField.component";
import { CardList } from "./components/cardList/cardList.component";
import { NomineeCard } from "./components/nomineeCard/nomineeCard.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      listofMovies: [],
      nominations: [],
      searchField: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    // this.searchForMovies(this.state.searchField);
    console.log("component", this.state.listofMovies.length);
  }

  searchForMovies(searchField) {
    // console.log(searchField);
    fetch(`http://www.omdbapi.com/?s=${searchField}&apikey=6a3b9a04`)
      .then((resp) => resp.json())
      .then((body) => this.setState({ listofMovies: body.Search }));
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

  handleNomination = (movieData) => {
    this.setState((state) => ({
      ...state,
      nominations: [...state.nominations, movieData],
    }));
  };

  render() {
    const { searchField, listofMovies, nominations } = this.state;
    //  const apiData = listofMovies.filter(movies => (
    //  movies.toLowercase().includes(searchField.toLowercase())
    //  ))
    console.log("main state", listofMovies);
    const allCardList = listofMovies.map((movie, index) => {
      return (
        <CardList
          onNominate={this.handleNomination}
          key={index}
          movieData={movie}
        />
      );
    });
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

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div className="">
            {listofMovies.length}
            {allCardList}
          </div>
          <div>
            <NomineeCard nominations={nominations} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
