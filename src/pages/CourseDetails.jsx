import { useLocation } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Tabs from "../components/Tabs";
import CommentForm from "../components/CommentForm";

export default function CourseDetails() {
    const { state } = useLocation();
    const course = state?.course;

    if (!course) return <p>Course not found</p>;

    return (
        <>
            <Breadcrumb />
            <div className="w-full bg-black">
                <div className="max-w-screen-xl relative mx-auto px-6 py-12 bg-black h-[290px] flex justify-between exo-text overflow-hidden md:overflow-visible">
                    <img src={course.image} alt="" className="w-full object-cover opacity-30 absolute top-0 left-0 md:hidden" />
                    <div className="text-white space-y-6 z-10">
                        <div className="flex flex-row items-center space-x-4">
                            <button className="bg-[#555555] p-4 py-3 rounded-xl">Photography</button>
                            <p><span className="text-gray-400">by </span>Determined-Poitras</p>
                        </div>
                        <h1 className="lg:text-4xl md:text-2xl text-xl">The Ultimate Guide to the best WordPress LMS Plugin</h1>
                        <div className=" items-center flex flex-row flex-wrap justify-start space-x-5 space-y-0 md:text-sm text-[11px] text-gray-500 md:mb-14">
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
                                <img src="/images/lessons.svg" alt="" />
                                <span>20 Lessons</span>
                            </span>
                            <span className="flex items-center space-x-1">
                                <img src="/images/Quizzes.svg" alt="" width={15} />
                                <span>3 Quizzes</span>
                            </span>
                        </div>
                        <div className="flex justify-evenly items-center rounded-b-3xl md:hidden">
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
                            <button className="bg-orange-500 text-white py-2 px-4 rounded-full">Start Now</button>
                        </div>
                    </div>
                    <div className="w-fit h-fit rounded-3xl overflow-hidden hidden md:block">
                        <img src={course.image} alt="" width={410} />
                        <div className="py-6 flex justify-evenly items-center bg-white border rounded-b-3xl">
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
                            <button className="bg-orange-500 text-white py-2 px-4 rounded-full">Start Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full py-12">
                <div className="max-w-screen-xl mx-auto">
                    <Tabs />
                    <CommentForm className="lg:p-0 p-6 max-w-[850px]" />
                </div>
            </div>
        </>
    );
}
