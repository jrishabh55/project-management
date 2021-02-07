import '../styles/globals.scss';

import { stateReducer } from 'context/reducers/stateReducer';
import StateContext, { defaultState } from 'context/stateContext';
import { ReactElement, useReducer } from 'react';

function MyApp({ Component, pageProps }): ReactElement {
  const [state, dispatch] = useReducer(stateReducer, defaultState);
  return (
    <StateContext value={[state, dispatch]}>
      <Component {...pageProps} />
    </StateContext>
  );
}

export default MyApp;
