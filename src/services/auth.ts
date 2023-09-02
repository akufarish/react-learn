import axios from "./axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthData } from "../utils/Index";
import useSwal from "./swal";

export default function useAuth() {
  const navigate = useNavigate();
  const { accepted, rejected, confirmed } = useSwal();
  const [user, setUser] = useState({
    name: "",
  });

  async function login(params: AuthData) {
    try {
      const response = await axios.post("/api/v1/auth/login", params);
      console.log(response.data);
      const token = response.data.Body.token;
      setToken(token);
      accepted(response.data.message);
      console.log(response.data);
      navigate("/dashboard");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        rejected(error.response?.data.message);
        throw error;
      }
    }
  }

  async function register(params: AuthData) {
    try {
      const response = await axios.post("/api/auth/register", params);
      console.log(response.data);
      accepted(response.data.message);
      navigate("/login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error;
      }
    }
  }

  async function logout() {
    const response = await confirmed("Apa anda ingin log out?");

    if (response.isConfirmed) {
      try {
        await axios.get("/api/v1/auth/logout");
        removeToken();
        navigate("/login");
        accepted("Berhasil Logout");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error);
        }
      }
    }
  }

  function setToken(token: string) {
    localStorage.setItem("access_token", token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  function removeToken() {
    localStorage.removeItem("access_token");
    axios.defaults.headers.common.Authorization;
  }

  async function getAuth() {
    const response = await axios.get("/api/user");
    setUser(response.data);
  }

  return {
    login,
    register,
    getAuth,
    user,
    logout,
  };
}
