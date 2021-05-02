import React, { lazy, Suspense } from "react";
import { useAuth } from "./context/auth";
import Loading from "./components/Loading";

const AuthenticatedApp = lazy(() => import("./AuthenticatedApp"));
const UnauthenticatedApp = lazy(() => import("./UnauthenticatedApp"));

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <Suspense fallback={<Loading />}>
      {isLoggedIn() ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Suspense>
  );
}

export default App;
