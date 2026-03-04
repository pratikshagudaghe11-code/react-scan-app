import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ScanDetail() {
  const navigate = useNavigate();

  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const messages = [
      "Spidering started...",
      "Mapping application...",
      "GET /api/users",
      "Testing endpoints...",
      "Vulnerability detected",
      "Generating report..."
    ];

    let index = 0;

    const interval = setInterval(() => {
      if (index < messages.length) {
        setLogs((prev) => [...prev, messages[index]]);
        setProgress((prev) => prev + 15);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-layout">

      {/* Sidebar */}
      <div className="sidebar">
        <h3>ScanPro</h3>
        <p onClick={() => navigate("/dashboard")}>Dashboard</p>
        
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Active Scan</h1>

        {/* Progress Section */}
        <div className="progress-section">
          <div className="circle">{progress}%</div>

          <div className="steps">
            <span className={progress >= 20 ? "active" : ""}>Spidering</span>
            <span className={progress >= 40 ? "active" : ""}>Mapping</span>
            <span className={progress >= 60 ? "active" : ""}>Testing</span>
            <span className={progress >= 80 ? "active" : ""}>Validating</span>
            <span className={progress >= 100 ? "active" : ""}>Reporting</span>
          </div>
        </div>

        {/* Panels */}
        <div className="scan-panels">

          {/* Live Console */}
          <div className="console">
            <h3>Live Console</h3>

            {logs.map((log, index) => (
              <p key={index}>{log}</p>
            ))}

          </div>

          {/* Findings */}
          <div className="findings">
            <div className="finding critical">
              Critical - SQL Injection
            </div>
            <div className="finding high">
              High - XSS Found
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ScanDetail;