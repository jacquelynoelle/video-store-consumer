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
    };
  }

  render() {
    return (

          <Router>
            <div className="wrapper">
              <nav id="sidebar">
                <div className="sidebar-header">
                  <h3>Video Store</h3>
                </div>
                <ul className="list-unstyled components">
                  <li className="active">
                    <Link to="/" aria-expanded="false">Home</Link>
                  </li>
                  <li>
                    <Link to="/search/" aria-expanded="false">Search</Link>
                  </li>
                  <li>
                    <Link to="/library/" aria-expanded="false">Library</Link>
                  </li>
                  <li>
                    <Link to="/customers/" aria-expanded="false">Customers</Link>
                  </li>
                </ul>
              </nav>
              <div id="content">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <div className="container-fluid">

                  <button type="button" id="sidebarCollapse" className="btn btn-info">
                    <i className="fas fa-align-left"></i>
                    <span>Toggle Sidebar</span>
                  </button>
                  </div>
                </nav>
              </div>
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
