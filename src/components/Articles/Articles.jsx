import { useEffect, useState } from "react";

export default function Articles() {
    const article = [
        { image: "/images/article1.jpg" },
        { image: "/images/article2.jpg" },
        { image: "/images/article3.jpg" },
    ];
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        const date = new Date();
        const formatted = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        setCurrentDate(formatted);
    }, []);

    return (
        <section className="max-w-screen-xl mx-auto px-6 py-12 bg-white exo-text">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                <div>
                    <h2 className="text-3xl font-semibold">Latest articles</h2>
                    <p className="text-gray-500">Explore our Free Acticles</p>
                </div>
                <button className="mt-4 sm:mt-0 border border-black  rounded-full px-6 py-2 hover:border-orange-500 hover:bg-orange-500 hover:text-white transition">
                    All articles
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {article.map((course, idx) => (
                    <div key={idx} className="border group border-gray-200 rounded-2xl shadow hover:shadow-xl hover:-translate-y-4 transition overflow-hidden flex flex-col">
                        <div className="h-48 w-full">
                            <img src={course.image} alt={course.title} className="object-cover w-full h-full" />
                        </div>
                        <div className="p-4 flex-1 space-y-4">
                            <h4 className="w-80 h-14 text-lg font-semibold text-gray-800 mb-3 left-0 top-0 opacity-100 group-hover:text-orange-500 transition duration-300">
                                Best LearnPress WordPress Theme Collection for 2023
                            </h4>
                            <span className="flex items-center space-x-2 text-sm text-gray-600">
                                <i className="fa-regular fa-calendar text-orange-500"></i>
                                <span>{currentDate}</span>
                            </span>
                            <p className="text-gray-600">Looking for an amazing & well-functional LearnPress WordPress Theme?...</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
