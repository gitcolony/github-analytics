import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';
import Search from './components/Search';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Search} />
    <Route path="/about" component={About} />
    <Route path="/app" component={App} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
