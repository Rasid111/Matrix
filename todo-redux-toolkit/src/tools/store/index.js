import { configureStore } from '@reduxjs/toolkit'
import todoSlice from '../slices/todoSlice';

const store = configureStore({
  reducer: {
    todo: todoSlice
  }
});

store.subscribe(() => {
  console.log("State updated:", store.getState());
});

export default store;