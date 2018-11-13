import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
// import reduxPromise from 'redux-promise';
import async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';

import reducers from 'reducers';

export default function({children, initialState = {} }){
  const newStore = createStore(reducers, initialState, applyMiddleware(async, stateValidator));
  return(
  <Provider store={newStore}>
    {children}
  </Provider>
  )
};