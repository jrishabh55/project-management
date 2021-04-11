import { useContext } from 'react';

import { ContextState, dataContext } from './dataContext';
import { types } from './reducers/dataReducer';

export const useStore = (): { store: ContextState; types: typeof types } => {
  const store = useContext(dataContext);
  return { store, types };
};
