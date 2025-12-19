import { NavLink } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const Sidebar = ({ collapsed }) => {
    const { user } = useAuth();

    const menus = {
        admin: [
            { name: "Dashboard", path: "/admin", icon: "🏠" },
            { name: "Students", path: "/admin/students", icon: "🎓" },
            { name: "Faculty", path: "/admin/faculty", icon: "👨‍🏫" },
            { name: "Courses", path: "/admin/courses", icon: "📚" },
            { name: "Attendance", path: "/admin/attendance", icon: "🗓️" },
            { name: "Exams", path: "/admin/exams", icon: "📝" },
            { name: "Fees", path: "/admin/fees", icon: "💰" },
            { name: "Placements", path: "/admin/placements", icon: "🏢" },
            { name: "Reports", path: "/admin/reports", icon: "📊" },
            { name: "Grievances", path: "/admin/grievances", icon: "⚠️" },
            { name: "Result Approval", path: "/admin/result", icon: "📝" },
            { name: "Attendance Analytics", path: "/admin/attendance", icon: "📊" },
            { name: "Leave Approval", path: "/admin/leaves", icon: "📝" },
        ],
        faculty: [
            { name: "Dashboard", path: "/faculty", icon: "🏠" },
            { name: "Attendance", path: "/faculty/attendance", icon: "🗓️" },
            { name: "Marks Entry", path: "/faculty/marks", icon: "✍️" },
        ],
        student: [
            { name: "Dashboard", path: "/student", icon: "🏠" },
            { name: "Attendance", path: "/student/attendance", icon: "🗓️" },
            { name: "Results", path: "/student/results", icon: "📄" },
            { name: "Fees", path: "/student/fees", icon: "💰" },
            { name: "Placements", path: "/student/placements", icon: "🏢" },
            { name: "Grievances", path: "/student/grievances", icon: "⚠️" },
            { name: "Leave Apply", path: "/student/leaves", icon: "📝" },
        ],
    };

    return (
        <aside
            className={`bg-blue-800 text-white min-h-screen transition-all duration-300 ${collapsed ? "w-16" : "w-64"
                }`}
        >
            <div className="p-4 text-center font-bold text-lg">
                {!collapsed && "College ERP"}
            </div>

            <nav className="space-y-1 px-2">
                {menus[user.role].map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        title={collapsed ? item.name : ""}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-2 rounded transition ${isActive ? "bg-blue-600" : "hover:bg-blue-700"
                            }`
                        }
                    >
                        <span className="text-lg">{item.icon}</span>
                        {!collapsed && <span>{item.name}</span>}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
