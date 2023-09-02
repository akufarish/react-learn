import { useState } from "react";
import useAuth from "../../services/auth";
import AuthData from "../../utils/Index";
import { Link } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const [form, setForm] = useState<AuthData>({
    username: "",
    password: "",
  });

  function doLogin(e: React.FormEvent) {
    e.preventDefault();
    login(form);
  }

  return (
    <>
      <div className="bg-slate-200">
        <div className="flex items-center justify-center h-screen flex-col">
          <div className="p-6 bg-white rounded-md shadow-lg hover:border-2 hover:border-sky-500 duration-300 transition-all">
            <h3 className="text-center text-3xl font-bold uppercase font-sans">
              login
            </h3>
            <form
              onSubmit={doLogin}
              className="flex flex-col items-center gap-1 mt-5"
            >
              <input
                className="bg-slate-300 h-8 rounded-full ring-0 outline-none"
                type="text"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
              />
              <br />
              <input
                className="bg-slate-300 h-8 rounded-full ring-0 outline-none"
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <br />
              <button
                className="w-full py-2 bg-indigo-400 text-white rounded-full hover:bg-indigo-500 transition-colors duration-200"
                type="submit"
              >
                Login
              </button>
              <Link to={"/register"}>Belum punya akun?</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
