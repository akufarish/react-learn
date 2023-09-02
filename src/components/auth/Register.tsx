import { useState } from "react";
import useAuth from "../../services/auth";
import { Link } from "react-router-dom";

export default function Register() {
  const { register } = useAuth();

  const [forms, setForms] = useState({
    username: "",
    password: "",
  });

  function doRegister(e: React.FormEvent) {
    e.preventDefault();
    register(forms);
  }

  return (
    <>
      <h3>Halaman Register</h3>
      <form onSubmit={doRegister}>
        <input
          type="text"
          value={forms.username}
          onChange={(e) => setForms({ ...forms, username: e.target.value })}
        />
        <br />
        <input
          type="password"
          value={forms.password}
          onChange={(e) => setForms({ ...forms, password: e.target.value })}
        />
        <br />
        <button type="submit">Register</button>
        <Link to={"/login"}>Sudah punya akun?</Link>
      </form>
    </>
  );
}
