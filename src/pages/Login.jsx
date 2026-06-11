import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email === email && user.password === password) {
      alert("✅ Login Successful");
      navigate("/dashboard");
    } else {
      alert("❌ Invalid Email or Password");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Login</h1>
        <p className="auth-subtitle">Enter your credentials to continue</p>

        <form onSubmit={handleLogin}>
          <label>Your Email</label>
          <input
            type="email"
            placeholder="player@happi.games"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Log In</button>
        </form>

        <p className="auth-footer">
          No account?{" "}
          <Link to="/signup">Create one here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
