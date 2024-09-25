import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserService from "../services";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    
    try {
      UserService.registerUser(name, email, password);
      alert("Usuário registrado com sucesso!");
      navigate("/login");
    } catch (error) {
      console.error("Erro ao registrar o usuário:", error);
      alert(error.message);
    }
  };

  return (
    <div className="register-container">
      <h2>Registrar</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        <button type="submit">Registrar</button>
      </form>
      <p className="login-link">
        <Link to="/login">Voltar para o Login</Link>
      </p>
    </div>
  );
};

export default Register;
