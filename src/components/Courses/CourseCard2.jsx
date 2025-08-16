import { Link } from "react-router-dom";

export default function CourseCard2({ course }) {
    return (
        <Link
            to={`/courses/${course.id}`}
            state={{ course }}
            className="border relative group h-[250px] border-gray-200 rounded-2xl shadow hover:shadow-xl hover:-translate-y-4 transition overflow-hidden flex p-0 col-span-2"
        >
            <div className="lg:relative absolute lg:h-[250px] lg:w-[410px] w-full h-full ">
                <img src={course.image} alt={course.title} className="object-cover w-full h-full lg:opacity-100 opacity-25" />
                <span className="absolute md:block hidden top-3 lg:left-3 lg:right-auto right-3 bg-black text-white text-xs px-3 py-2 rounded-xl">
                    Photography
                </span>
            </div>
            <div className="relative p-4 pb-0 w-[580px] flex flex-col md:justify-between space-y-4 z-10">
                <span className="md:hidden w-24 bg-black text-center text-white text-xs px-3 py-2 rounded-xl">
                    Photography
                </span>
                <p className="text-sm mb-1"> <span className="text-gray-600">by</span> Determined-Poitras</p>

                <h3 className="relative lg:h-8 h-14 md:text-lg text-sm font-semibold text-gray-800">
                    <span className="absolute left-0 top-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300">Create an LMS Website with LearnPress</span>
                    <span className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-orange-500">Design a website with ThimPress</span>
                </h3>

                <div className="grid items-center grid-cols-2 space-y-1 md:flex md:flex-row md:space-x-4 md:space-y-0 lg:text-sm text-xs text-gray-500 md:mb-14">
                    <span className="flex items-center space-x-1">
                        <i className="fa-regular fa-clock text-orange-500"></i>
                        <span>2 Weeks</span>
                    </span>
                    <span className="flex items-center space-x-1">
                        <i className="fa-solid fa-graduation-cap text-orange-500"></i>
                        <span>156 Students</span>
                    </span>
                    <span className="flex items-center space-x-1">
                        <i className="fa-solid fa-signal text-orange-500"></i>
                        <span>All levels</span>
                    </span>
                    <span className="flex items-center space-x-1">
                        <i className="fa-solid fa-file text-orange-500"></i>
                        <span>20 Lessons</span>
                    </span>
                </div>
                <div className="flex relative justify-between items-center px-4 py-3 border-t md:text-sm text-xs text-gray-700">
                    <span className="font-semibold text-gray-700 space-x-2">
                        <s className="text-gray-400">{course.price}</s>
                        <span className={`${course.disc === "Free" ? "text-green-500" : "text-red-500"}`}>{course.disc}</span>
                    </span>
                    <button className="hover:underline font-medium">View More</button>
                </div>
            </div>
        </Link>
    );
}

