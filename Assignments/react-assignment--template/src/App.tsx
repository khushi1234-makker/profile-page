import React from "react";
import UserDashboard from "./components/UserDashboard";

const App: React.FC = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>User Management Dashboard</h2>
      <UserDashboard />
    </div>
  );
};

export default App;