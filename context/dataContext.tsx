import { createContext, Dispatch, FC } from 'react';

import { Action } from './reducers/dataReducer';

export interface Task {
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
  tasks: [
    {
      id: '1',
      name: 'Task 1',
      description: 'Description',
      status: 'new'
    }
  ],
  categories: [],
  subcategories: []
};

export type State = typeof defaultState;
export type ContextState = [State, Dispatch<Action>];

export const dataContext = createContext<ContextState>([
  defaultState,
  (action: Action) => (action as unknown) as void
]);

const DataContext: FC<{ value: ContextState }> = ({ children, value }) => (
  <dataContext.Provider value={value}>{children}</dataContext.Provider>
);

export default DataContext;
