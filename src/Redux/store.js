import { createStore } from "redux";

import todoReducer from "./Reducer/todoReducer";

const store = createStore(
  todoReducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  export default store;