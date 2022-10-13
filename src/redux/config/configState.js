import { createStore } from "redux";
import { combineReducers } from "redux";
import todolist from "../modules/todolist";

const rootReducer = combineReducers({
  todolist: todolist,
});

const store = createStore(rootReducer);

export default store;
