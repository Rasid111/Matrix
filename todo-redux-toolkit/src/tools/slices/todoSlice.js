import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        lastId: 0,
        todos: []
    },
    reducers: {
        add: (state, action) => {
            const newTodo = { id: ++state.lastId, title: action.payload };
            state.todos.unshift(newTodo);
        },
        update: (state, action) => {
            state.todos = state.todos.map(todo => {
                if (todo.id == action.payload.id)
                    return action.payload;
                return todo;
            });
        },
        remove: (state, action) => {
            state.todos = state.todos.filter(todo => {
                return todo.id != action.payload;
            })
        }
    }
});

export default todoSlice.reducer;
export const { add, update, remove } = todoSlice.actions;