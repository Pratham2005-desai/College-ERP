import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";

/* ===== Dummy Attendance Data (Student Side) ===== */
const attendanceData = {
    "Sem 3": [
        {
            subject: "Data Structures",
            attended: 38,
            total: 45,
        },
        {
            subject: "DBMS",
            attended: 34,
            total: 45,
        },
        {
            subject: "Operating Systems",
            attended: 30,
            total: 45,
        },
    ],
    "Sem 2": [
        {
            subject: "Discrete Maths",
            attended: 40,
            total: 45,
        },
        {
            subject: "OOPs with Java",
            attended: 42,
            total: 45,
        },
    ],
};

const AttendanceView = () => {
    const [semester, setSemester] = useState("Sem 3");

    return (
        <DashboardLayout>
            <h1 className="text-3xl font-bold mb-4">My Attendance</h1>

            {/* ===== Semester Selector ===== */}
            <div className="mb-6 max-w-xs">
                <label className="block mb-1 font-semibold">Select Semester</label>
                <select
                    className="border p-2 rounded w-full"
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                >
                    {Object.keys(attendanceData).map((sem) => (
                        <option key={sem}>{sem}</option>
                    ))}
                </select>
            </div>

            {/* ===== Attendance Table ===== */}
            <div className="bg-white rounded shadow overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead className="bg-blue-100">
                        <tr>
                            <th className="border p-2">Subject</th>
                            <th className="border p-2 text-center">Attended</th>
                            <th className="border p-2 text-center">Total</th>
                            <th className="border p-2 text-center">Percentage</th>
                            <th className="border p-2 text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendanceData[semester].map((item, index) => {
                            const percent = Math.round(
                                (item.attended / item.total) * 100
                            );
                            const isLow = percent < 75;

                            return (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="border p-2">{item.subject}</td>
                                    <td className="border p-2 text-center">
                                        {item.attended}
                                    </td>
                                    <td className="border p-2 text-center">
                                        {item.total}
                                    </td>
                                    <td
                                        className={`border p-2 text-center font-semibold ${isLow ? "text-red-600" : "text-green-600"
                                            }`}
                                    >
                                        {percent}%
                                    </td>
                                    <td
                                        className={`border p-2 text-center font-bold ${isLow ? "text-red-600" : "text-green-600"
                                            }`}
                                    >
                                        {isLow ? "LOW" : "OK"}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* ===== Info ===== */}
            <p className="mt-4 text-gray-600">
                Attendance below <strong>75%</strong> may lead to exam disqualification.
            </p>
        </DashboardLayout>
    );
};

export default AttendanceView;
