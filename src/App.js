import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from './Search';



const Index = () => <h2>Home</h2>;
// const Search = () => <SearchBar onSearchChangeCallback=onSearchChange/>;
const Library = () => <h2>Library</h2>;
const Customers = () => <h2>Customers</h2>;

class App extends Component {
  render() {
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
          <Route path="/search/" component={Search} />
          <Route path="/library/" component={Library} />
          <Route path="/customers/" component={Customers} />
        </div>
      </Router>
    );
  }
}

export default App;
