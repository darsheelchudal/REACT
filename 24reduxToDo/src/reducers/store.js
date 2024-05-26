import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slice/taskReducers";

const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});
export default store;
