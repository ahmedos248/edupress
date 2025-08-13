import React, { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'


const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(0); // first one open by default

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const col1 = [];
    const col2 = [];

    const items = [
        { title: "What Does Royalty Free Mean?", content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.</p> },
        { title: "What Does Royalty Free Mean?", content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.</p> },
        { title: "What Does Royalty Free Mean?", content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.</p> },
        { title: "What Does Royalty Free Mean?", content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.</p> },
        { title: "What Does Royalty Free Mean?", content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.</p> },
        { title: "What Does Royalty Free Mean?", content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.</p> },
        { title: "What Does Royalty Free Mean?", content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.</p> },
        { title: "What Does Royalty Free Mean?", content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.</p> },
    ];

    items.forEach((item, i) => {
        (i % 2 === 0 ? col1 : col2).push(item);
    });

    return (
        <div>
            <Breadcrumb />
            <div className='max-w-screen-xl mx-auto p-6 pb-0'>
                <h1 className='text-4xl font-semibold'>FAQs</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
                    {[col1, col2].map((col, colIndex) => (
                        <div key={colIndex} className="space-y-8">
                            {col.map((item, idx) => {
                                const actualIndex = colIndex === 0 ? idx * 2 : idx * 2 + 1;
                                return (
                                    <div key={actualIndex}>
                                        <button
                                            onClick={() => toggleAccordion(actualIndex)}
                                            className={`flex items-center justify-between w-full p-5 font-medium text-left bg-gray-200 ${openIndex === actualIndex ? "rounded-t-xl text-orange-500" : "rounded-xl"
                                                }`}
                                        >
                                            <span>{item.title}</span>
                                            <svg
                                                className={`w-3 h-3 transition-transform ${openIndex === actualIndex ? "rotate-180" : ""
                                                    }`}
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                viewBox="0 0 10 6"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5L5 1 1 5" />
                                            </svg>
                                        </button>
                                        {openIndex === actualIndex && (
                                            <div className="p-5 rounded-b-xl text-gray-600 bg-gray-200">
                                                {item.content}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
                <img src="/images/FAQs.svg" alt="" className='mt-14' />
            </div>
        </div>
    )
}

export default FAQs
