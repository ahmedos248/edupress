import React, { useState } from 'react'
import ArticleCard1 from './ArticleCard1';
import ArticleCard2 from './ArticleCard2';
import Sidebar from '../SideBar';
import Articles from '../../data/articles.json';

const AllArticles = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState('b');
    return (
        <section className="max-w-screen-xl mx-auto px-6 py-12 bg-white exo-text lg:grid lg:grid-cols-4">
            <button
                onClick={() => setOpen(prev => !prev)}
                className="lg:hidden text-orange-500 bg-white p-2 rounded shadow float-right"
            >
                <i class="fa-solid fa-filter"></i>
            </button>
            <div className='md:col-span-3'>
                <div className="flex flex-col lg:flex-row lg:justify-between items-start mb-8 space-y-4">
                    <div>
                        <h2 className="text-3xl font-semibold">All Articles</h2>
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
                <div className="grid grid-cols-2 md:gap-8 gap-4">
                    {Articles.map((article) => (
                        <>
                            {active === 'a' && (
                                <ArticleCard1 key={article.id} article={article} />
                            )}
                            {active === 'b' && (
                                <ArticleCard2 key={article.id} article={article} />
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
            <Sidebar className={`backdrop-blur-md p-4 shadow fixed top-14 right-0 w-[50%] h-full z-20 exo-text lg:text-[16px] text-[14px] font-semibold lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? "left-0" : "-left-full"}`} />
            <div className="lg:col-span-1">
                <Sidebar className='px-8 hidden lg:block' />
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

export default AllArticles
