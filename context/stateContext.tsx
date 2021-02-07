import { createContext, Dispatch, FC } from 'react';

import { Action } from './reducers/stateReducer';

export const defaultState = { darkMode: true };
export type State = typeof defaultState;

const stateContext = createContext([defaultState, (action: Action) => (action as unknown) as void]);

const StateContext: FC<{ value: [State, Dispatch<Action>] }> = ({ children, value }) => (
  <stateContext.Provider value={value}>{children}</stateContext.Provider>
);

export default StateContext;
