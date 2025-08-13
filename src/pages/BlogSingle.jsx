import React, { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { useLocation } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import CommentForm from '../components/CommentForm';


const BlogSingle = () => {
    const [open, setOpen] = useState(false);
    const { state } = useLocation();
    const article = state?.article;

    if (!article) return <p>Article not found</p>;
    return (
        <>
            <Breadcrumb />
            <div className='w-full'>
                <div className="max-w-screen-xl mx-auto py-12 px-6 lg:grid lg:grid-cols-4 exo-text">
                    <button
                        onClick={() => setOpen(prev => !prev)}
                        className="lg:hidden text-orange-500 bg-white p-2 rounded shadow float-right"
                    >
                        <i class="fa-solid fa-filter"></i>
                    </button>
                    <div className='lg:col-span-3'>
                        <div className='flex justify-between'>
                            <h1 className="md:text-4xl text-2xl font-semibold mb-4">Best LearnPress WordPress Theme Collection for 2023</h1>
                        </div>
                        <div className='space-x-6 mb-10'>
                            <span><i className="fas fa-user text-orange-500"></i> Determined-poitras</span>
                            <span><i className="fa-regular fa-calendar text-orange-500"></i> Jan 24, 2023</span>
                            <span><i className="fas fa-comment text-orange-500"></i> 20 comments</span>
                        </div>
                        <img src={article.image} alt={article.title} className='rounded-3xl w-full' />
                        <p className="mt-6">{article.details1}</p>
                        <p className="mt-6">{article.details2}</p>
                        <CommentForm />
                    </div>
                    <Sidebar className={`backdrop-blur-md p-4 shadow fixed top-14 right-0 w-[50%] h-full z-20 exo-text lg:text-[16px] text-[14px] font-semibold lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? "left-0" : "-left-full"}`} />
                    <div className="lg:col-span-1">
                        <Sidebar className='px-8 hidden lg:block' />
                    </div>
                    <div
                        className={`
    fixed inset-0 z-10 backdrop-blur-[1px] bg-black bg-opacity-40 w-full h-full
    transition-all duration-300 
    ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
  `}
                        onClick={() => setOpen(false)}
                    />
                </div>
            </div>
        </>
    )
}

export default BlogSingle
