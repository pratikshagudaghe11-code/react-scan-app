import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ScanDetail from "./components/ScanDetail";

function App() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <Router>
      <div className="theme-toggle" onClick={toggleTheme}>
        {dark ? "Light Mode" : "Dark Mode"}
      </div>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scan" element={<ScanDetail />} />
      </Routes>
    </Router>
  );
}

export default App;