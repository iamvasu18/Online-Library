import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react'; // 👈 Add useEffect
import BookCard from '../components/BookCard';

export default function Home() {
  const books = useSelector(state => state.books.books);
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');

  // ✅ Log books when they change
  useEffect(() => {
    console.log('Books from Redux:', books);
  }, [books]);

  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Mystery'];

  const filteredBooks = books.filter(book => {
    const matchCategory = category === '' || book.category === category;
    const matchSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="home-container">
      <h1>Welcome to the Online Library</h1>

      <div className="filter-controls">
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search by title or author"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => <BookCard key={book.id} book={book} />)
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
}
