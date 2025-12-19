import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./sidebar";

const DashboardLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="flex">
            <Sidebar collapsed={collapsed} />

            <div className="flex-1 min-h-screen bg-gray-100">
                <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
                <main className="p-6">{children}</main>
            </div>
        </div>
    );
};

export default DashboardLayout;
