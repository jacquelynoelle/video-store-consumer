import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from './components/Search';
import Library from './components/Library';
import Customers from './components/Customers';
import axios from 'axios';
import moment from 'moment';

const Index = () => <h2>Home</h2>;
const URL = "http://localhost:3000";

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
      })
      .catch((error) => {
        console.log(error)
        console.log(error.message)
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
          currentCustomer: null,
          currentCustomerName: "None",
          currentMovie: null,
          currentMovieTitle: "None",
        });

      })
      .catch((error) => {
        console.log(error)
        console.log(error.message)
      });
  }

  render() {
    const SearchComponent = () => <Search onSelectMovieCallback={this.onAddToLibrary} />
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
              <button
                onClick={() => {this.onCheckout()}}> Checkout
              </button>
            </ul>
          </nav>

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
