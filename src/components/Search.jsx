import { useState } from "react";

export default function Search() {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative inline-block">
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="p-2 text-gray-700 hover:text-orange-500"
            >
                <li className="border-2 border-orange-500 rounded-full p-2"><img src="/images/Icon.svg" alt="Icon" /></li>
            </button>
            {open && (
                <input
                    type="text"
                    placeholder="Search..."
                    className="absolute top-full mt-2 right-0 w-48 px-3 py-1 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
            )}
        </div>
    );
}
