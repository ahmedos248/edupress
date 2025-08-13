import React, { useState } from "react";

export default function Accordion2() {
    const [openIndex, setOpenIndex] = useState(0); // first one open by default

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const items = [
        { title: "What Does Royalty Free Mean?", content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.</p> },
        { title: "What Does Royalty Free Mean?", content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.</p> },
        { title: "What Does Royalty Free Mean?", content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.</p> },
        { title: "What Does Royalty Free Mean?", content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.</p> },
    ];

    return (
        <div className="w-full max-w-2xl mx-auto mt-8 rounded-xl">
            {items.map((item, index) => (
                <div key={index} className="my-4">
                    <button
                        onClick={() => toggleAccordion(index)}
                        className={`flex items-center bg-white justify-between w-full p-5 font-medium text-left ${index === openIndex ? "rounded-t-xl text-orange-500" : "rounded-xl"
                            }`}
                    >
                        <div className="space-x-4">
                            <span>{item.title}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
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
                        </div>
                    </button>

                    {openIndex === index && (
                        <div className="p-5 bg-white rounded-b-xl text-gray-600">{item.content}</div>
                    )}
                </div>
            ))}
        </div>
    );
}
