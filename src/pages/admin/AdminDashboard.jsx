import DashboardLayout from "../../components/DashboardLayout";
import StatCard from "../../components/StatCard";

const AdminDashboard = () => {
    return (
        <DashboardLayout>
            <h1 className="text-3xl font-bold mb-1">Admin Dashboard</h1>
            <p className="text-gray-600 mb-6">
                Overview of college academic & administrative data
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard
                    title="Total Students"
                    value="1,240"
                    icon="🎓"
                    color="bg-blue-600"
                />
                <StatCard
                    title="Total Faculty"
                    value="85"
                    icon="👨‍🏫"
                    color="bg-green-600"
                />
                <StatCard
                    title="Courses Offered"
                    value="42"
                    icon="📚"
                    color="bg-purple-600"
                />
                <StatCard
                    title="Pending Grievances"
                    value="12"
                    icon="⚠️"
                    color="bg-red-600"
                />
                <StatCard
                    title="Fee Collection"
                    value="₹ 3.2 Cr"
                    icon="💰"
                    color="bg-yellow-500"
                />
                <StatCard
                    title="Placement Rate"
                    value="78%"
                    icon="🏢"
                    color="bg-indigo-600"
                />
            </div>
        </DashboardLayout>
    );
};

export default AdminDashboard;
