import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
// import Home from '../Home';
import Header from '../Header';
import UserDetails from '../../containers/UserDetails';


export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/users"></Route>
          <Route path="/users/:id" component={UserDetails}></Route>
          {/* <Route path="/" component={Home}></Route> */}
          <Route path="/posts/:userId/:postId"></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </>
    </Router> 
  );
}
