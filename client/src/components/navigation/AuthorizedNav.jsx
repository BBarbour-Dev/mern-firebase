import { Link } from "react-router-dom";
import firebaseService from "../../services/firebase";

export default function AuthorizedNav() {
  const logUserOut = async () => {
    await firebaseService.auth.signOut();
  };
  return (
    <nav>
      <ul style={{ listStyleType: "none", display: "flex" }}>
        <li style={{ marginRight: ".5rem" }}>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <button
            style={{
              textDecoration: "underline",
              border: "none",
              backgroundColor: "inherit",
              fontSize: "1rem",
              padding: 0
            }}
            onClick={logUserOut}
          >
            Sign Out
          </button>
        </li>
      </ul>
    </nav>
  );
}
