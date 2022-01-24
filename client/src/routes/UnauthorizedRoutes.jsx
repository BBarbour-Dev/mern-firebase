import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UnauthorizedNav from "../components/navigation/UnauthorizedNav";
import HomePage from "../components/pages/Home";
import SignInPage from "../components/pages/SignIn";
import SignUpPage from "../components/pages/SignUp";

export default function UnauthorizedRoutes() {
  return (
    <Router>
      <UnauthorizedNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route
          path="*"
          element={
            <main>
              <p>Not found.</p>
            </main>
          }
        />
      </Routes>
    </Router>
  );
}
