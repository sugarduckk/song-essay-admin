import React from 'react';
import useGlobalState from '../../custom-hooks/useGlobalState';

const AuthPage = props => {
  const { user } = useGlobalState();
  console.log(user.uid);
  return <div>
    Auth page
  </div>;
};

export default AuthPage;