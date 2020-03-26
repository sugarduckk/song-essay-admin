import React from 'react';
import { auth } from '..';

const useFirebaseAdminAuth = () => {
  React.useEffect(() => {
    auth().onAuthStateChanged(user => {

    });
  }, []);
};

export default useFirebaseAdminAuth;