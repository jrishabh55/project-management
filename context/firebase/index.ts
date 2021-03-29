import { useContext } from 'react';

import { firebaseContext, FirebaseContextState } from './firebase.context';

export const useFirebase = (): FirebaseContextState => {
  return useContext(firebaseContext);
};

export const useUser = (): FirebaseContextState['user'] => {
  const { user, isInitialized } = useFirebase();
  return isInitialized ? user : null;
};
