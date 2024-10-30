import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todo: [],
  },

  reducers: {
    addTodo(state, action) {
      state.todo.push({
        id: new Date().toISOString(),
        title: action.payload.title,
        text: action.payload.text,
        completed: false,
      });
    },
    removeTodo(state, action) {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload.id);
    },
    toggleCompleted(state, action) {
      const toggledTodo = state.todo.find((todo) => todo.id === action.payload.id);
      toggledTodo.completed = !toggledTodo.completed;
    },
    updateTodo(state, action) {
      const { id, title, text } = action.payload;
      const todoUpdate = state.todo.find((todo) => todo.id === action.payload.id);

      if (todoUpdate) {
        todoUpdate.title = title;
        todoUpdate.text = text;
      }
    },
  },
});
export const { addTodo, removeTodo, toggleCompleted, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
