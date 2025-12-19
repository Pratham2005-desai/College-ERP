import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";

/* ===== Dummy Attendance Data ===== */
const attendanceData = {
    "B.Sc CS": {
        "Sem 3": {
            "Data Structures": [
                { id: 1, roll: "CS-S3-01", name: "Rohan Mehta", present: 42, total: 50 },
                { id: 2, roll: "CS-S3-02", name: "Kavya Desai", present: 38, total: 50 },
                { id: 3, roll: "CS-S3-03", name: "Amit Shah", present: 30, total: 50 },
            ],
        },
    },
    BCA: {
        "Sem 3": {
            "Operating Systems": [
                { id: 4, roll: "BCA-S3-01", name: "Harsh Mehta", present: 45, total: 50 },
                { id: 5, roll: "BCA-S3-02", name: "Aditi Joshi", present: 28, total: 50 },
            ],
        },
    },
};

const AttendanceAnalytics = () => {
    const [course, setCourse] = useState("");
    const [semester, setSemester] = useState("");
    const [subject, setSubject] = useState("");

    const students =
        course && semester && subject
            ? attendanceData[course][semester][subject]
            : [];

    const avgAttendance =
        students.length > 0
            ? Math.round(
                students.reduce(
                    (sum, s) => sum + (s.present / s.total) * 100,
                    0
                ) / students.length
            )
            : 0;

    return (
        <DashboardLayout>
            <h1 className="text-3xl font-bold mb-4">Attendance Analytics</h1>

            {/* ===== Filters ===== */}
            <div className="bg-white p-4 rounded shadow mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* Course */}
                <select
                    className="border p-2 rounded"
                    value={course}
                    onChange={(e) => {
                        setCourse(e.target.value);
                        setSemester("");
                        setSubject("");
                    }}
                >
                    <option value="">Select Course</option>
                    {Object.keys(attendanceData).map((c) => (
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
                        setSubject("");
                    }}
                >
                    <option value="">Select Semester</option>
                    {course &&
                        Object.keys(attendanceData[course]).map((sem) => (
                            <option key={sem}>{sem}</option>
                        ))}
                </select>

                {/* Subject */}
                <select
                    className="border p-2 rounded"
                    value={subject}
                    disabled={!semester}
                    onChange={(e) => setSubject(e.target.value)}
                >
                    <option value="">Select Subject</option>
                    {course &&
                        semester &&
                        Object.keys(attendanceData[course][semester]).map((sub) => (
                            <option key={sub}>{sub}</option>
                        ))}
                </select>
            </div>

            {/* ===== Summary ===== */}
            {subject && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white p-5 rounded shadow">
                        <p className="text-gray-500 text-sm">Average Attendance</p>
                        <h2 className="text-3xl font-bold text-blue-600">
                            {avgAttendance}%
                        </h2>
                    </div>

                    <div className="bg-white p-5 rounded shadow">
                        <p className="text-gray-500 text-sm">Total Students</p>
                        <h2 className="text-3xl font-bold">
                            {students.length}
                        </h2>
                    </div>

                    <div className="bg-white p-5 rounded shadow">
                        <p className="text-gray-500 text-sm">Low Attendance (&lt; 75%)</p>
                        <h2 className="text-3xl font-bold text-red-600">
                            {students.filter(
                                (s) => (s.present / s.total) * 100 < 75
                            ).length}
                        </h2>
                    </div>
                </div>
            )}

            {/* ===== Table ===== */}
            {subject && (
                <div className="bg-white rounded shadow overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead className="bg-blue-100">
                            <tr>
                                <th className="border p-2">Roll No</th>
                                <th className="border p-2">Student Name</th>
                                <th className="border p-2 text-center">Present</th>
                                <th className="border p-2 text-center">Total</th>
                                <th className="border p-2 text-center">Percentage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((s) => {
                                const percent = Math.round((s.present / s.total) * 100);
                                return (
                                    <tr key={s.id}>
                                        <td className="border p-2">{s.roll}</td>
                                        <td className="border p-2">{s.name}</td>
                                        <td className="border p-2 text-center">{s.present}</td>
                                        <td className="border p-2 text-center">{s.total}</td>
                                        <td
                                            className={`border p-2 text-center font-semibold ${percent < 75
                                                    ? "text-red-600"
                                                    : "text-green-600"
                                                }`}
                                        >
                                            {percent}%
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </DashboardLayout>
    );
};

export default AttendanceAnalytics;
