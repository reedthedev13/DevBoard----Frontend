import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardPage from "./pages/Dashboard";
import ActivityPage from "./pages/ActivityPage";
import SettingsPage from "./pages/SettingsPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <DashboardLayout>
              <DashboardPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/activity"
          element={
            <DashboardLayout>
              <ActivityPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <DashboardLayout>
              <SettingsPage />
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
