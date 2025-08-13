import React from 'react'

const Hero = () => {
    return (
        <section className="bg-white w-full pt-24 px-10 pb-24 lg:py-44 lg:px-40 relative bg-[url('./public/images/hero.jpg')] bg-cover lg:bg-center md:bg-right bg-left">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-6 z-10 ">
                    <h1 className="text-4xl lg:w-96 w-72 lg:text-5xl font-extrabold leading-tight text-gray-900 exo-text">
                        Build Skills with
                        Online Course
                    </h1>
                    <p className="text-gray-600 text-lg md:w-[530px] w-[400px]">
                        We denounce with righteous indignation and dislike men who are so beguiled and demoralized that cannot trouble.
                    </p>
                    <div className="space-x-4">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition">
                            Posts comment
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero
