
const Sidebar = ({ className = '' }) => {
    return (
        <aside className={`space-y-8 overflow-scroll custom-scroll bg-white/40 ${className}`}>
            <div>
                <h2 className="font-bold text-lg mb-4">Category</h2>
                <ul className="space-y-2 text-gray-600">
                    {[
                        "Commercial",
                        "Office",
                        "Shop",
                        "Educate",
                        "Academy",
                        "Single family home",
                    ].map((item) => (
                        <li key={item} className="flex justify-between">
                            <span>{item}</span>
                            <span>15</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2 className="font-bold text-lg mb-4">Recent Posts</h2>
                <div className="space-y-4">
                    {[
                        {
                            img: "/images/recent1.png",
                            text: "Best LearnPress WordPress Theme Collection For 2023",
                        },
                        {
                            img: "/images/recent2.png",
                            text: "Best LearnPress WordPress Theme Collection For 2023",
                        },
                        {
                            img: "/images/recent3.png",
                            text: "Best LearnPress WordPress Theme Collection For 2023",
                        },
                    ].map((post, index) => (
                        <div key={index} className="flex gap-3 group">
                            <img
                                src={post.img}
                                alt="post"
                                className="w-16 h-16 rounded-md object-cover"
                            />
                            <p className="md:text-sm text-xs font-medium group-hover:text-orange-500">{post.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="font-bold text-lg mb-4">Tags</h2>
                <div className="flex flex-wrap gap-2">
                    {[
                        "Free couses",
                        "Marketing",
                        "Idea",
                        "LMS",
                        "LearnPress",
                        "Instructor",
                    ].map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 rounded-md text-sm cursor-pointer hover:bg-gray-200"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </aside>
    );
};
export default Sidebar;
