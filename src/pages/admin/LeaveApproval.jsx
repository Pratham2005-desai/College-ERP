import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";

/* ===== Dummy Leave Requests ===== */
const initialLeaves = [
    {
        id: 1,
        student: "Rohan Mehta",
        roll: "CS-S3-01",
        course: "B.Sc CS",
        semester: "Sem 3",
        from: "2025-03-10",
        to: "2025-03-12",
        reason: "Medical leave",
        status: "Pending",
    },
    {
        id: 2,
        student: "Aditi Joshi",
        roll: "BCA-S3-02",
        course: "BCA",
        semester: "Sem 3",
        from: "2025-03-15",
        to: "2025-03-16",
        reason: "Family function",
        status: "Pending",
    },
    {
        id: 3,
        student: "Kavya Desai",
        roll: "CS-S3-02",
        course: "B.Sc CS",
        semester: "Sem 3",
        from: "2025-03-01",
        to: "2025-03-01",
        reason: "Personal",
        status: "Approved",
    },
];

const LeaveApproval = () => {
    const [leaves, setLeaves] = useState(initialLeaves);
    const [filter, setFilter] = useState("All");

    const updateStatus = (id, status) => {
        setLeaves((prev) =>
            prev.map((l) =>
                l.id === id ? { ...l, status } : l
            )
        );
    };

    const filteredLeaves =
        filter === "All"
            ? leaves
            : leaves.filter((l) => l.status === filter);

    return (
        <DashboardLayout>
            <h1 className="text-3xl font-bold mb-4">Leave Approval</h1>

            {/* ===== Filter ===== */}
            <div className="mb-4 flex gap-4 items-center">
                <label className="font-semibold">Filter:</label>
                <select
                    className="border p-2 rounded"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option>All</option>
                    <option>Pending</option>
                    <option>Approved</option>
                    <option>Rejected</option>
                </select>
            </div>

            {/* ===== Leave Table ===== */}
            <div className="bg-white rounded shadow overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead className="bg-blue-100">
                        <tr>
                            <th className="border p-2">Student</th>
                            <th className="border p-2">Roll No</th>
                            <th className="border p-2">Course</th>
                            <th className="border p-2">Semester</th>
                            <th className="border p-2">From</th>
                            <th className="border p-2">To</th>
                            <th className="border p-2">Reason</th>
                            <th className="border p-2 text-center">Status</th>
                            <th className="border p-2 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredLeaves.map((leave) => (
                            <tr key={leave.id} className="hover:bg-gray-50">
                                <td className="border p-2">{leave.student}</td>
                                <td className="border p-2">{leave.roll}</td>
                                <td className="border p-2">{leave.course}</td>
                                <td className="border p-2">{leave.semester}</td>
                                <td className="border p-2">{leave.from}</td>
                                <td className="border p-2">{leave.to}</td>
                                <td className="border p-2">{leave.reason}</td>
                                <td
                                    className={`border p-2 text-center font-semibold ${leave.status === "Approved"
                                        ? "text-green-600"
                                        : leave.status === "Rejected"
                                            ? "text-red-600"
                                            : "text-yellow-600"
                                        }`}
                                >
                                    {leave.status}
                                </td>
                                <td className="border p-2 text-center">
                                    {leave.status === "Pending" ? (
                                        <div className="flex gap-2 justify-center">
                                            <button
                                                onClick={() =>
                                                    updateStatus(leave.id, "Approved")
                                                }
                                                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
                                            >
                                                Approve
                                            </button>
                                            <button
                                                onClick={() =>
                                                    updateStatus(leave.id, "Rejected")
                                                }
                                                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                                            >
                                                Reject
                                            </button>
                                        </div>
                                    ) : (
                                        "-"
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    );
};

export default LeaveApproval;
