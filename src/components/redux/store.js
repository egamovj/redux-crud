import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './slice/todo.js';


const rootReducer = {
    todo: todoReducer
}

const store = configureStore({
    reducer: rootReducer
});

export default store;