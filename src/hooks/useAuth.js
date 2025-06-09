import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const useAuth = () => {
  const { user, setUser } = useContext(UserContext);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return { user, login, logout };
};

export default useAuth;
