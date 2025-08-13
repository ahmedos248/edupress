import Articles from "../components/Articles/Articles";
import Categories from "../components/Categories";
import FeaturedCourses from "../components/FeaturedCourses";
import Hero from "../components/Hero";
import LearnPress from "../components/LearnPress";
import StudentFeedbacks from "../components/StudentFeedbacks";

export default function Home() {
    return (
        <div className="mb-8">
            <Hero />
            <Categories />
            <FeaturedCourses />
            <LearnPress />
            <StudentFeedbacks />
            <Articles />
        </div>
    );
}
