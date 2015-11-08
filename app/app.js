import React from "react";
import ReactDOM from "react-dom";

import { Route, Router } from 'react-router';

import Base from "./basecomponent";

ReactDOM.render((
  <Router>
    <Route path="/" component={ Base } />
  </Router>),
  document.querySelector('.container')
);
