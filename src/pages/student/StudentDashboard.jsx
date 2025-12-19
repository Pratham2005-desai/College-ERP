import DashboardLayout from "../../components/DashboardLayout";
import StatCard from "../../components/StatCard";

const StudentDashboard = () => {
    return (
        <DashboardLayout>
            <h1 className="text-3xl font-bold mb-2">Student Dashboard</h1>
            <p className="text-gray-600 mb-6">
                Overview of your academic information
            </p>

            {/* ===== Stats Cards ===== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <StatCard
                    title="Attendance"
                    value="82%"
                    icon="📊"
                    color="bg-green-600"
                />
                <StatCard
                    title="Current GPA"
                    value="7.8"
                    icon="🎓"
                    color="bg-blue-600"
                />
                <StatCard
                    title="Pending Fees"
                    value="₹ 12,000"
                    icon="💰"
                    color="bg-red-600"
                />
                <StatCard
                    title="Leaves Applied"
                    value="3"
                    icon="📝"
                    color="bg-purple-600"
                />
                <StatCard
                    title="Approved Leaves"
                    value="2"
                    icon="✅"
                    color="bg-green-700"
                />
                <StatCard
                    title="Semester"
                    value="Sem 3"
                    icon="📘"
                    color="bg-indigo-600"
                />
            </div>

            {/* ===== Quick Info Panels ===== */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Profile */}
                <div className="bg-white p-6 rounded shadow">
                    <h2 className="text-xl font-semibold mb-3">My Profile</h2>
                    <p><strong>Name:</strong> Rohan Mehta</p>
                    <p><strong>Roll No:</strong> CS-S3-01</p>
                    <p><strong>Course:</strong> B.Sc CS</p>
                    <p><strong>Semester:</strong> Sem 3</p>
                </div>

                {/* Notices */}
                <div className="bg-white p-6 rounded shadow">
                    <h2 className="text-xl font-semibold mb-3">Notices</h2>
                    <ul className="list-disc ml-5 text-gray-700 space-y-1">
                        <li>Mid-sem exams start from 20 March</li>
                        <li>Last date for fee payment: 25 March</li>
                        <li>Project submission deadline: 30 March</li>
                    </ul>
                </div>

            </div>
        </DashboardLayout>
    );
};

export default StudentDashboard;
