import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = ({ collapsed, setCollapsed }) => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav className="flex justify-between items-center bg-blue-700 px-6 py-3 text-white shadow">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded"
                >
                    ☰
                </button>
                <span className="text-xl font-semibold hidden sm:block">
                    College ERP
                </span>
            </div>

            <div className="flex items-center gap-4">
                <div className="text-sm text-right">
                    <div className="font-medium capitalize">{user?.role}</div>
                    <div className="text-xs opacity-80">{user?.email}</div>
                </div>

                <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 px-4 py-1.5 rounded text-sm font-semibold"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
