import ArticlesSec from "../components/Articles/ArticlesSec";
import Categories from "../components/Categories";
import FeaturedCourses from "../components/FeaturedCourses";
import Hero from "../components/Hero";
import LearnPress from "../components/LearnPress";
import StudentFeedbacks from "../components/StudentFeedbacks";
import { useOutletContext } from "react-router-dom";

export default function Home() {
    const { searchQuery } = useOutletContext();
    const normalizedQuery = String(searchQuery || "").toLowerCase();

    const noSearch = normalizedQuery === "";

    const sections = [
        { id: 1, title: "hero", component: <Hero /> },
        { id: 2, title: "categories", component: <Categories /> },
        { id: 3, title: "featuredcourses", component: <FeaturedCourses /> },
        { id: 4, title: "learnpress", component: <LearnPress /> },
        { id: 5, title: "studentfeedbacks", component: <StudentFeedbacks /> },
        { id: 6, title: "articlessec", component: <ArticlesSec /> },
    ];

    const visibleSections = noSearch
        ? sections
        : sections.filter(section => section.title.includes(normalizedQuery));

    return (
        <div className="mb-8">
            {visibleSections.length > 0 ? (
                visibleSections.map(section => <div key={section.id}>{section.component}</div>)
            ) : (
                <p className="text-gray-500 text-center py-20">
                    No sections match your search.
                </p>
            )}
        </div>
    );
}
