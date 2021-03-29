import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

import firebase from 'firebase/app';
import { useRouter } from 'next/router';
import { Context, createContext, FC, useEffect, useMemo, useState } from 'react';

export interface FirebaseContextState {
  app: firebase.app.App;
  db: firebase.firestore.Firestore;
  auth: firebase.auth.Auth;
  isInitialized: boolean;
  firebase: typeof firebase;
  user?: firebase.User;
}

const defaultState: Partial<FirebaseContextState> = {
  isInitialized: false
};

export const firebaseContext = createContext(defaultState) as Context<FirebaseContextState>;

export const FirebaseContext: FC = ({ children }) => {
  const [state, setState] = useState<firebase.app.App>();
  const [user, setUser] = useState<firebase.User>();
  const router = useRouter();

  const appMenu = useMemo(
    () => ({
      user,
      isInitialized: !!state,
      app: state,
      db: state?.firestore(),
      auth: state?.auth(),
      analytics: state?.analytics(),
      firebase: firebase
    }),
    [state, user]
  );

  useEffect(() => {
    if (firebase.apps.length === 0) {
      const app = firebase.initializeApp({
        apiKey: 'AIzaSyAz6rFFlz_01_uIgnl6d_NYtaTvIoZ1h8w',
        authDomain: 'citric-alliance-178011.firebaseapp.com',
        projectId: 'citric-alliance-178011',
        storageBucket: 'citric-alliance-178011.appspot.com',
        messagingSenderId: '714179113206',
        appId: '1:714179113206:web:b9425a4d8a1655b453bcd7',
        measurementId: 'G-7M8ZVY2BF1'
      });
      app.analytics();
      setState(app);

      app.auth().onAuthStateChanged((user) => {
        setUser(user);
      });
    }
  }, []);

  useEffect(() => {
    console.log('USER', user);
    if (user) {
      router.push('/');
    } else {
      if (router.pathname !== '/login') {
        router.push('/login');
      }
    }
  }, [user]);

  return <firebaseContext.Provider value={appMenu}>{children}</firebaseContext.Provider>;
};
