import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";

/* ===== Dummy Result Data ===== */
const resultData = {
    "Sem 3": [
        { subject: "Data Structures", internal: 24, external: 56 },
        { subject: "DBMS", internal: 22, external: 50 },
        { subject: "Operating Systems", internal: 20, external: 48 },
    ],
    "Sem 2": [
        { subject: "Discrete Maths", internal: 26, external: 52 },
        { subject: "OOP with Java", internal: 25, external: 55 },
    ],
};

/* ===== Grade Logic ===== */
const getGrade = (total) => {
    if (total >= 90) return { grade: "A+", points: 10 };
    if (total >= 80) return { grade: "A", points: 9 };
    if (total >= 70) return { grade: "B+", points: 8 };
    if (total >= 60) return { grade: "B", points: 7 };
    if (total >= 50) return { grade: "C", points: 6 };
    if (total >= 40) return { grade: "D", points: 5 };
    return { grade: "F", points: 0 };
};

const ResultView = () => {
    const [semester, setSemester] = useState("Sem 3");

    const subjects = resultData[semester];

    const sgpa =
        subjects.reduce((sum, s) => {
            const total = s.internal + s.external;
            return sum + getGrade(total).points;
        }, 0) / subjects.length;

    return (
        <DashboardLayout>
            <h1 className="text-3xl font-bold mb-4">My Results</h1>

            {/* ===== Semester Selector ===== */}
            <div className="mb-6 max-w-xs">
                <label className="block mb-1 font-semibold">Select Semester</label>
                <select
                    className="border p-2 rounded w-full"
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                >
                    {Object.keys(resultData).map((sem) => (
                        <option key={sem}>{sem}</option>
                    ))}
                </select>
            </div>

            {/* ===== Result Table ===== */}
            <div className="bg-white rounded shadow overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead className="bg-blue-100">
                        <tr>
                            <th className="border p-2">Subject</th>
                            <th className="border p-2 text-center">Internal</th>
                            <th className="border p-2 text-center">External</th>
                            <th className="border p-2 text-center">Total</th>
                            <th className="border p-2 text-center">Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subjects.map((s, idx) => {
                            const total = s.internal + s.external;
                            const { grade } = getGrade(total);

                            return (
                                <tr key={idx} className="hover:bg-gray-50">
                                    <td className="border p-2">{s.subject}</td>
                                    <td className="border p-2 text-center">{s.internal}</td>
                                    <td className="border p-2 text-center">{s.external}</td>
                                    <td className="border p-2 text-center font-semibold">
                                        {total}
                                    </td>
                                    <td
                                        className={`border p-2 text-center font-bold ${grade === "F"
                                            ? "text-red-600"
                                            : "text-green-600"
                                            }`}
                                    >
                                        {grade}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* ===== SGPA ===== */}
            <div className="mt-6 bg-white p-5 rounded shadow max-w-sm">
                <p className="text-gray-600 text-sm">Semester GPA (SGPA)</p>
                <h2 className="text-3xl font-bold text-blue-600">
                    {sgpa.toFixed(2)}
                </h2>
            </div>
        </DashboardLayout>
    );
};

export default ResultView;
