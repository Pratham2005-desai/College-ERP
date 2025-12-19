import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === "admin@college.edu" && password === "admin123") {
            login({ role: "admin", email });
            navigate("/admin");
        }
        else if (email === "faculty@college.edu" && password === "faculty6969") {
            login({ role: "faculty", email });
            navigate("/faculty");
        }
        else if (email === "student@college.edu" && password === "student9876") {
            login({ role: "student", email });
            navigate("/student");
        }
        else {
            alert("Invalid credentials");
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

                {/* Demo Credentials */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-5 text-sm">
                    <h3 className="font-semibold text-blue-700 mb-2">
                        Demo Login Credentials
                    </h3>
                    <ul className="text-gray-700 space-y-1">
                        <li>
                            <strong>Admin:</strong> admin@college.edu / admin123
                        </li>
                        <li>
                            <strong>Faculty:</strong> faculty@college.edu / faculty123
                        </li>
                        <li>
                            <strong>Student:</strong> student@college.edu / student123
                        </li>
                    </ul>
                </div>

                <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
                    College ERP Login
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="user@college.edu"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-4">
                    © 2025 College ERP System
                </p>
            </div>
        </div>
    );

};

export default Login;
