import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Shared/Layout";
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";
import { Profile } from "./pages/Profile";
import AllApplication from "./pages/AllApplication";
import Schedule from "./pages/Schedule";
import SkillsAssessment from "./pages/SkillsAssessment";
import JobAvailable from "./components/JobAvailable";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="messages" element={<Messages />} />
          <Route path="all-application" element={<AllApplication />} />
          <Route path="my-schedule" element={<Schedule />} />
          <Route path="skills-assessment" element={<SkillsAssessment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="settings" element={<div>Settings Page</div>} />
          <Route path="help-center" element={<div>Help Center Page</div>} />
          <Route path="/job-available" component={JobAvailable} />
        </Route>
        <Route path="login" element={<div>This is Login Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
