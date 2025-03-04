// src/pages/Login.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css"; // We'll create this CSS file next

interface LoginFormState {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [formState, setFormState] = useState<LoginFormState>({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formState.username || !formState.password) {
      alert("Please fill in both fields");
      return;
    }
    // Simulate a successful login
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">
              <FaUser /> Username:
            </label>
            <input
              type="text"
              id="username"
              value={formState.username}
              onChange={handleInputChange}
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">
              <FaLock /> Password:
            </label>
            <input
              type="password"
              id="password"
              value={formState.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="signup-link">
          Don't have an account? <a href="/signup">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
