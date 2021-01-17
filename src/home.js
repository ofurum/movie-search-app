import React, { Component } from "react";
import "./home.css";
import { SearchBox } from "./components/searchField/searchField.component";
import { CardList } from "./components/cardList/cardList.component";
import { NomineeCard } from "./components/nomineeCard/nomineeCard.component";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import swal from "sweetalert";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      listofMovies: [],
      nominations: [],
      searchField: "",
      isError: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    // this.searchForMovies(this.state.searchField);
    console.log("component", this.state.listofMovies.length);
    const nominations =  localStorage.getItem('nominated')
    if(nominations) this.setState({nominations: JSON.parse(nominations)})
  }

  searchForMovies(searchField) {
    // console.log(searchField);
    const error = document.querySelector(".error");
    if (searchField.length === 0) {
      error.innerHTML = "please input a movie name";
    }
    fetch(`http://www.omdbapi.com/?s=${searchField}&apikey=6a3b9a04`)
      .then((resp) => resp.json())
      .then((body) => {
        if (body.Response === "True") {
          this.setState({ listofMovies: body.Search });
          this.setState({ isError: false });
        } else {
          this.setState({ isError: true });
        }
      });
  }

  /** you may not need this function again */
  handleChange(e) {
    const { value } = e.target;
    localStorage.setItem('movie name', value)
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
    const {nominations}= this.state;
    nominations.push(movieData);
    localStorage.setItem('nominated', JSON.stringify(nominations));
    this.setState({
      nominations: nominations,
    });
    swal({
      position: "top-end",
      icon: "success",
      title: "movie nominated",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  handleUnNomination(index) {
    const { nominations } = this.state;
    nominations.splice(index, 1);
    localStorage.setItem("nominated", JSON.stringify(nominations));
    this.setState({ nominations });
  }

  render() {
    const { searchField, listofMovies, nominations, isError } = this.state;
    return (
      <div>
        <div>
          <Router>
            <div className="bookmark">
              <i class="far fa-bookmark">
                <Link to="/nomineeCard"></Link>
              </i>
            </div>
          </Router>
          <div>
            <h5
              className="head-title"
              style={{
                textAlign: "center",
                color: "white",
                fontSize: "50px",
                fontFamily: "Hachi Maru Pop, cursive",
              }}
            >
              Movie Application
            </h5>
          </div>
          <SearchBox
            value={searchField}
            placeholder="search for movies"
            handleChange={this.handleChange}
            onEnter={(e) => this.searchForMovies(e.target.value)}
          />
        </div>
        <span className="error"></span>

        <div className="main-body container">
          <div>
            <h3 style={{ color: "white", fontSize: "25px" }}>
              List of movies searched
            </h3>
            <span style={{ color: "white", marginBottom: "15px" }}>
              NB: click on the image to nominate the movie
            </span>
            {isError ? (
              <h1>This Movie does not exist</h1>
            ) : (
              <CardList
                onNominate={this.handleNomination}
                movieData={listofMovies}
              />
            )}
          </div>
          <div className="movies">
            <h3
              className="sub-head"
              style={{ color: "white", fontSize: "25px" }}
            >
              Nominated movies
            </h3>
            {this.state.nominations.length === 0 ? (
              ""
            ) : (
              <NomineeCard
                unnominate={(index) => this.handleUnNomination(index)}
                nominations={nominations}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
