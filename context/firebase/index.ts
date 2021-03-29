import { useContext } from 'react';

import { firebaseContext, FirebaseContextState } from './firebase.context';

export const useFirebase = (): FirebaseContextState => {
  return useContext(firebaseContext);
};
