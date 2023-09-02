import useAuth from "../services/auth";
import { useEffect } from "react";

export default function Dashboard() {
  const { getAuth, user, logout } = useAuth();

  useEffect(() => {
    getAuth();
  }, []);

  return (
    <>
      <h3>Halaman Dashboard</h3>
      <h3>{user.username}</h3>
      <button onClick={logout}>Logout</button>
    </>
  );
}
