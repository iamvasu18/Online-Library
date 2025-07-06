import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector(state => state.books.books.find(b => b.id == id));

  if (!book) return <p>Book not found</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>{book.title}</h2>
      <img src={book.cover} alt={book.title} style={{ width: 200 }} />
      <p><b>Author:</b> {book.author}</p>
      <p><b>Description:</b> {book.description}</p>
      <p><b>Rating:</b> {book.rating}</p>
      <button onClick={() => navigate('/books')}>Back to Browse</button>
    </div>
  );
}
