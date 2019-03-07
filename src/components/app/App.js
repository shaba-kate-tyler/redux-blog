import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from '../Home';
import Header from '../Header';

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/posts/:userId/:postId"></Route>
          <Route path="/users"></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </>
    </Router> 
  );
}
