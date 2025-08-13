import { Link } from "react-router-dom";

export default function CourseCard1({ course }) {
    return (
        <Link
            to={`/courses/${course.id}`}
            state={{ course }}
            className="border group border-gray-200 rounded-2xl shadow hover:shadow-xl hover:-translate-y-4 transition overflow-hidden flex flex-col lg:col-span-1 col-span-2"
        >
            <div className="relative max-h-[292px] w-full">
                <img src={course.image} alt={course.title} className="object-cover w-full h-full" />
                <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-2 rounded-xl">
                    Photography
                </span>
            </div>
            <div className="p-4 flex-1 ">
                <p className="text-sm mb-4"> <span className="text-gray-600">by</span> Determined-Poitras</p>

                <h3 className="relative h-14 md:text-lg text-sm font-semibold text-gray-800 mb-3">
                    <span className="absolute left-0 top-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300">Create an LMS Website with LearnPress</span>
                    <span className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-orange-500">Design a website with ThimPress</span>
                </h3>

                <div className="flex items-center space-x-4 md:text-sm text-xs text-gray-500 ">
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
            <div className="flex justify-between items-center px-4 py-3 border-t md:text-sm text-xs text-gray-700">
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
                <button className="hover:underline font-medium">View More</button>
            </div>
        </Link>
    );
}

