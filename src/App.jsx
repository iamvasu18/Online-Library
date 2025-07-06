import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import BrowseBooks from './pages/BrowseBooks';
import BookDetails from './pages/BookDetails';
import AddBook from './pages/AddBook';
import NotFound from './pages/NotFound';

import { setBooks } from './redux/booksSlice';

export default function App() {
  const dispatch = useDispatch();

  // Load sample_books.json on initial mount
  useEffect(() => {
    fetch('/samplebooks.json')
      .then(res => res.json())
      .then(data => dispatch(setBooks(data)))
      .catch(err => console.error('Failed to load books:', err));
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BrowseBooks />} />
        <Route path="/books/:category" element={<BrowseBooks />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
