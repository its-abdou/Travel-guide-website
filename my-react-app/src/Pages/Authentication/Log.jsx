import { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./log.css";

function Log({ setAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://localhost/backend/login.php",
        { email, password },
        { withCredentials: true }
      );

      if (response.data === "Login successful") {
        setAuth(true);
        navigate("/"); // Navigate to the home page after successful login
      } else {
        setError(response.data); // Display any error messages returned from the server
      }
    } catch (error) {
      setError("Error logging in. Please try again.");
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="login_body">
      <div className="wrapper">
        <div className="form-box_login">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
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

            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="remember-forgot">
              <label>
                <input type="checkbox" name="remember" />
                Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className="submit_btn" value="Login">
              Login
            </button>
            <div className="register-link">
              <p>
                Don&apos;t have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

Log.propTypes = {
  setAuth: PropTypes.func.isRequired,
};

export default Log;
