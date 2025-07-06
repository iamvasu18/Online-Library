import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import BookCard from '../components/BookCard';

export default function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector(state => state.books.books);
  const [search, setSearch] = useState('');

  const filtered = books.filter(book => {
    const matchCategory = category ? book.category === category : true;
    const matchSearch = book.title.toLowerCase().includes(search.toLowerCase()) ||
                        book.author.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="browse-container">
      <div className="search-row">
        <input
          type="text"
          className="search-input"
          placeholder="Search by title or author"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="book-list">
        {filtered.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
