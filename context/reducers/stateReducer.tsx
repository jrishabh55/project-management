import { defaultState, State } from 'context/stateContext';

enum types {
  TOGGLE_THEME
}

export type Action = { type: types.TOGGLE_THEME };

export const stateReducer = (state: State = defaultState, action: Action): State => {
  switch (action.type) {
    default:
      return state;
  }
};
