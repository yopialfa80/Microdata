import React from 'react';
import './index.css';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from './app/components/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
const initialState = {
  count: 0,
  secondCount: 20
};


function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + parseInt(action.payload)
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - parseInt(action.payload)
      };
      case 'SECOND_MULTIPLE':
      return {
        ...state,
        secondCount: state.secondCount * parseInt(action.payload)
      };
      case 'SECOND_DIVIDE':
      return {
        ...state,
        secondCount: state.secondCount / parseInt(action.payload)
      };
      case 'RESET':
      return {
        ...state,
        count: 0,
        secondCount: 0
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
render(<App />, document.getElementById('root'));
