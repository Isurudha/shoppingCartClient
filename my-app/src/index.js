import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./components/signup";
import SignIn from "./components/signin";
import NavBar from "./components/navbar";
import Product from "./components/products";
axios.defaults.baseURL = "http://localhost:5000/";

ReactDOM.render(
  <BrowserRouter forceRefresh={true}>
    <NavBar/>
    <Route exact path="/" component={Product} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/signin" component={SignIn} />
    
    </BrowserRouter>,
  document.getElementById('root')
);

