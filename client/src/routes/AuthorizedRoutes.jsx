import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthorizedNav from "../components/navigation/AuthorizedNav";
import DashboardPage from "../components/pages/Dashboard";

export default function UnauthorizedRoutes() {
  return (
    <Router>
      <AuthorizedNav />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        {/* <Route
          path="*"
          element={
            <main>
              <p>Not found.</p>
            </main>
          }
        /> */}
      </Routes>
    </Router>
  );
}
