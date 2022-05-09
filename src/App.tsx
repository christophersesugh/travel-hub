import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
const AuthenticatedApp = React.lazy(() => import("./authenticated-app"));
const UnauthenticatedApp = React.lazy(() => import("./unauthenticated-app"));

function App() {
  const user = true;
  return (
    <React.Suspense fallback="loading">
      {user ? (
        <Router>
          <AuthenticatedApp />
        </Router>
      ) : (
        <UnauthenticatedApp />
      )}
    </React.Suspense>
  );
}

export default App;
