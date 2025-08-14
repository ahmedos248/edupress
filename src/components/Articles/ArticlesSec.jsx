import { Link } from "react-router-dom";
import ArticleCard1 from "./ArticleCard1";
import Articles from "../../data/articles.json"

export default function ArticlesSec() {
    return (
        <section className="max-w-screen-xl mx-auto px-6 py-12 bg-white exo-text">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                <div>
                    <h2 className="text-3xl font-semibold">Latest articles</h2>
                    <p className="text-gray-500">Explore our Free Acticles</p>
                </div>
                <Link to="/blog" type="button" className="mt-4 sm:mt-0 border border-black  rounded-full px-6 py-2 hover:border-orange-500 hover:bg-orange-500 hover:text-white transition">
                    All articles
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {Articles.slice(0, 3).map((article) => (
                    <ArticleCard1 key={article.id} article={article} />
                ))}
            </div>
        </section>
    );
}
