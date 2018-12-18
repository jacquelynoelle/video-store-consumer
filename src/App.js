import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from './components/Search';
import Library from './components/Library';
import Customers from './components/Customers';

const Index = () => <h2>Home</h2>;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCustomer: null,
      currentCustomerName: "None",
      currentMovie: null,
      currentMovieTitle: "None",
    };
  }

  onSelectCustomer = (customerID, customerName) => {
    this.setState({
      currentCustomer: customerID,
      currentCustomerName: customerName,
    });
  }

  onSelectMovie = (movieID, movieTitle) => {
    this.setState({
      currentMovie: movieID,
      currentMovieTitle: movieTitle,
    });
  }

  render() {
    const LibraryComponent = () => <Library onSelectMovieCallback={this.onSelectMovie} />
    const CustomersComponent = () => <Customers onSelectCustomerCallback={this.onSelectCustomer} />

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
              <li>
                Selected customer: {this.state.currentCustomerName}
              </li>
              <li>
                Selected movie: {this.state.currentMovieTitle}
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Index} />
          <Route path="/search/" component={Search}  />
          <Route path="/library/" component={LibraryComponent} />
          <Route path="/customers/" component={CustomersComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
