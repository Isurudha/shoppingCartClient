import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./components/signup";
import SignIn from "./components/signin";
import Cart from "./components/cart";
import NavBar from "./components/navbar";
import Product from "./components/products";
import addProduct from "./components/addProduct";
import updateProduct from "./components/updateProduct";
import updateAddress from "./components/updateAddress";
import GooglePay from "./components/googlePay";
axios.defaults.baseURL = "http://localhost:5000/";

ReactDOM.render(
  <BrowserRouter forceRefresh={true}>
    <NavBar/>
    <Route exact path="/" component={Product} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/signin" component={SignIn} />
    <Route exact path="/addProduct" component={addProduct} />
    <Route exact path="/updateProduct" component={updateProduct} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/updateAddress" component={updateAddress} />
    <Route exact path="/googlePay" component={GooglePay} />    
    </BrowserRouter>,
  document.getElementById('root')
);

