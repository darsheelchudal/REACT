import { combineReducers } from "redux";
import taskReducer from "../slice/taskReducers";

const rootReducer = combineReducers({
  tasks: taskReducer,
});

export default rootReducer;
