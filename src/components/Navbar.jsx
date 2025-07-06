import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/books">Browse Books</Link>
      <Link to="/add-book">Add Book</Link>
    </nav>
  );
}
