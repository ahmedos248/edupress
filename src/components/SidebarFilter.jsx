import { useState } from "react";

const SidebarFilter = ({ className = '' }) => {
    const [selected, setSelected] = useState({
        category: ["Shop", "Academy"],
        instructors: [],
        price: ["All"],
        review: [4],
        level: ["Intermidiate"],
    });

    const toggle = (section, value) => {
        setSelected((prev) => {
            const current = prev[section];
            const newValues = current.includes(value)
                ? current.filter((v) => v !== value)
                : [...current, value];
            return { ...prev, [section]: newValues };
        });
    };

    const Checkbox = ({ label, section }) => (
        <div className="flex items-center justify-between">
            <label className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={selected[section].includes(label)}
                    onChange={() => toggle(section, label)}
                    className="accent-gray-500"
                />
                {label}
            </label>
            <span className="text-sm text-gray-500">15</span>
        </div>
    );

    const ReviewRow = ({ stars }) => (
        <div className="flex items-center justify-between">
            <label className="flex items-center gap-1">
                <input
                    type="checkbox"
                    checked={selected.review.includes(stars)}
                    onChange={() => toggle("review", stars)}
                    className="accent-gray-500"
                />
                {Array.from({ length: 5 }, (_, i) => (
                    <span
                        key={i}
                        className={`fa-star fa ${i < stars ? "text-yellow-400" : "text-gray-300"
                            }`}
                    ></span>
                ))}
            </label>
            <span className="text-sm text-gray-500">(1,025)</span>
        </div>
    );

    return (
        <div className={`space-y-6 text-sm font-medium p-4 max-w-xs ${className}`}>
            <div className="space-y-4">
                <h3 className="font-bold mb-2">Course Category</h3>
                {[
                    "Commercial",
                    "Office",
                    "Shop",
                    "Educate",
                    "Academy",
                    "Single family home",
                    "Studio",
                    "University",
                ].map((label) => (
                    <Checkbox key={label} label={label} section="category" />
                ))}
            </div>

            <div className="space-y-4">
                <h3 className="font-bold mb-2">Instructors</h3>
                {["Kenny White", "John Doe"].map((label) => (
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
                {["All levels", "Beginner", "Intermidiate", "Expert"].map((label) => (
                    <Checkbox key={label} label={label} section="level" />
                ))}
            </div>
        </div>
    );
};

export default SidebarFilter;
