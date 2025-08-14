import CourseCard1 from "./Courses/CourseCard1";
import Courses from '../data/courses.json';
import { Link } from "react-router-dom";

export default function FeaturedCourses() {
    return (
        <section className="max-w-screen-xl mx-auto px-6 py-12 bg-white exo-text">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                <div>
                    <h2 className="text-3xl font-semibold">Featured Courses</h2>
                    <p className="text-gray-500">Explore our Popular Courses</p>
                </div>
                <Link to="/courses" type="button" className="mt-4 sm:mt-0 border border-black  rounded-full px-6 py-2 hover:border-orange-500 hover:bg-orange-500 hover:text-white transition">
                    All Courses
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-3 gap-8">
                {Courses.map((course) => (
                    <CourseCard1 key={course.id} course={course} />
                ))}
            </div>
        </section>
    );
}
