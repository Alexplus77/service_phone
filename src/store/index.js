import { createStore, combineReducers } from "redux";
import { serviceAddValueReducer } from "reducers/serviceAddValueReducer";
import { serviceListReducer } from "reducers/serviceListReducer";

const reducer = combineReducers({
  serviceAddValueReducer: serviceAddValueReducer,
  serviceListReducer: serviceListReducer,
});

const store = createStore(reducer);

export { store };
