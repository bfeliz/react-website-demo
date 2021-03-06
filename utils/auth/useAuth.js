// create hook to use contenxt easily throughout application
import { useContext } from 'react';
import { AuthContext } from './authContext';

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthContext.Provider');
  }

  return context;
};
