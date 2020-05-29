import React from 'react';
import useFirebaseAdminAuth from './firebase/useFirebaseAdminAuth';
import useGlobalState from './custom-hooks/useGlobalState';
import { ThemeProvider, LoadingScreen } from 'song-essay-shared';
import AuthPage from './pages/AuthPage';
import NonAuthPage from './pages/NonAuthPage';


const App = () => {
  const { user, userLoaded, theme } = useGlobalState();
  useFirebaseAdminAuth();
  return <ThemeProvider theme={theme}>
    {userLoaded ? (user ? <AuthPage /> : <NonAuthPage />) :
      <LoadingScreen text='loading...' />}
  </ThemeProvider>;
};

export default App;
