import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import reducer, { CounterActionTypes } from './reducer';

const store = createStore(reducer);

const App = () => {
  const good = () => {
    store.dispatch({
      type: CounterActionTypes.GOOD,
    });
  };

  const ok = () => {
    store.dispatch({
      type: CounterActionTypes.OK,
    });
  };

  const bad = () => {
    store.dispatch({
      type: CounterActionTypes.BAD,
    });
  };

  const zero = () => {
    store.dispatch({
      type: CounterActionTypes.ZERO,
    });
  };

  return (
    <div>
      <button onClick={good}>good</button>
      <button onClick={ok}>ok</button>
      <button onClick={bad}>bad</button>
      <button onClick={zero}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
const renderApp = () => {
  root.render(<App />);
};

renderApp();
store.subscribe(renderApp);
