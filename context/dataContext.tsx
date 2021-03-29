import { createContext, Dispatch, FC } from 'react';

import { Action } from './reducers/dataReducer';

interface Task {
  id: string;
  name: string;
  description: string;
  status: string;
  [key: string]: string | boolean;
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

const dataContext = createContext([defaultState, (action: Action) => (action as unknown) as void]);

const DataContext: FC<{ value: [State, Dispatch<Action>] }> = ({ children, value }) => (
  <dataContext.Provider value={value}>{children}</dataContext.Provider>
);

export default DataContext;
