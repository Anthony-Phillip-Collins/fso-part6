export const counterInitialState = Object.freeze({
  good: 0,
  ok: 0,
  bad: 0,
});

const counterReducer = (state = counterInitialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case CounterActionTypes.GOOD:
      return { ...state, good: state.good + 1 };
    case CounterActionTypes.OK:
      return { ...state, ok: state.ok + 1 };
    case CounterActionTypes.BAD:
      return { ...state, bad: state.bad + 1 };
    case CounterActionTypes.ZERO:
      return counterInitialState;
    default:
      return state;
  }
};

export const CounterActionTypes = Object.freeze({
  GOOD: 'GOOD',
  OK: 'OK',
  BAD: 'BAD',
  ZERO: 'ZERO',
});

export default counterReducer;
