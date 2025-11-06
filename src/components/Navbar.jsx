import { Link } from 'react-router-dom';
import About from './About';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> <br />
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;