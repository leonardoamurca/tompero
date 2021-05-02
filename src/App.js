import React, { lazy, Suspense } from "react";
import { useAuth } from "./context/auth";

const AuthenticatedApp = lazy(() => import("./AuthenticatedApp"));
const UnauthenticatedApp = lazy(() => import("./UnauthenticatedApp"));

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <Suspense fallback={<h1>Loading</h1>}>
      {isLoggedIn() ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Suspense>
  );
}

export default App;
