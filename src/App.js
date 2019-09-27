import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import Entities from "./containers/Entities";
import logger from "./middlewares/logger";
import thunk from "./middlewares/thunk";
import callAPI from "./middlewares/callAPI";

const store = createStore(reducers, applyMiddleware(callAPI, logger, thunk));

const App = props => {
  return (
    <Provider store={store}>
      <div>REACT REDUX MIDDLEWARE</div>
      <Entities />
    </Provider>
  );
};
export default App;
