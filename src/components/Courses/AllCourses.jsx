import React, { useState } from "react";
import SidebarFilter from "../SidebarFilter";
import CourseCard1 from "./CourseCard1";
import CourseCard2 from "./CourseCard2";
import courses from "../../data/courses.json";

const AllCourses = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("b");
    const [filters, setFilters] = useState({});
    const [filteredCourses, setFilteredCourses] = useState(courses);
    const [search, setSearch] = useState("");

    const applyFilters = React.useCallback((filters) => {
        let result = courses;

        if (filters.category?.length) {
            result = result.filter((course) =>
                filters.category.includes(course.category)
            );
        }

        if (filters.instructors?.length) {
            result = result.filter((course) =>
                filters.instructors.includes(course.instructor)
            );
        }

        if (filters.price?.includes("Free")) {
            result = result.filter((course) => course.disc === "Free");
        } else if (filters.price?.includes("Paid")) {
            result = result.filter((course) => course.disc !== "Free");
        }

        if (filters.review?.length) {
            result = result.filter((course) =>
                filters.review.some((star) => Math.round(course.rating) === star)
            );
        }

        if (filters.level?.length) {
            result = result.filter((course) =>
                filters.level.includes(course.level)
            );
        }

        if (search.trim() !== "") {
            result = result.filter((course) =>
                course.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        setFilteredCourses(result);
    }, [search]);

    React.useEffect(() => {
        applyFilters(filters);
    }, [filters, search, applyFilters]);

    return (
        <section className="max-w-screen-xl mx-auto px-6 py-12 bg-white exo-text lg:grid lg:grid-cols-4">
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="lg:hidden text-orange-500 bg-white p-2 rounded shadow float-right"
            >
                <i className="fa-solid fa-filter"></i>
            </button>
            <div className="lg:col-span-3">
                <div className="flex flex-col lg:flex-row lg:justify-between items-start mb-8 space-y-4">
                    <div>
                        <h2 className="text-3xl font-semibold">All Courses</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between space-x-2">
                            <div className="flex justify-between border-b-2 border-black max-w-sm">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full focus:outline-none"
                                />
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>

                            <div className="w-[14px] h-[22px] bg-white flex items-center justify-center">
                                <svg
                                    onClick={() => setActive("a")}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className={`w-6 h-6 cursor-pointer ${active === "a" ? "fill-orange-500" : "fill-black"
                                        }`}
                                >
                                    <path d="M0 0h10v10H0V0zM12 0h10v10H12V0zM0 12h10v10H0V12zM12 12h10v10H12V12z" />
                                </svg>
                            </div>

                            <div>
                                <i
                                    onClick={() => setActive("b")}
                                    className={`fa-solid fa-list cursor-pointer ${active === "b" ? "text-orange-500" : "text-black"
                                        }`}
                                ></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 lg:gap-8 gap-4">
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course, idx) => (
                            <React.Fragment key={idx}>
                                {active === "a" && <CourseCard1 course={course} />}
                                {active === "b" && <CourseCard2 course={course} />}
                            </React.Fragment>
                        ))
                    ) : (
                        <p>No courses found</p>
                    )}
                </div>
            </div>
            <SidebarFilter
                filters={filters} setFilters={setFilters}
                className={`backdrop-blur-md bg-white/40 p-4 pb-14 shadow fixed top-14 left-0 w-[50%] h-full z-20 exo-text lg:text-[16px] text-[14px] font-semibold lg:hidden overflow-scroll custom-scroll transition-all duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"
                    }`}
            />
            <div className="lg:col-span-1 lg:block hidden">
                <SidebarFilter filters={filters} setFilters={setFilters} />
            </div>
            <div
                className={`fixed inset-0 z-10 backdrop-blur-[1px] bg-black bg-opacity-40 w-full h-full lg:hidden transition-all duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setOpen(false)}
            />
        </section>
    );
};

export default AllCourses;
