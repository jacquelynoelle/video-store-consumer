import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from './components/Search';
import axios from 'axios';

const URL = "http://localhost:3000";

const Index = () => <h2>Home</h2>;
//
const Library = () => <h2>Library</h2>;
const Customers = () => <h2>Customers</h2>;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieMasterList: [],
    };
  }

  componentDidMount() {
    axios.get(URL + "/movies")
      .then((response) => {
        const movies = response.data.map((movie) => {
          return { ...movie }
        });

        this.setState({
          movieMasterList: movies
        });
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message,
        });
      });
  }

  render() {
    const SearchMovies = () => <Search movieMasterList={this.state.movieMasterList}/>;
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search/">Search</Link>
              </li>
              <li>
                <Link to="/library/">Library</Link>
              </li>
              <li>
                <Link to="/customers/">Customers</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Index} />
          <Route path="/search/" component= {SearchMovies} />
          <Route path="/library/" component={Library} />
          <Route path="/customers/" component={Customers} />
        </div>
      </Router>
    );
  }
}

export default App;
