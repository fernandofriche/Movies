import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserService from "../services";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      UserService.loginUser(email, password);
      localStorage.setItem("auth", "true");
      navigate("/");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p className="register-link">
        Ainda não possui uma conta? <Link to="/register">Criar Conta</Link>
      </p>
    </div>
  );
};

export default Login;
