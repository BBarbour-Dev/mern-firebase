import { useEffect, useState } from "react";
import firebaseService from "../../services/firebase";
import axios from "axios";

export default function DashboardPage() {
  const [loadingUser, setLoadingUser] = useState(true);
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const token = await firebaseService.auth.currentUser.getIdToken(true);
      console.log(token);
      const req = await axios.get("http://localhost:4444/api/user", {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      console.log(req.data);
      if (req.data) {
        setUser(req.data);
        setLoadingUser(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
      {loadingUser ? (
        <p>Loading User</p>
      ) : (
        <div>
          <p>Name: {user.name}</p>
          <p>FirebaseID: {user.firebaseId}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </>
  );
}
