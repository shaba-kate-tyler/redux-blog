import Home from './Home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

export default function Nav() {
  return (
    <Router>
      <>
        <Link to="/">Home</Link>
      </>
    </Router>
  );
}
