import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles";
import rootReducer from "./redux/reducers/rootReducer";
import reportWebVitals from "./reportWebVitals";
// Setup redux
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const initialState={};
const middleware = [thunk];
// const enhancer = compose(
//   middleware, //middleware
//   //redux devtools
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// const store = createStore(rootReducer, enhancer);

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
