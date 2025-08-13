import React from 'react'

const LearnPress = () => {
    return (
        <section className='max-w-screen-xl mx-auto px-6 py-12 bg-white exo-text'>
            <div className='w-full p-14 pb-16 rounded-2xl bg-[url("/images/learnpress.jpg")] bg-cover bg-center space-y-4 '>
                <h5 className='text-gray-600 font-semibold'>GET MORE POWER FROM</h5>
                <h2 className='font-semibold text-3xl'>LearnPress Add-Ons</h2>
                <p className='lg:text-gray-600 md:w-[450px]'>The next level of LearnPress - LMS WordPress Plugin. More Powerful, Flexible and Magical Inside.</p>
                <button className="text-white rounded-full bg-orange-500 px-6 py-3 ">
                    Explorer course
                </button>
            </div>
            <div className='flex flex-wrap lg:flex-row lg:justify-between justify-center gap-4 mt-24'>
                <div className='bg-gray-100 text-center p-14 w-72 rounded-2xl font-semibold space-y-4'>
                    <h3 className='text-3xl text-orange-500'>25K+</h3>
                    <p className='text-sm'>Active Students</p>
                </div>
                <div className='bg-gray-100 text-center p-14 w-72 rounded-2xl font-semibold space-y-4'>
                    <h3 className='text-3xl text-orange-500'>899</h3>
                    <p className='text-sm'>Total Courses</p>
                </div>
                <div className='bg-gray-100 text-center p-14 w-72 rounded-2xl font-semibold space-y-4'>
                    <h3 className='text-3xl text-orange-500'>158</h3>
                    <p className='text-sm'>Instructor</p>
                </div>
                <div className='bg-gray-100 text-center p-14 w-72 rounded-2xl font-semibold space-y-4'>
                    <h3 className='text-3xl text-orange-500'>100%</h3>
                    <p className='text-sm'>Satisfaction rate</p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row w-full py-20'>
                <div className='w-full lg:w-[50%] shrink-0'>
                    <img src="/images/wordpress.svg" alt="" className="object-cover" />
                </div>
                <div className='p-10 px-28 w-full lg:w-auto'>
                    <h2 className='text-3xl font-semibold w-80 mb-8'>Grow us your skill
                        with LearnPress LMS</h2>
                    <p className='text-gray-600 pb-6'>We denounce with righteous indignation and dislike men who are so beguiled and demoralized that cannot trouble.</p>
                    <ul className='space-y-4 pb-6'>
                        <li><i className="fa-solid fa-check text-green-500"></i> Certification</li>
                        <li><i className="fa-solid fa-check text-green-500"></i> Certification</li>
                        <li><i className="fa-solid fa-check text-green-500"></i> Certification</li>
                        <li><i className="fa-solid fa-check text-green-500"></i> Certification</li>
                    </ul>
                    <button className="text-white rounded-full bg-orange-500 px-6 py-3 ">
                        Explorer course
                    </button>
                </div>
            </div>
            <div className='w-full flex flex-col items-center p-14 pb-16 rounded-2xl bg-[url("/images/banner1.jpg")] bg-cover bg-center space-y-4 '>
                <h5 className='font-semibold'>PROVIDING AMAZING</h5>
                <h2 className='font-semibold text-3xl'>Education wordpress theme</h2>
                <p className='text-gray-600 text-center'>The next level of LMS WordPress Theme. Learn anytime and anywhere.</p>
                <button className="text-white rounded-full bg-orange-500 px-6 py-3 ">
                    Explorer course
                </button>
            </div>
        </section>
    )
}

export default LearnPress
