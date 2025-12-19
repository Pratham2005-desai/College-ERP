import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";

/* ===== Grade Calculation Logic ===== */
const getGrade = (total) => {
    if (total >= 90) return "A+";
    if (total >= 80) return "A";
    if (total >= 70) return "B+";
    if (total >= 60) return "B";
    if (total >= 50) return "C";
    if (total >= 40) return "D";
    return "F";
};

/* ===== Course → Semester → Subject → Students ===== */
const courseData = {
    "B.Sc CS": {
        "Sem 3": {
            subjects: ["Data Structures", "DBMS"],
            students: [
                { id: 1, name: "Rohan Mehta", roll: "CS-S3-01" },
                { id: 2, name: "Kavya Desai", roll: "CS-S3-02" },
            ],
        },
    },
    "BCA": {
        "Sem 3": {
            subjects: ["Operating Systems", "Java Programming"],
            students: [
                { id: 3, name: "Harsh Mehta", roll: "BCA-S3-01" },
                { id: 4, name: "Aditi Joshi", roll: "BCA-S3-02" },
            ],
        },
    },
};

const MarksEntry = () => {
    const [course, setCourse] = useState("");
    const [semester, setSemester] = useState("");
    const [subject, setSubject] = useState("");
    const [marks, setMarks] = useState({});

    const students =
        course && semester ? courseData[course][semester].students : [];

    const handleMarksChange = (id, field, value) => {
        setMarks((prev) => ({
            ...prev,
            [id]: {
                ...prev[id],
                [field]: Number(value),
            },
        }));
    };

    const handleSubmit = () => {
        if (!course || !semester || !subject) {
            alert("Please select Course, Semester and Subject");
            return;
        }

        console.log({
            course,
            semester,
            subject,
            marks,
        });

        alert("Marks submitted successfully (dummy)");
    };

    return (
        <DashboardLayout>
            <h1 className="text-3xl font-bold mb-4">Marks Entry</h1>

            {/* ===== Controls ===== */}
            <div className="bg-white p-4 rounded shadow mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">

                {/* Course */}
                <select
                    className="border p-2 rounded"
                    value={course}
                    onChange={(e) => {
                        setCourse(e.target.value);
                        setSemester("");
                        setSubject("");
                        setMarks({});
                    }}
                >
                    <option value="">Select Course</option>
                    {Object.keys(courseData).map((c) => (
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
                        setMarks({});
                    }}
                >
                    <option value="">Select Semester</option>
                    {course &&
                        Object.keys(courseData[course]).map((sem) => (
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
                        courseData[course][semester].subjects.map((sub) => (
                            <option key={sub}>{sub}</option>
                        ))}
                </select>
            </div>

            {/* ===== Marks Table ===== */}
            {semester && subject && (
                <div className="bg-white rounded shadow overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead className="bg-blue-100">
                            <tr>
                                <th className="border p-2">Roll No</th>
                                <th className="border p-2">Student Name</th>
                                <th className="border p-2 text-center">Internal (30)</th>
                                <th className="border p-2 text-center">External (70)</th>
                                <th className="border p-2 text-center">Total</th>
                                <th className="border p-2 text-center">Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => {
                                const internal = marks[student.id]?.internal || 0;
                                const external = marks[student.id]?.external || 0;
                                const total = internal + external;
                                const grade = getGrade(total);

                                return (
                                    <tr key={student.id} className="hover:bg-gray-50">
                                        <td className="border p-2">{student.roll}</td>
                                        <td className="border p-2">{student.name}</td>

                                        <td className="border p-2 text-center">
                                            <input
                                                type="number"
                                                min="0"
                                                max="30"
                                                className="border rounded p-1 w-20 text-center"
                                                value={internal}
                                                onChange={(e) =>
                                                    handleMarksChange(
                                                        student.id,
                                                        "internal",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </td>

                                        <td className="border p-2 text-center">
                                            <input
                                                type="number"
                                                min="0"
                                                max="70"
                                                className="border rounded p-1 w-20 text-center"
                                                value={external}
                                                onChange={(e) =>
                                                    handleMarksChange(
                                                        student.id,
                                                        "external",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </td>

                                        <td className="border p-2 text-center font-semibold">
                                            {total}
                                        </td>

                                        <td
                                            className={`border p-2 text-center font-bold ${total >= 70
                                                    ? "text-green-600"
                                                    : total >= 40
                                                        ? "text-yellow-600"
                                                        : "text-red-600"
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
            )}

            {/* ===== Submit ===== */}
            {semester && subject && (
                <div className="mt-6">
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold"
                    >
                        Submit Marks
                    </button>
                </div>
            )}
        </DashboardLayout>
    );
};

export default MarksEntry;
