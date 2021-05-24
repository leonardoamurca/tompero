import React, { useContext, useEffect, useCallback } from "react";
import Loading from "../components/Loading";
import mockRequest from "../mocks/mockRequests";
import useAsync from "../hooks/useAsync";
import * as auth from "../auth-provider.js";

async function bootstrapAppData() {
  let user = null;

  const token = auth.getToken();
  if (token) {
    const data = await auth.fetchUser(token);
    user = data;
  }
  return user;
}

const AuthContext = React.createContext();
function AuthProvider({ children }) {
  const {
    data: user,
    isSuccess,
    isError,
    isLoading,
    isIdle,
    status,
    error,
    run,
    setData,
  } = useAsync();

  useEffect(() => {
    const appDataPromise = bootstrapAppData();
    run(appDataPromise);
  }, [run]);

  const register = useCallback(
    (form) => auth.register(form).then((user) => setData(user)),
    [setData]
  );

  const login = useCallback(
    (form) => auth.login(form).then((user) => setData(user)),
    [setData]
  );

  const logout = useCallback(() => {
    auth.logout();
    setData(null);
  }, [setData]);

  const isLoggedIn = () => user !== null;

  const getUser = () => user;

  const value = React.useMemo(
    () => ({ getUser, login, logout, register, isLoggedIn }),
    [login, logout, register, getUser]
  );

  if (isLoading || isIdle) {
    return <Loading />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  if (isSuccess) {
    return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
  }

  throw new Error(`Unhandled status: ${status}`);
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
