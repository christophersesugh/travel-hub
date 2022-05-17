import { AppRoutes } from "components";
import { BrowserRouter as Router } from "react-router-dom";
export default function AuthProviders() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
