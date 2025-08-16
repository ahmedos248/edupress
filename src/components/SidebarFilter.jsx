const SidebarFilter = ({ className = '', filters, setFilters }) => {
    const toggle = (section, value) => {
        setFilters((prev) => {
            const current = prev[section] || [];
            const newValues = current.includes(value)
                ? current.filter((v) => v !== value)
                : [...current, value];
            return { ...prev, [section]: newValues };
        });
    };

    const Checkbox = ({ label, section }) => (
        <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
                <input
                    type="checkbox"
                    checked={filters[section]?.includes(label) || false}
                    onChange={() => toggle(section, label)}
                    className="accent-gray-500"
                />
                {label}
            </label>
        </div>
    );

    const ReviewRow = ({ stars }) => (
        <div className="flex items-center justify-between">
            <label className="flex items-center gap-1 cursor-pointer">
                <input
                    type="checkbox"
                    checked={filters.review?.includes(stars) || false}
                    onChange={() => toggle("review", stars)}
                    className="accent-gray-500"
                />
                {Array.from({ length: 5 }, (_, i) => (
                    <span
                        key={i}
                        className={`fa-star fa ${i < stars ? "text-yellow-400" : "text-gray-300"}`}
                    ></span>
                ))}
            </label>
        </div>
    );

    return (
        <div className={`space-y-6 text-sm font-medium p-4 max-w-xs ${className}`}>
            <div className="space-y-4">
                <h3 className="font-bold mb-2">Course Category</h3>
                {["Web Development", "Programming", "Design", "Data Science", "Marketing", "Artificial Intelligence"].map((label) => (
                    <Checkbox key={label} label={label} section="category" />
                ))}
            </div>
            <div className="space-y-4">
                <h3 className="font-bold mb-2">Instructors</h3>
                {["Omar Assem", "Ahmed Osama", "Mohamed sherif", "Saleh Mohamed"].map((label) => (
                    <Checkbox key={label} label={label} section="instructors" />
                ))}
            </div>
            <div className="space-y-4">
                <h3 className="font-bold mb-2">Price</h3>
                {["All", "Free", "Paid"].map((label) => (
                    <Checkbox key={label} label={label} section="price" />
                ))}
            </div>
            <div className="space-y-4">
                <h3 className="font-bold mb-2">Review</h3>
                {[5, 4, 3, 2, 1].map((stars) => (
                    <ReviewRow key={stars} stars={stars} />
                ))}
            </div>
            <div className="space-y-4">
                <h3 className="font-bold mb-2">Level</h3>
                {["Beginner", "Intermediate", "Expert"].map((label) => (
                    <Checkbox key={label} label={label} section="level" />
                ))}
            </div>
        </div>
    );
};

export default SidebarFilter;
