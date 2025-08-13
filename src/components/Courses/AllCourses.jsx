import React, { useState } from 'react'
import SidebarFilter from '../SidebarFilter';
import CourseCard1 from './CourseCard1';
import CourseCard2 from './CourseCard2';
import { Link } from "react-router-dom";


const AllCourses = () => {
    const [open, setOpen] = useState(false);
    const courses = [
        { image: "/images/Image1.jpg", price: "$29.0", disc: "Free", id: 1 },
        { image: "/images/Image2.jpg", price: "$59.0", disc1: "$49.0", id: 2 },
        { image: "/images/Image3.jpg", price: "$29.0", disc: "Free", id: 3 },
        { image: "/images/Image4.jpg", price: "$29.0", disc: "Free", id: 4 },
        { image: "/images/Image5.jpg", price: "$29.0", disc: "Free", id: 5 },
        { image: "/images/Image6.jpg", price: "$29.0", disc: "Free", id: 6 },
    ];
    const [active, setActive] = useState('b');
    return (
        <section className="max-w-screen-xl mx-auto px-6 py-12 bg-white exo-text lg:grid lg:grid-cols-4">
            <button
                onClick={() => setOpen(prev => !prev)}
                className="lg:hidden text-orange-500 bg-white p-2 rounded shadow float-right"
            >
                <i class="fa-solid fa-filter"></i>
            </button>
            <div className='lg:col-span-3'>
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
                                    className="w-full focus:outline-none"
                                />
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>

                            <div class="w-[14px] h-[22px] bg-white flex items-center justify-center">
                                <svg
                                    onClick={() => setActive('a')}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className={`w-6 h-6 cursor-pointer
                                        ${active === 'a' ? 'fill-orange-500' : 'fill-black'}`}
                                >
                                    <path d="M0 0h10v10H0V0zM12 0h10v10H12V0zM0 12h10v10H0V12zM12 12h10v10H12V12z" />
                                </svg>
                            </div>

                            <div>
                                <i
                                    onClick={() => setActive('b')}
                                    className={`fa-solid fa-list cursor-pointer
                                ${active === 'b' ? 'text-orange-500' : 'text-black'}`}></i>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 lg:gap-8 gap-4">
                    {courses.map((course, idx) => (
                        <>
                            {active === 'a' && (
                                <CourseCard1 key={idx} course={course} />
                            )}
                            {active === 'b' && (
                                <CourseCard2 key={idx} course={course} />
                            )}
                        </>
                    ))}
                </div>
                <div className="flex justify-center mt-6 gap-2">
                    <button className="w-8 h-8 flex items-center justify-center border rounded-full p-6">
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    {[1, 2, 3].map((num) => (
                        <button
                            key={num}
                            className={`w-8 h-8 flex font-medium items-center justify-center p-6 rounded-full ${num === 1
                                ? "bg-black text-white"
                                : "border text-gray-500 hover:bg-gray-200"
                                }`}
                        >
                            {num}
                        </button>
                    ))}
                    <button className="w-8 h-8 flex items-center justify-center border rounded-full p-6">
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
            <SidebarFilter className={`backdrop-blur-md bg-white/40 p-4 shadow fixed top-14 right-0 w-[50%] h-full z-20 exo-text lg:text-[16px] text-[14px] font-semibold lg:hidden overflow-scroll custom-scroll transition-all duration-300 ease-in-out ${open ? "left-0" : "-left-full"}`} />
            <div className='lg:col-span-1 lg:block hidden'>
                <SidebarFilter />
            </div>
            <div
                className={`
    fixed inset-0 z-10 backdrop-blur-[1px] bg-black bg-opacity-40 w-full h-full lg:hidden
    transition-all duration-300 
    ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
  `}
                onClick={() => setOpen(false)}
            />
        </section>
    )
}

export default AllCourses
