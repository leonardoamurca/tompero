import React, { useContext, useEffect, useCallback } from "react";
import mockRequest from "../mocks/mockRequests";
import useAsync from "../hooks/useAsync";
import * as auth from "../auth-provider.js";

async function bootstrapAppData() {
  let user = null;

  const token = await auth.getToken();
  if (token) {
    const data = await mockRequest("/bootstrap", true);
    user = data.user;
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

  const value = React.useMemo(
    () => ({ user, login, logout, register, isLoggedIn }),
    [login, logout, register, user]
  );

  if (isLoading || isIdle) {
    return <h1>Loading...</h1>;
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
