import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from '../../containers/Home';
import Header from '../Header';
import UserDetails from '../../containers/UserDetails';
import AllUsers from '../../containers/AllUsers';
import PostDetails from '../../containers/posts/PostDetails';
import AllPosts from '../../containers/AllPosts';

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/users/:id" component={UserDetails}></Route>
          <Route path="/users" component={AllUsers}></Route>
          <Route path="/posts/:postId" component={PostDetails}></Route>
          <Route path="/posts" component={AllPosts}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </>
    </Router> 
  );
}
