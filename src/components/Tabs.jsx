import React, { useState } from "react";
import Accordion from "./Accordion/Accordion";
import Comments from "./Comments";
import Accordion2 from "./Accordion/Accordion2";

function Overview() {
    return (
        <div className="space-y-8 py-10">
            <p>LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online. You can create a course curriculum with lessons & quizzes included which is managed with an easy-to-use interface for users. Having this WordPress LMS Plugin, now you have a chance to quickly and easily create education, online school, online-course websites with no coding knowledge required.</p>
            <p>LearnPress is free and always will be, but it is still a premium high-quality WordPress Plugin that definitely helps you with making money from your WordPress Based LMS. Just try and see how amazing it is. LearnPress WordPress Online Course plugin is lightweight and super powerful with lots of Add-Ons to empower its core system.How to use WPML Add-on for LearnPress?
                No comments yet! You be the first to comment.</p>
        </div>
    );
}

function Curriculum() {
    return (
        <div>
            <p>
                LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one
                of the best WordPress LMS Plugins which can be used to easily create & sell
                courses online.
            </p>
            <Accordion />
        </div>
    );
}

function Instructor() {
    return (
        <div>
            <div className="flex space-x-4">
                <img src="/images/p.svg" alt="" />
                <div>
                    <h2 className="text-lg font-semibold exo-text">ThimPress</h2>
                    <p className="text-gray-600">
                        LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.
                    </p>
                    <div className="mt-4 text-sm text-gray-500 space-y-4">
                        <div className="flex items-center space-x-1">
                            <i className="fa-solid fa-user-graduate text-orange-500"></i>
                            <span>156 Students</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <i className="fa-solid fa-file-lines text-orange-500"></i>
                            <span>20 Lessons</span>
                        </div>
                    </div>
                </div>
            </div>
            <p className="mt-4 text-gray-600">
                LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.
            </p>
            <div className="flex items-center space-x-3 mt-4">
                <span className="text-gray-500">Follow:</span>
                <i className="fa-brands fa-facebook-f text-gray-600 hover:text-orange-500 cursor-pointer"></i>
                <i className="fa-brands fa-pinterest-p text-gray-600 hover:text-orange-500 cursor-pointer"></i>
                <i className="fa-brands fa-x-twitter text-gray-600 hover:text-orange-500 cursor-pointer"></i>
                <i className="fa-brands fa-instagram text-gray-600 hover:text-orange-500 cursor-pointer"></i>
                <i className="fa-brands fa-youtube text-gray-600 hover:text-orange-500 cursor-pointer"></i>
            </div>
        </div>
    );
}

function FAQs() {
    return <Accordion2 />;
}

function Reviews() {
    return <Comments />;
}

export default function Tabs() {
    const tabs = [
        { label: "Overview", content: <Overview /> },
        { label: "Curriculum", content: <Curriculum /> },
        { label: "Instructor", content: <Instructor /> },
        { label: "FAQs", content: <FAQs /> },
        { label: "Reviews", content: <Reviews /> },
    ];

    const [activeIndex, setActiveIndex] = useState(0); // Curriculum active by default

    return (
        <div className="max-w-[850px] md:mt-6 lg:mt-0 border rounded-3xl overflow-hidden">
            <div className="flex border-b border-gray-200">
                {tabs.map((tab, index) => (
                    <button
                        key={tab.label}
                        onClick={() => setActiveIndex(index)}
                        className={`px-4 py-2 font-semibold exo-text w-[170px] h-[64px] md:text-base text-sm focus:outline-none ${activeIndex === index
                            ? "text-orange-500 bg-gray-100"
                            : "text-gray-700 hover:text-orange-500"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="bg-gray-100 p-6 text-gray-700">
                {tabs[activeIndex].content}
            </div>
        </div>
    );
}
