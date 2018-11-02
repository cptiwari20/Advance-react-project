import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';

import reducers from 'reducers';

export default function({children, initialState = {} }){
  const newStore = createStore(reducers, initialState, applyMiddleware(reduxPromise));
  return(
  <Provider store={newStore}>
    {children}
  </Provider>
  )
};