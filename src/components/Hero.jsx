import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className="bg-white w-full pt-24 px-10 pb-24 lg:py-44 lg:px-40 relative">
            <img src="./images/hero.jpg" alt="" className='object-cover absolute top-0 left-0 h-full' />
            <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-6 z-10 ">
                    <h1 className="md:text-4xl text-3xl lg:w-96 w-72 lg:text-5xl font-extrabold leading-tight text-gray-900 exo-text">
                        Build Skills with
                        Online Course
                    </h1>
                    <p className="text-gray-600 md:text-lg text-sm md:max-w-[530px] max-w-[250px]">
                        We denounce with righteous indignation and dislike men who are so beguiled and demoralized that cannot trouble.
                    </p>
                    <div className="space-x-4">
                        <Link to="/blog" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition">
                            Posts comment
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero
