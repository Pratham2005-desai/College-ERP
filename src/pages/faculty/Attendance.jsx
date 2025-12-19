import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";

/* ===== Course → Semester → Subject → Students (ERP Structure) ===== */
const courseData = {
    "B.Sc CS": {
        "Sem 1": {
            subjects: ["Programming Basics", "Maths I"],
            students: [
                { id: 1, name: "Aarav Patel", roll: "CS-S1-01" },
                { id: 2, name: "Diya Shah", roll: "CS-S1-02" },
            ],
        },
        "Sem 3": {
            subjects: ["Data Structures", "DBMS"],
            students: [
                { id: 3, name: "Rohan Mehta", roll: "CS-S3-01" },
                { id: 4, name: "Kavya Desai", roll: "CS-S3-02" },
            ],
        },
    },

    "B.Sc SM": {
        "Sem 1": {
            subjects: ["Statistics I", "Maths I"],
            students: [
                { id: 5, name: "Neha Shah", roll: "SM-S1-01" },
                { id: 6, name: "Yash Patel", roll: "SM-S1-02" },
            ],
        },
    },

    "BCA": {
        "Sem 3": {
            subjects: ["Operating Systems", "Java Programming"],
            students: [
                { id: 7, name: "Harsh Mehta", roll: "BCA-S3-01" },
                { id: 8, name: "Aditi Joshi", roll: "BCA-S3-02" },
            ],
        },
    },

    "B.Com": {
        "Sem 1": {
            subjects: ["Financial Accounting", "Business Economics"],
            students: [
                { id: 9, name: "Riya Desai", roll: "BCOM-S1-01" },
                { id: 10, name: "Kunal Shah", roll: "BCOM-S1-02" },
            ],
        },
    },

    "BBA": {
        "Sem 1": {
            subjects: ["Principles of Management", "Business Communication"],
            students: [
                { id: 11, name: "Sahil Patel", roll: "BBA-S1-01" },
                { id: 12, name: "Ananya Mehta", roll: "BBA-S1-02" },
            ],
        },
    },

    "M.Sc SM": {
        "Sem 1": {
            subjects: ["Advanced Statistics", "Data Analytics"],
            students: [
                { id: 13, name: "Parth Joshi", roll: "MSC-S1-01" },
                { id: 14, name: "Isha Shah", roll: "MSC-S1-02" },
            ],
        },
    },
};

const Attendance = () => {
    const [course, setCourse] = useState("");
    const [semester, setSemester] = useState("");
    const [subject, setSubject] = useState("");
    const [date, setDate] = useState("");
    const [attendance, setAttendance] = useState({});

    /* ===== Attendance Logic ===== */
    const markAttendance = (id, status) => {
        setAttendance((prev) => ({
            ...prev,
            [id]: status,
        }));
    };

    const markAll = (status) => {
        if (!course || !semester) return;
        const all = {};
        courseData[course][semester].students.forEach((s) => {
            all[s.id] = status;
        });
        setAttendance(all);
    };

    const students =
        course && semester ? courseData[course][semester].students : [];

    const presentCount = Object.values(attendance).filter(Boolean).length;
    const absentCount = students.length - presentCount;

    const handleSubmit = () => {
        if (!course || !semester || !subject || !date) {
            alert("Please select Course, Semester, Subject and Date");
            return;
        }

        console.log({
            course,
            semester,
            subject,
            date,
            attendance,
        });

        alert("Attendance submitted successfully (dummy)");
    };

    return (
        <DashboardLayout>
            <h1 className="text-3xl font-bold mb-4">Mark Attendance</h1>

            {/* ===== Controls ===== */}
            <div className="bg-white p-4 rounded shadow mb-6 grid grid-cols-1 md:grid-cols-6 gap-4">

                {/* Course */}
                <select
                    className="border p-2 rounded"
                    value={course}
                    onChange={(e) => {
                        setCourse(e.target.value);
                        setSemester("");
                        setSubject("");
                        setAttendance({});
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
                        setAttendance({});
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

                {/* Date */}
                <input
                    type="date"
                    className="border p-2 rounded"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />

                {/* Mark All */}
                <button
                    onClick={() => markAll(true)}
                    disabled={!semester}
                    className="bg-green-600 text-white rounded px-3 py-2 hover:bg-green-700 disabled:opacity-50"
                >
                    All Present
                </button>

                <button
                    onClick={() => markAll(false)}
                    disabled={!semester}
                    className="bg-red-600 text-white rounded px-3 py-2 hover:bg-red-700 disabled:opacity-50"
                >
                    All Absent
                </button>
            </div>

            {/* ===== Summary ===== */}
            {semester && (
                <div className="flex gap-4 mb-4">
                    <span className="bg-green-100 text-green-700 px-4 py-1 rounded">
                        Present: {presentCount}
                    </span>
                    <span className="bg-red-100 text-red-700 px-4 py-1 rounded">
                        Absent: {absentCount}
                    </span>
                </div>
            )}

            {/* ===== Attendance Table ===== */}
            {semester && (
                <div className="bg-white rounded shadow overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead className="bg-blue-100">
                            <tr>
                                <th className="border p-2">Roll No</th>
                                <th className="border p-2">Student Name</th>
                                <th className="border p-2 text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => {
                                const status = attendance[student.id];
                                return (
                                    <tr key={student.id}>
                                        <td className="border p-2">{student.roll}</td>
                                        <td className="border p-2">{student.name}</td>
                                        <td className="border p-2 text-center">
                                            <div className="flex justify-center gap-2">
                                                <button
                                                    onClick={() => markAttendance(student.id, true)}
                                                    className={`px-3 py-1 rounded ${status === true
                                                            ? "bg-green-600 text-white"
                                                            : "bg-green-100 text-green-700"
                                                        }`}
                                                >
                                                    Present
                                                </button>
                                                <button
                                                    onClick={() => markAttendance(student.id, false)}
                                                    className={`px-3 py-1 rounded ${status === false
                                                            ? "bg-red-600 text-white"
                                                            : "bg-red-100 text-red-700"
                                                        }`}
                                                >
                                                    Absent
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}

            {/* ===== Submit ===== */}
            {semester && (
                <div className="mt-6">
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold"
                    >
                        Submit Attendance
                    </button>
                </div>
            )}
        </DashboardLayout>
    );
};

export default Attendance;
