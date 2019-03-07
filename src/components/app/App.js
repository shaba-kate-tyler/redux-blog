import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from '../../containers/Home';
import Header from '../Header';
import AllUsers from '../../containers/AllUsers';

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/posts/:id"></Route>
          <Route path="/users" component={AllUsers}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </>
    </Router> 
  );
}
