import '../styles/globals.scss';

import { FirebaseContext } from 'context/firebase/firebase.context';
import { stateReducer } from 'context/reducers/stateReducer';
import StateContext, { defaultState } from 'context/stateContext';
import { ReactElement, useReducer } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }): ReactElement {
  const [state, dispatch] = useReducer(stateReducer, defaultState);
  return (
    <StateContext value={[state, dispatch]}>
      <FirebaseContext>
        <Component {...pageProps} />
      </FirebaseContext>
    </StateContext>
  );
}

export default MyApp;
