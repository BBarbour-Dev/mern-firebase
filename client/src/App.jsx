import "./App.css";
import UnauthorizedRoutes from "./routes/UnauthorizedRoutes";
import AuthorizedRoutes from "./routes/AuthorizedRoutes";
import { useStoreState, useStoreActions } from "easy-peasy";
import firebaseService from "./services/firebase";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const authorized = useStoreState((state) => state.authorized);
  const setAuthorized = useStoreActions((actions) => actions.setAuthorized);
  const setUnauthorized = useStoreActions((actions) => actions.setUnauthorized);

  const authStateListener = () => {
    firebaseService.auth.onAuthStateChanged(async (user) => {
      if (!user) {
        setLoading(false);
        return setUnauthorized();
      }

      setLoading(false);
      return setAuthorized();
    });
  };

  useEffect(() => {
    authStateListener();
  }, [authStateListener]);

  return (
    <div className="App" style={{ padding: 16 }}>
      {loading ? (
        <p>Loading...</p>
      ) : authorized ? (
        <AuthorizedRoutes />
      ) : (
        <UnauthorizedRoutes />
      )}
    </div>
  );
}

export default App;
