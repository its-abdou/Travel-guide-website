import { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";

function Register({ setAuth }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost/backend/register.php",
        { username, email, password },
        { withCredentials: true }
      );

      if (response.data.message === "Registration successful") {
        setAuth(true);
        navigate("/profile"); // Directly navigate to profile after successful registration
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      setError("Error registering. Please try again.");
      console.error("Error registering:", error);
    }
  };

  return (
    <div className="register_body">
      <div className="wrapper">
        <div className="form-box_register">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <i className="bi bi-person-fill"></i>
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label>Username</label>
            </div>
            <div className="input-box">
              <i className="bi bi-envelope-fill"></i>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Email</label>
            </div>
            <div className="input-box">
              <i className="bi bi-lock-fill"></i>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Password</label>
            </div>
            <div className="input-box">
              <i className="bi bi-lock-fill"></i>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <label>Confirm Password</label>
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit" className="submit_btn" value="Register">
              Register
            </button>
            <div className="login-link">
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

Register.propTypes = {
  setAuth: PropTypes.func.isRequired,
};

export default Register;
