export default function FeaturedCourses() {
    const courses = [
        { image: "/images/Image1.jpg", price: "$29.0", disc: "Free" },
        { image: "/images/Image2.jpg", price: "$59.0", disc1: "$49.0" },
        { image: "/images/Image3.jpg", price: "$29.0", disc: "Free" },
        { image: "/images/Image4.jpg", price: "$29.0", disc: "Free" },
        { image: "/images/Image5.jpg", price: "$29.0", disc: "Free" },
        { image: "/images/Image6.jpg", price: "$29.0", disc: "Free" },
    ];

    return (
        <section className="max-w-screen-xl mx-auto px-6 py-12 bg-white exo-text">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                <div>
                    <h2 className="text-3xl font-semibold">Featured Courses</h2>
                    <p className="text-gray-500">Explore our Popular Courses</p>
                </div>
                <button className="mt-4 sm:mt-0 border border-black  rounded-full px-6 py-2 hover:border-orange-500 hover:bg-orange-500 hover:text-white transition">
                    All Courses
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course, idx) => (
                    <div key={idx} className="border group border-gray-200 rounded-2xl shadow hover:shadow-xl hover:-translate-y-4 transition overflow-hidden flex flex-col">
                        <div className="relative h-48 w-full">
                            <img src={course.image} alt={course.title} className="object-cover w-full h-full" />
                            <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-2 rounded-xl">
                                Photography
                            </span>
                        </div>
                        <div className="p-4 flex-1">
                            <p className="text-sm mb-1"> <span className="text-gray-600">by</span> Determined-Poitras</p>

                            <h3 className="relative w-80 h-14 text-lg font-semibold text-gray-800 mb-3">
                                <span className="absolute left-0 top-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300">Create an LMS Website with LearnPress</span>
                                <span className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-orange-500">Design a website with ThimPress</span>
                            </h3>

                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <span className="flex items-center space-x-1">
                                    <i className="fa-regular fa-clock text-orange-500"></i>
                                    <span>2 Weeks</span>
                                </span>
                                <span className="flex items-center space-x-1">
                                    <i className="fa-solid fa-graduation-cap text-orange-500"></i>
                                    <span>156 Students</span>
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center px-4 py-3 border-t text-sm text-gray-700">
                            <span className="font-semibold text-gray-700 space-x-2">
                                {course.disc && (
                                    <>
                                        <s className="text-gray-400">{course.price}</s>
                                        <span className="text-green-500">{course.disc}</span>
                                    </>
                                )}
                                {course.disc1 && (
                                    <>
                                        <s className="text-gray-400">{course.price}</s>
                                        <span className="text-red-500">{course.disc1}</span>
                                    </>
                                )}
                                {!course.disc && !course.disc1 && (
                                    <span className="text-orange-500">{course.price}</span>
                                )}
                            </span>
                            <button className="text-gray-500 hover:underline font-medium">View More</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
