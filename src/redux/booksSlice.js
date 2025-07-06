import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: []
  },
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    addBook: (state, action) => {
      state.books.push(action.payload);
    }
  }
});

export const { setBooks, addBook } = booksSlice.actions;
export default booksSlice.reducer;
