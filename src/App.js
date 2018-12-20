import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Search from './components/Search';
import Library from './components/Library';
import Customers from './components/Customers';
import PuppetPals from './components/PuppetPals';
import axios from 'axios';
import moment from 'moment';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const URL = "http://puppetpals.herokuapp.com";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentCustomer: null,
      currentCustomerName: null,
      currentMovie: null,
      currentMovieTitle: null,
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
          currentCustomerName: null,
          currentMovie: null,
          currentMovieTitle: null,
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
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="nav-link Nav__label"><PuppetPals class="navbar-brand logo-image" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/library/" className="nav-link Nav__label">
                  <i className="material-icons">
                  video_library
                  </i>
                  <span className="align-top">Library</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/customers/" className="nav-link Nav__label">
                <i className="material-icons">
                  supervised_user_circle
                </i><span className="align-top">Customers</span></Link>
              </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item d-flex align-content-center active">
                  <Link to="/search/" className="nav-link Nav__label"><i className="material-icons md-24">
                      search
                    </i><span className="align-top">Search</span></Link>
                </li>
              </ul>
            </div>
          </nav>
          { this.state.alerts !== "" &&
            <div className="alert alert-info alert-dismissible fade show" role="alert">
              {this.state.alerts}
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          }
          <Route path="/" exact component={Index} />
          <Route path="/search/" component={SearchComponent}  />
          <Route path="/library/" component={LibraryComponent} />
          <Route path="/customers/" component={CustomersComponent} />

          { (this.state.currentMovie || this.state.currentCustomer) &&
            <aside className="checkout-module">
              <h6 className="checkout-module__header">Current Selections</h6>
              <div className="row">
                <div className="col-4 checkout-module__movie">
                  { this.state.currentMovie ?
                    <img
                      src={this.state.currentMovie.image_url}
                      alt={this.state.currentMovieTitle}
                      className="checkout-module__image"
                    /> :
                    <div className="checkout-module__image--placeholder">
                       <Link to="/library/">Select Movie</Link>
                    </div>
                  }
                </div>
                <div className="col-8">
                  Customer:<br />
                  { this.state.currentCustomerName ?
                    <strong>{this.state.currentCustomerName.toUpperCase()}</strong> :
                    <Link to="/customers/">Select Customer</Link>
                  }
                  <hr/>
                  <button className="btn btn-info" onClick={() => {this.onCheckout()}}>
                    Checkout
                  </button>
                </div>
              </div>
            </aside>
          }
        </div>
      </Router>
    );
  }
}

export default App;
