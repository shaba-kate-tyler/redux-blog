import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';


export default function Header() {
  return (
    <Router>
      <>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
      </>
    </Router>
  );
}
