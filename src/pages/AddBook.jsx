import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';

export default function AddBook() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: '',
    coverImage: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newBook = {
      ...formData,
      id: Date.now(),
    };
    dispatch(addBook(newBook));
    setFormData({
      title: '',
      author: '',
      category: '',
      description: '',
      rating: '',
      coverImage: ''
    });
    alert("Book added successfully!");
  };

  return (
    <div className="add-book-container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit} className="book-form">
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <input type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChange} required />
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input type="number" name="rating" placeholder="Rating (1-5)" value={formData.rating} onChange={handleChange} required />
        <input type="text" name="coverImage" placeholder="Cover Image URL" value={formData.coverImage} onChange={handleChange} required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
