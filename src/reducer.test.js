import deepFreeze from 'deep-freeze';
import counterReducer, {
  CounterActionTypes,
  counterInitialState,
} from './reducer';

describe('unicafe reducer', () => {
  // const initialState = {
  //   good: 0,
  //   ok: 0,
  //   bad: 0,
  // };

  test('should return a proper initial state when called with undefined state', () => {
    const state = {};
    const action = {
      type: 'DO_NOTHING',
    };

    deepFreeze(state);

    const newState = counterReducer(undefined, action);
    expect(newState).toEqual(counterInitialState);
  });

  test('good is incremented', () => {
    const action = {
      type: CounterActionTypes.GOOD,
    };

    const state = counterInitialState;

    deepFreeze(state);

    const newState = counterReducer(state, action);
    expect(newState).toEqual({ ...counterInitialState, good: 1 });
  });

  test('ok is incremented', () => {
    const action = {
      type: CounterActionTypes.OK,
    };

    const state = counterInitialState;

    deepFreeze(state);

    const newState = counterReducer(state, action);
    expect(newState).toEqual({ ...counterInitialState, ok: 1 });
  });

  test('bad is incremented', () => {
    const action = {
      type: CounterActionTypes.BAD,
    };

    const state = counterInitialState;

    deepFreeze(state);

    const newState = counterReducer(state, action);
    expect(newState).toEqual({ ...counterInitialState, bad: 1 });
  });

  test('state is reset', () => {
    const action = {
      type: CounterActionTypes.ZERO,
    };

    const state = counterInitialState;

    deepFreeze(state);

    const newState = counterReducer(state, action);
    expect(newState).toEqual(counterInitialState);
  });
});
