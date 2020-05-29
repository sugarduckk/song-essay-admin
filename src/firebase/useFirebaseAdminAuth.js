import React from 'react';
import { auth } from '..';
import { useDispatch } from 'react-redux';
import { setState } from '../redux/actions';

const useFirebaseAdminAuth = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    auth().onAuthStateChanged(user => {
      dispatch(setState({
        user,
        userLoaded: true
      }));
    });
  }, [dispatch]);
};

export default useFirebaseAdminAuth;