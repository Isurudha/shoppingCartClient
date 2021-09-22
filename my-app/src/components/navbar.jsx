import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
  
  render() {
    if ("true" === localStorage.getItem("isAdmin")) {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div>
              <h1>Shoping Cart</h1>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/add-product" className="nav-link">
                    Add Products
                  </Link>
                </li>
              </ul>
              <button type="button" class="btn btn-danger" onClick = {this.logout}>
                Sign Out
              </button>
            </div>
          </div>
        </nav>
      );
    } else {
      if ("true" === localStorage.getItem("login")) {
        return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <div>
              <h1>Shoping Cart</h1>
              </div>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/cart" className="nav-link">
                      Cart
                    </Link>
                  </li>
                </ul>
                <button type="button" class="btn btn-danger" onClick={this.logout}>
                  Sign Out
                </button>
              </div>
            </div>
          </nav>
        );
      } else {
        return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <div>
              <h1>Shoping Cart</h1>
              </div>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/cart" className="nav-link">
                      Cart
                    </Link>
                  </li>
                </ul>
                <form className="d-flex">
                  <Link to="/signin" className="nav-link">
                    Sign In
                  </Link>
                  <br />
                  <br />
                  <Link to="/signup" className="nav-link">
                    Sign Up
                  </Link>
                </form>
              </div>
            </div>
          </nav>
        );
      }
    }
  }

  logout = () => {
    localStorage.clear();
    window.location.reload(false);
}


}

export default NavBar;