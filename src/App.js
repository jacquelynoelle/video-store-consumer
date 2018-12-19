import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Search from './components/Search';
import Library from './components/Library';
import Customers from './components/Customers';
import axios from 'axios';
import moment from 'moment';

const URL = "http://localhost:3000";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentCustomer: null,
      currentCustomerName: "None",
      currentMovie: null,
      currentMovieTitle: "None",
      alerts: "",
    };
  }

  onSelectCustomer = (customerID, customerName) => {
    this.setState({
      currentCustomer: customerID,
      currentCustomerName: customerName,
    });
  }

  onSelectMovie = (movie) => {
    this.setState({
      currentMovie: movie,
      currentMovieTitle: movie.title,
    });
  }

  onAddToLibrary = (movie) => {
    console.log(`Add movie ${movie.title}`);

    axios.post(URL + '/movies', { ...movie })
      .then((response) => {
        console.log('API RESPONSE SUCCESS')
        console.log(response.data)
        this.setState({
          alerts: `Added movie ${movie.title}`
        })
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        const errors = Object.values(error.response.data.errors)[0][0]
        this.setState({
          alerts: `Could not add movie ${movie.title} to the library: ${errors}`
        })
      });
  }

  onCheckout = () => {
    const postURL = `${URL}/rentals/${this.state.currentMovieTitle}/check-out`
    const date = moment()
              .add(7, 'days') // Checkout period is set to 7 days
              .toDate();

    axios.post(postURL, {
          customer_id: this.state.currentCustomer,
          due_date: date
        }
      )
      .then((response) => {
        console.log('API RESPONSE SUCCESS')
        this.setState({
          alerts: `Successfully checked out ${this.state.currentMovieTitle} to ${this.state.currentCustomerName}`,
          currentCustomer: null,
          currentCustomerName: "None",
          currentMovie: null,
          currentMovieTitle: "None",
        });

      })
      .catch((error) => {
        console.log(error.response.data.errors);
        const errors = Object.values(error.response.data.errors)[0][0]
        this.setState({
          alerts: `Could not checkout the movie: ${errors}`
        })
      });
  }

  render() {
    const Index = () => <Home />
    const SearchComponent = () => <Search onSelectMovieCallback={this.onAddToLibrary} />
    const LibraryComponent = () => <Library onSelectMovieCallback={this.onSelectMovie} />
    const CustomersComponent = () => <Customers onSelectCustomerCallback={this.onSelectCustomer} />

    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Home class="navbar-brand logo-image" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/search/" className="nav-link">Search</Link>
              </li>
              <li className="nav-item">
                <Link to="/library/" className="nav-link">Library</Link>
              </li>
              <li className="nav-item">
                <Link to="/customers/" className="nav-link">Customers</Link>
              </li>
            </ul>
            </div>
          </nav>
          { this.state.alerts !=="" && <div className="alert alert-info" role="alert">{this.state.alerts}</div>}
          <Route path="/" exact component={Index} />
          <Route path="/search/" component={SearchComponent}  />
          <Route path="/library/" component={LibraryComponent} />
          <Route path="/customers/" component={CustomersComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
