import { createContext, Dispatch, FC } from 'react';

import { Action } from './reducers/stateReducer';

interface Task {
  id: string;
  name: string;
  description: string;
  status: string;
  [key: string]: string;
}

interface Category {
  id: string;
  name: string;
}

interface Subcategory {
  id: string;
  name: string;
}

interface DataState {
  tasks: Task[];
  categories: Category[];
  subcategories: Subcategory[];
}

export const defaultState: DataState = {
  tasks: [],
  categories: [],
  subcategories: []
};

export type State = typeof defaultState;

const stateContext = createContext([defaultState, (action: Action) => (action as unknown) as void]);

const StateContext: FC<{ value: [State, Dispatch<Action>] }> = ({ children, value }) => (
  <stateContext.Provider value={value}>{children}</stateContext.Provider>
);

export default StateContext;
