import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>ScanPro</h1>
        <p className="tagline">Enterprise Security Simplified</p>
        <ul>
          <li>AI Powered Scanning</li>
          <li>Live Vulnerability Tracking</li>
          <li>Automated Reports</li>
        </ul>
      </div>

      <div className="login-right">
        <div className="login-card">
          <h2>Create Account</h2>

          <input placeholder="First Name" />
          <input placeholder="Last Name" />
          <input placeholder="Email" />
          <input placeholder="Password" type="password" />

          <label className="checkbox">
            <input type="checkbox" /> I agree to Terms
          </label>

          <button
            className="btn-primary"
            onClick={() => navigate("/dashboard")}
          >
            Create Account
          </button>

          <div className="socials">
            <button className="btn-outline">Apple</button>
            <button className="btn-outline">Google</button>
            <button className="btn-outline">Meta</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;