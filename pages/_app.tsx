import '../styles/globals.scss';

import DataContext, { defaultState as defaultDataState } from 'context/dataContext';
import { FirebaseContext } from 'context/firebase/firebase.context';
import { dataReducer } from 'context/reducers/dataReducer';
import { stateReducer } from 'context/reducers/stateReducer';
import StateContext, { defaultState } from 'context/stateContext';
import React, { ReactElement, useReducer } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }): ReactElement {
  const [state, dispatch] = useReducer(stateReducer, defaultState);
  const [data, dataDispatch] = useReducer(dataReducer, defaultDataState);
  return (
    <StateContext value={[state, dispatch]}>
      <DataContext value={[data, dataDispatch]}>
        <FirebaseContext>
          <Component {...pageProps} />
        </FirebaseContext>
      </DataContext>
    </StateContext>
  );
}

export default MyApp;
