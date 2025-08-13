export default function Categories() {
    const categories = [
        { icon: "fa-solid fa-laptop-code", title: "Development" },
        { icon: "fa-solid fa-chart-line", title: "Business" },
        { icon: "fa-solid fa-palette", title: "Design" },
        { icon: "fa-solid fa-language", title: "Languages" },
        { icon: "fa-solid fa-calculator", title: "Mathematics" },
        { icon: "fa-solid fa-dna", title: "Science" },
        { icon: "fa-solid fa-music", title: "Music" },
        { icon: "fa-solid fa-heartbeat", title: "Health" },
        { icon: "fa-solid fa-camera", title: "Photography" },
        { icon: "fa-solid fa-brain", title: "Psychology" },
    ];

    return (
        <section className="max-w-screen-xl mx-auto px-6 py-12 mt-10 bg-white">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                <div>
                    <h2 className="text-3xl font-semibold text-gray-800">Top Categories</h2>
                    <p className="text-gray-500">Explore our Popular Categories</p>
                </div>
                <button className="mt-4 sm:mt-0 border border-black text-black rounded-full px-6 py-2 hover:border-orange-500 hover:bg-orange-500 hover:text-white transition">
                    All Categories
                </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {categories.map((cat, idx) => (
                    <div key={idx} className="border space-y-4 border-gray-200 rounded-3xl px-4 py-14 flex flex-col items-center text-center shadow-sm hover:shadow-lg hover:-translate-y-4 transition">
                        <div className="text-orange-500 text-3xl">
                            <i className={cat.icon}></i>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">{cat.title}</h3>
                        <p className="text-sm text-gray-500">38 Courses</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
