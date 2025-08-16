import React, { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { useLocation } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import CommentForm from '../components/CommentForm';
import ErrorPage from "./ErrorPage"


const BlogSingle = () => {
    const [open, setOpen] = useState(false);
    const { state } = useLocation();
    const article = state?.article;
    const comments = [
        {
            name: "Laura Hipster",
            date: "October 03, 2022",
            avatar: "/images/Laura.svg",
            text: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.",
        },
        {
            name: "Laura Hipster",
            date: "October 03, 2022",
            avatar: "/images/Laura.svg",
            text: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.",
        },
        {
            name: "Laura Hipster",
            date: "October 03, 2022",
            avatar: "/images/Laura.svg",
            text: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.",
        },
    ];


    if (!article) {
        return <ErrorPage />;
    }
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
                        <p className="mt-6 text-gray-600">{article.details1}</p>
                        <p className="mt-6 text-gray-600">{article.details2}</p>
                        <div className='flex flex-row items-center space-x-4 text-gray-600 mt-10'>
                            <span>Tags: </span>
                            <div className="flex flex-wrap gap-2 items-center">
                                {[
                                    "Free couses",
                                    "Marketing",
                                    "Idea",
                                    "LMS",
                                    "LearnPress",
                                    "Instructor",
                                ].map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-white border border-gray-200 rounded-md text-sm cursor-pointer hover:bg-gray-200"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-row items-center space-x-4 text-gray-600 my-14'>
                            <span>Share: </span>
                            <div className="flex flex-wrap gap-4 items-center">
                                <i className='fab fa-facebook-f hover:text-orange-500 cursor-pointer'></i>
                                <i className='fab fa-pinterest-p hover:text-orange-500 cursor-pointer'></i>
                                <i className='fab fa-x-twitter hover:text-orange-500 cursor-pointer'></i>
                                <i className='fab fa-instagram hover:text-orange-500 cursor-pointer'></i>
                                <i className='fab fa-youtube hover:text-orange-500 cursor-pointer'></i>
                            </div>
                        </div>
                        <div className='flex justify-between gap-8'>
                            <div className='border rounded-2xl p-4 flex flex-row gap-4 items-center'>
                                <span className='px-4 py-3 rounded-xl bg-gray-200 text-gray-500'><i class="fa-solid fa-angle-left"></i></span>
                                <div className='space-y-2'>
                                    <p className='text-gray-500'>Prev Articles</p>
                                    <h4>Best LearnPress WordPress Theme Collection for 2023</h4>
                                </div>
                            </div>
                            <div className='border rounded-2xl p-4 flex flex-row gap-4 items-center'>
                                <div className='space-y-2 text-right'>
                                    <p className='text-gray-500'>Prev Articles</p>
                                    <h4>Best LearnPress WordPress Theme Collection for 2023</h4>
                                </div>
                                <span className='px-4 py-3 rounded-xl bg-gray-200 text-gray-500'><i class="fa-solid fa-angle-right"></i></span>
                            </div>
                        </div>
                        <div className="mt-6 space-y-6">
                            {comments.map((comment, idx) => (
                                <div
                                    key={idx}
                                    className={`flex flex-wrap gap-4 border-t pt-4 ${idx === 1 ? "ms-10" : ""}`}
                                >
                                    <img
                                        src={comment.avatar}
                                        alt={comment.name}
                                        className="w-12 h-12 object-cover"
                                    />
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center">
                                            <span className="font-semibold">{comment.name}</span>
                                            <span className="text-sm text-gray-500">{comment.date}</span>
                                        </div>
                                        <p className="text-gray-700 mt-1">{comment.text}</p>
                                        <button className="flex items-center gap-1 text-red-500 text-sm mt-2">
                                            <i className="fas fa-reply"></i> Reply
                                        </button>
                                    </div>
                                </div>
                            ))}
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
