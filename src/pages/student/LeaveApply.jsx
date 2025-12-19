import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";

/* ===== Dummy Leave History ===== */
const initialLeaves = [
    {
        id: 1,
        type: "Medical",
        from: "2025-03-01",
        to: "2025-03-02",
        reason: "Fever",
        status: "Approved",
    },
];

const LeaveApply = () => {
    const [leaves, setLeaves] = useState(initialLeaves);
    const [type, setType] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [reason, setReason] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!type || !from || !to || !reason) {
            alert("Please fill all fields");
            return;
        }

        const newLeave = {
            id: Date.now(),
            type,
            from,
            to,
            reason,
            status: "Pending",
        };

        setLeaves([...leaves, newLeave]);
        setType("");
        setFrom("");
        setTo("");
        setReason("");

        alert("Leave applied successfully");
    };

    return (
        <DashboardLayout>
            <h1 className="text-3xl font-bold mb-4">Apply Leave</h1>

            {/* ===== Leave Form ===== */}
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow mb-8 max-w-xl"
            >
                <div className="mb-4">
                    <label className="block mb-1 font-semibold">Leave Type</label>
                    <select
                        className="border p-2 rounded w-full"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="">Select Type</option>
                        <option>Medical</option>
                        <option>Personal</option>
                        <option>Family Function</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block mb-1 font-semibold">From</label>
                        <input
                            type="date"
                            className="border p-2 rounded w-full"
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-semibold">To</label>
                        <input
                            type="date"
                            className="border p-2 rounded w-full"
                            value={to}
                            onChange={(e) => setTo(e.target.value)}
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block mb-1 font-semibold">Reason</label>
                    <textarea
                        className="border p-2 rounded w-full"
                        rows="3"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold"
                >
                    Submit Leave
                </button>
            </form>

            {/* ===== Leave History ===== */}
            <div className="bg-white rounded shadow overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead className="bg-blue-100">
                        <tr>
                            <th className="border p-2">Type</th>
                            <th className="border p-2">From</th>
                            <th className="border p-2">To</th>
                            <th className="border p-2">Reason</th>
                            <th className="border p-2 text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaves.map((l) => (
                            <tr key={l.id}>
                                <td className="border p-2">{l.type}</td>
                                <td className="border p-2">{l.from}</td>
                                <td className="border p-2">{l.to}</td>
                                <td className="border p-2">{l.reason}</td>
                                <td
                                    className={`border p-2 text-center font-semibold ${l.status === "Approved"
                                        ? "text-green-600"
                                        : l.status === "Rejected"
                                            ? "text-red-600"
                                            : "text-yellow-600"
                                        }`}
                                >
                                    {l.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    );
};

export default LeaveApply;
