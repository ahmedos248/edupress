import React, { useState } from "react";

export default function Accordion() {
    const [openIndex, setOpenIndex] = useState(0); // first one open by default

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const items = Array.from({ length: 5 }, () => ({
        title: "Lessons with video content",
        content: (
            <div className="space-y-4">
                <div className="flex items-center justify-between p-2">
                    <div className="flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-6 h-6 fill-gray-700"
                        >
                            <path d="M10.6667 0.666748H2.66666C1.93333 0.666748 1.33333 1.26675 1.33333 2.00008V11.3334H2.66666V2.00008H10.6667V0.666748ZM10 3.33341L14 7.33341V14.0001C14 14.7334 13.4 15.3334 12.6667 15.3334H5.32666C4.59333 15.3334 3.99999 14.7334 3.99999 14.0001L4.00666 4.66675C4.00666 3.93341 4.59999 3.33341 5.33333 3.33341H10ZM9.33333 8.00008H13L9.33333 4.33341V8.00008Z" />
                        </svg>

                        <span className="text-sm">Lessons with video content</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <button className="bg-blue-500 text-white px-3 py-2 rounded-xl">
                            Preview
                        </button>
                        <span className="text-sm text-gray-600">12:30</span>
                        <i className="fa-solid fa-check text-gray-500"></i>
                    </div>
                </div>
                <div className="flex items-center justify-between p-2">
                    <div className="flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-6 h-6 fill-gray-700"
                        >
                            <path d="M10.6667 0.666748H2.66666C1.93333 0.666748 1.33333 1.26675 1.33333 2.00008V11.3334H2.66666V2.00008H10.6667V0.666748ZM10 3.33341L14 7.33341V14.0001C14 14.7334 13.4 15.3334 12.6667 15.3334H5.32666C4.59333 15.3334 3.99999 14.7334 3.99999 14.0001L4.00666 4.66675C4.00666 3.93341 4.59999 3.33341 5.33333 3.33341H10ZM9.33333 8.00008H13L9.33333 4.33341V8.00008Z" />
                        </svg>

                        <span className="text-sm">Lessons with video content</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <button className="bg-blue-500 text-white px-3 py-2 rounded-xl">
                            Preview
                        </button>
                        <span className="text-sm text-gray-600">12:30</span>
                        <i className="fa-solid fa-check text-gray-500"></i>
                    </div>
                </div>
                <div className="flex items-center justify-between p-2">
                    <div className="flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-6 h-6 fill-gray-700"
                        >
                            <path d="M10.6667 0.666748H2.66666C1.93333 0.666748 1.33333 1.26675 1.33333 2.00008V11.3334H2.66666V2.00008H10.6667V0.666748ZM10 3.33341L14 7.33341V14.0001C14 14.7334 13.4 15.3334 12.6667 15.3334H5.32666C4.59333 15.3334 3.99999 14.7334 3.99999 14.0001L4.00666 4.66675C4.00666 3.93341 4.59999 3.33341 5.33333 3.33341H10ZM9.33333 8.00008H13L9.33333 4.33341V8.00008Z" />
                        </svg>

                        <span className="text-sm">Lessons with video content</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <button className="bg-blue-500 text-white px-3 py-2 rounded-xl">
                            Preview
                        </button>
                        <span className="text-sm text-gray-600">12:30</span>
                        <i className="fa-solid fa-lock text-gray-500"></i>
                    </div>
                </div>
            </div>
        ),
    }));


    return (
        <div className="w-full max-w-2xl mx-auto mt-8 rounded-xl">
            {items.map((item, index) => (
                <div key={index} className="my-4">
                    <button
                        onClick={() => toggleAccordion(index)}
                        className={`flex items-center bg-white justify-between w-full p-5 font-medium text-left text-gray-500 ${index === openIndex ? "rounded-t-xl" : "rounded-xl"
                            }`}
                    >
                        <div className="flex items-center gap-2">
                            <svg
                                className={`w-3 h-3 transition-transform ${openIndex === index ? "rotate-180" : ""
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 10 6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5L5 1 1 5"
                                />
                            </svg>
                            <span>{item.title}</span>
                        </div>
                        <div className="space-x-4">
                            <span>5 Lessons</span>
                            <span>45 Mins</span>
                        </div>
                    </button>

                    {openIndex === index && (
                        <div className="p-5 bg-white rounded-b-xl">{item.content}</div>
                    )}
                </div>
            ))}
        </div>
    );
}
