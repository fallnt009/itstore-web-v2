import {createContext, useState, useEffect, useCallback} from 'react';
import {jwtDecode} from 'jwt-decode';

import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from '../../utils/local-storage';

import * as authApi from '../../services/apis/auth-api';

const AuthContext = createContext();

export default function AuthContextProvider({children}) {
  const [authenUser, setAuthenUser] = useState(getAccessToken() ? true : null);

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const res = await authApi.getMyProfile();
        setAuthenUser(res.data.user);
      } catch (err) {
        removeAccessToken();
      }
    };
    if (getAccessToken()) {
      fetchAuthUser();
    }
  }, []);

  const login = async (email, password) => {
    const res = await authApi.login({email, password});
    setAccessToken(res.data.accessToken);
    setAuthenUser(jwtDecode(res.data.accessToken));
  };

  const logout = () => {
    removeAccessToken();
    setAuthenUser(null);
  };

  const updateProfile = useCallback(async (userId, data) => {
    try {
      //add api
      const res = await authApi.updateProfile(userId, data);

      setAuthenUser((prevUser) => ({...prevUser, ...res.data.result}));
    } catch (err) {
      throw err;
    }
  }, []);

  const updateProfileImage = useCallback(async (userId, data) => {
    try {
      const res = await authApi.updateProfileImage(userId, data);

      setAuthenUser((prevUser) => ({...prevUser, ...res.data.result}));
    } catch (err) {
      throw err;
    }
  }, []);

  const updatePassword = useCallback(async (data) => {
    try {
      //call api
      const res = await authApi.updatePassword(data);
      //get token back
      setAccessToken(res.data.accessToken);
      return res;
    } catch (err) {
      throw err;
    }
  }, []);

  const register = async (data) => {
    //need to review
    try {
      await authApi.register(data);
    } catch (err) {
      throw err;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authenUser,
        login,
        logout,
        updateProfile,
        updateProfileImage,
        updatePassword,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export {AuthContext};
