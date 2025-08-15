import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Search from "./Search";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    return (
        <>
            <nav className="bg-white shadow w-full fixed top-0 z-50 exo-text text-[16px] font-semibold lg:block hidden">
                <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center space-x-20">
                    <ul className="flex justify-center space-x-1">
                        <li><Link to="/"><img src="/images/logo.svg" alt="EduPress Logo" /></Link></li>
                        <li><Link to="/" className="text-2xl text-center font-bold">EduPress</Link></li>
                    </ul>
                    <ul className="flex justify-center h-[56px] items-center">
                        {[
                            { to: "/", text: "Home", activeOn: ["/"] },
                            { to: "/courses", text: "Courses", activeOn: ["/courses"] },
                            { to: "/blog", text: "Blog", activeOn: ["/blog"] },
                            { to: "/contact", text: <>Page <i className="text-[10px] fa-solid fa-chevron-down"></i></>, activeOn: ["/contact"] },
                            { to: "/#learnpress", text: "LearnPress Add-On", hash: true, noActive: true },
                            { to: "/#theme", text: "Premium Theme", hash: true, noActive: true }
                        ].map((item, idx) => {
                            const isActive = !item.noActive && item.activeOn?.includes(location.pathname);

                            return (
                                <li key={idx}>
                                    {item.to ? (
                                        item.hash ? (
                                            <div
                                                className={`hover:bg-gray-200 h-[56px] px-4 w-full flex items-center ${isActive ? "bg-gray-200" : ""
                                                    }`}
                                            >
                                                <HashLink smooth to={item.to} className="hover:text-orange-500">
                                                    {item.text}
                                                </HashLink>
                                            </div>
                                        ) : (
                                            <div
                                                className={`hover:bg-gray-200 h-[56px] px-4 w-full flex items-center ${isActive ? "bg-gray-200 text-orange-500" : ""
                                                    }`}
                                            >
                                                <Link to={item.to} className="hover:text-orange-500">
                                                    {item.text}
                                                </Link>
                                            </div>
                                        )
                                    ) : (
                                        <span className="hover:text-orange-500 cursor-pointer">
                                            {item.text}
                                        </span>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                    <ul className="flex justify-center space-x-3">
                        <ul className="flex justify-center space-x-1 items-center">
                            <li><Link to="/login" className="hover:text-orange-500">Login</Link></li>
                            <li>/</li>
                            <li><Link to="/register" className="hover:text-orange-500">Register</Link></li>
                        </ul>
                        <Search />
                    </ul>
                </div>
            </nav>
            <nav className={`w-full fixed  top-0 z-50 exo-text lg:text-[16px] text-[14px] font-semibold lg:hidden  ${open ? "" : "shadow"}`}>
                <div className="max-w-screen-xl h-[56px] bg-white mx-auto px-6 py-2 flex justify-between items-center space-x-20">
                    <ul className="flex justify-center space-x-1">
                        <li><Link to="/"><img src="/images/logo.svg" alt="EduPress Logo" /></Link></li>
                        <li><Link to="/" className="md:text-2xl text-xl text-center font-bold">EduPress</Link></li>
                    </ul>
                    <ul className="flex justify-center items-center space-x-4">
                        <Search />
                        <i
                            onClick={() => setOpen(prev => !prev)}
                            className="fa-solid fa-bars lg:hidden z-50 text-orange-500 bg-white p-2 rounded shadow" />
                    </ul>
                </div>
            </nav>
            <div className={`w-full fixed backdrop-blur-md lg:hidden top-[56px] bg-white/50 mx-auto px-6 py-2 flex justify-between items-center md:space-x-20 space-x-10 md:text-lg text-sm border-2 border-orange-500 p-4 transition-all duration-300 ease-in-out z-40 ${open ? "" : "-translate-y-96"}`}>
                <ul className="flex flex-col justify-center space-y-4 border-2 border-orange-500 p-4 rounded-md">
                    {[
                        { to: "/", text: "Home", activeOn: ["/"] },
                        { to: "/courses", text: "Courses", activeOn: ["/courses"] },
                        { to: "/blog", text: "Blog", activeOn: ["/blog"] },
                        { to: "/contact", text: <>Page <i className="text-[10px] fa-solid fa-chevron-down"></i></>, activeOn: ["/contact"] },
                        { to: "/#learnpress", text: "LearnPress Add-On", hash: true, noActive: true },
                        { to: "/#theme", text: "Premium Theme", hash: true, noActive: true }
                    ].map((item, idx) => {
                        const isActive = !item.noActive && item.activeOn?.includes(location.pathname);
                        return (
                            <li key={idx}>
                                {item.to ? (
                                    item.hash ? (
                                        <HashLink smooth to={item.to} className="hover:text-orange-500">
                                            {item.text}
                                        </HashLink>
                                    ) : (
                                        <Link to={item.to} className={`hover:text-orange-500 ${isActive ? "text-orange-500" : ""}`}>
                                            {item.text}
                                        </Link>
                                    )) : (
                                    <span className="hover:text-orange-500 cursor-pointer">
                                        {item.text}
                                    </span>
                                )}
                            </li>
                        )
                    })}
                </ul>
                <div className="flex justify-center items-center space-x-10 mt-2">
                    <Link to="/login" className="hover:text-orange-500 flex flex-col space-y-5 items-center md:text-lg text-base font-semibold border-2 border-orange-500 p-4 rounded-md">
                        {"Login".split("").map((char, index) => (
                            <span key={index}>{char}</span>
                        ))}
                    </Link>
                    <Link to="/register" className="hover:text-orange-500 flex flex-col items-center md:text-lg text-base font-semibold border-2 border-orange-500 p-4 rounded-md">
                        {"Register".split("").map((char, index) => (
                            <span key={index}>{char}</span>
                        ))}
                    </Link>
                </div>

            </div>
            <div
                className={`
    fixed inset-0 z-30 backdrop-blur-[1px] bg-black bg-opacity-40 lg:hidden 
    transition-all duration-300 
    ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
  `}
                onClick={() => setOpen(false)}
            />

        </>
    );
}
