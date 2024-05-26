import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/slice/index";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
