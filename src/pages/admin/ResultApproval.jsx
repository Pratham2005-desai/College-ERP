import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";

/* ===== Dummy Result Data (Faculty Submitted) ===== */
const resultData = {
    "B.Sc CS": {
        "Sem 3": {
            subject: "Data Structures",
            students: [
                { id: 1, roll: "CS-S3-01", name: "Rohan Mehta", total: 82, grade: "A" },
                { id: 2, roll: "CS-S3-02", name: "Kavya Desai", total: 74, grade: "B+" },
            ],
        },
    },
    BCA: {
        "Sem 3": {
            subject: "Operating Systems",
            students: [
                { id: 3, roll: "BCA-S3-01", name: "Harsh Mehta", total: 65, grade: "B" },
                { id: 4, roll: "BCA-S3-02", name: "Aditi Joshi", total: 39, grade: "F" },
            ],
        },
    },
};

const ResultApproval = () => {
    const [course, setCourse] = useState("");
    const [semester, setSemester] = useState("");
    const [status, setStatus] = useState("Pending");

    const students =
        course && semester ? resultData[course][semester].students : [];

    const handleApprove = () => {
        setStatus("Approved");
        alert("Results Approved");
    };

    const handleReject = () => {
        setStatus("Rejected");
        alert("Results Rejected");
    };

    return (
        <DashboardLayout>
            <h1 className="text-3xl font-bold mb-4">Result Approval</h1>

            {/* ===== Controls ===== */}
            <div className="bg-white p-4 rounded shadow mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* Course */}
                <select
                    className="border p-2 rounded"
                    value={course}
                    onChange={(e) => {
                        setCourse(e.target.value);
                        setSemester("");
                        setStatus("Pending");
                    }}
                >
                    <option value="">Select Course</option>
                    {Object.keys(resultData).map((c) => (
                        <option key={c}>{c}</option>
                    ))}
                </select>

                {/* Semester */}
                <select
                    className="border p-2 rounded"
                    value={semester}
                    disabled={!course}
                    onChange={(e) => {
                        setSemester(e.target.value);
                        setStatus("Pending");
                    }}
                >
                    <option value="">Select Semester</option>
                    {course &&
                        Object.keys(resultData[course]).map((sem) => (
                            <option key={sem}>{sem}</option>
                        ))}
                </select>

                {/* Status */}
                <div className="flex items-center font-semibold">
                    Status:&nbsp;
                    <span
                        className={`${status === "Approved"
                                ? "text-green-600"
                                : status === "Rejected"
                                    ? "text-red-600"
                                    : "text-yellow-600"
                            }`}
                    >
                        {status}
                    </span>
                </div>
            </div>

            {/* ===== Result Table ===== */}
            {semester && (
                <div className="bg-white rounded shadow overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead className="bg-blue-100">
                            <tr>
                                <th className="border p-2">Roll No</th>
                                <th className="border p-2">Student Name</th>
                                <th className="border p-2 text-center">Total</th>
                                <th className="border p-2 text-center">Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((s) => (
                                <tr key={s.id}>
                                    <td className="border p-2">{s.roll}</td>
                                    <td className="border p-2">{s.name}</td>
                                    <td className="border p-2 text-center font-semibold">
                                        {s.total}
                                    </td>
                                    <td className="border p-2 text-center font-bold">
                                        {s.grade}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* ===== Actions ===== */}
            {semester && (
                <div className="mt-6 flex gap-4">
                    <button
                        onClick={handleApprove}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-semibold"
                    >
                        Approve Results
                    </button>

                    <button
                        onClick={handleReject}
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-semibold"
                    >
                        Reject Results
                    </button>
                </div>
            )}
        </DashboardLayout>
    );
};

export default ResultApproval;
