import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { rootReducers } from "./modules";

// chrome dev tools setting
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware();

export default createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(epicMiddleware))
);
