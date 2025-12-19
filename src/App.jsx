import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";
import FacultyDashboard from "./pages/faculty/FacultyDashboard";
import Attendance from "./pages/faculty/Attendance";
import MarksEntry from "./pages/faculty/MarksEntry";
import ResultApproval from "./pages/admin/ResultApproval";
import AttendanceAnalytics from "./pages/admin/AttendanceAnalytics";
import LeaveApproval from "./pages/admin/LeaveApproval";
import LeaveApply from "./pages/student/LeaveApply";
import AttendanceView from "./pages/student/AttendanceView";
import ResultView from "./pages/student/ResultView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/faculty" element={<FacultyDashboard />} />
        <Route path="/faculty/attendance" element={<Attendance />} />
        <Route path="/faculty/marks" element={<MarksEntry />} />
        <Route path="/admin/result" element={<ResultApproval />} />
        <Route path="/admin/attendance" element={<AttendanceAnalytics />} />
        <Route path="/admin/leaves" element={<LeaveApproval />} />
        <Route path="/student/leaves" element={<LeaveApply />} />
        <Route path="/student/attendance" element={<AttendanceView />} />
        <Route path="/student/result" element={<ResultView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
