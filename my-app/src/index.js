import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
axios.defaults.baseURL = "http://localhost:5000/";

ReactDOM.render(
  <BrowserRouter forceRefresh={true}>
    
    </BrowserRouter>,
  document.getElementById('root')
);

