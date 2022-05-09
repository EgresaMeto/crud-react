import { createSlice } from '@reduxjs/toolkit'
import { BooksData } from '../BookData'


export const userSlice = createSlice({
  name: 'books',
  initialState: { value: BooksData },
  reducers: {
    addBook: (state, action) => {
      state.value.push(action.payload)
    },
    deleteBook: (state, action) => {
      state.value = state.value.filter((book) => book.id !== action.payload.id)
    },
    updateTitle: (state, action) => {
      state.value.map((book) => {
        if (book.id === action.payload.id) {
          book.title = action.payload.title
        }
      })
    },
  },
})

export const { addBook, deleteBook, updateTitle } = userSlice.actions
export default userSlice.reducer