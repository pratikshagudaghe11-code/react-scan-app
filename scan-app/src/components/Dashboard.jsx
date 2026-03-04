import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    return (
        <div className="app-layout">
            <div className="sidebar">
                <div>
                    <p onClick={() => navigate("/dashboard")}>Dashboard</p>
                    <p onclick={() => navigate("/Projects")}>Projects</p>
                    <p onClick={() => navigate("/scan")}>Scans</p>
                    <p onClick={() => navigate("/Schedule")}>Schedule</p>
                    <p onClick={() => navigate("/Notifications")}>Notifications</p>
                    <p onClick={() => navigate("/Settings")}>Settings</p>
                    <p onClick={() => navigate("/Support")}>Support</p>
                    
                </div>
            </div>

            <div className="main-content">
                <h1>Scan Overview</h1>

                <div className="stats-bar">
                    <div className="stat-card critical">Critical 12 (+5%)</div>
                    <div className="stat-card high">High 25 (+2%)</div>
                    <div className="stat-card medium">Medium 18 (-1%)</div>
                    <div className="stat-card low">Low 40 (+3%)</div>
                </div>

                <div className="toolbar">
                    <input placeholder="Search scans..." />
                    <button className="btn-outline">Filter</button>
                    <button className="btn-outline">Columns</button>
                    <button className="btn-primary">New Scan</button>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Scan Name</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Progress</th>
                            <th>Last Scan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr onClick={() => navigate("/scan")}>
                            <td>Website Scan</td>
                            <td>Full</td>
                            <td><span className="status completed">Completed</span></td>
                            <td>100%</td>
                            <td>2 hrs ago</td>
                        </tr>
                        <tr>
                            <td>API Scan</td>
                            <td>Quick</td>
                            <td><span className="status failed">Failed</span></td>
                            <td>40%</td>
                            <td>1 day ago</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                </div>
            </div>
        </div>

    );
}

export default Dashboard;