const StatCard = ({ title, value, icon, color }) => {
    return (
        <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4">
            <div
                className={`text-3xl p-3 rounded-full text-white ${color}`}
            >
                {icon}
            </div>
            <div>
                <p className="text-gray-500 text-sm">{title}</p>
                <h2 className="text-2xl font-bold">{value}</h2>
            </div>
        </div>
    );
};

export default StatCard;
