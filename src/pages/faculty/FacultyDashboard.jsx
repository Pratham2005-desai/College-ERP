import DashboardLayout from "../../components/DashboardLayout";
import StatCard from "../../components/StatCard";

const FacultyDashboard = () => {
    return (
        <DashboardLayout>
            <h1 className="text-3xl font-bold mb-1">Faculty Dashboard</h1>
            <p className="text-gray-600 mb-6">
                Manage classes, attendance, and assessments
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard
                    title="Assigned Subjects"
                    value="5"
                    icon="📘"
                    color="bg-blue-600"
                />
                <StatCard
                    title="Today's Classes"
                    value="3"
                    icon="🗓️"
                    color="bg-green-600"
                />
                <StatCard
                    title="Attendance Pending"
                    value="2"
                    icon="⏳"
                    color="bg-yellow-500"
                />
                <StatCard
                    title="Marks Pending"
                    value="4"
                    icon="✍️"
                    color="bg-red-600"
                />
                <StatCard
                    title="Total Students"
                    value="180"
                    icon="🎓"
                    color="bg-purple-600"
                />
            </div>
        </DashboardLayout>
    );
};

export default FacultyDashboard;
