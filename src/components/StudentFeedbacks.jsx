import React from 'react'

const StudentFeedbacks = () => {
    return (
        <section className='max-w-screen-xl mx-auto px-6 py-12 bg-white exo-text'>
            <div className='flex flex-col items-center space-y-4 mb-16'>
                <h2 className='text-3xl font-bold'>Student feedbacks</h2>
                <p>What Students Say About Academy LMS</p>
            </div>
            <div className='flex flex-wrap lg:flex-row lg:justify-between justify-center lg:gap-0 gap-4 '>
                {[...Array(4)].map((_, idx) => (
                    <div key={idx} className="p-8 border border-gray-100 rounded-2xl space-y-6 w-[300px]">
                        <div>
                            <img src="/images/“.svg" alt="xb" />
                        </div>
                        <p className='md:text-base text-xs'>
                            I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound
                        </p>
                        <h4 className="font-semibold md:text-xl text-lg">Roe Smith</h4>
                        <p className="text-gray-500 md:text-base text-xs">Designer</p>
                    </div>
                ))}
            </div>
            <div className='w-full flex lg:justify-between flex-wrap justify-center lg:space-y-0 space-y-10 p-10 py-16 rounded-2xl bg-[url("/images/banner2.jpg")] bg-cover my-24'>
                <div className='flex items-center justify-between space-x-4'>
                    <div className='bg-white rounded-full p-4 px-5'>
                        <img src="/images/Group.svg" alt="" />
                    </div>
                    <h4 className='md:text-xl text-base font-semibold'>Let’s Start With Academy LMS</h4>
                </div>
                <div className='flex items-center justify-between space-x-4'>
                    <button className="text-orange-500 border-2 border-orange-500 rounded-full md:px-6 md:py-3 px-4 py-2 md:text-base text-xs">
                        I’m a student
                    </button>
                    <button className="text-white rounded-full bg-orange-500 md:px-6 md:py-3 px-4 py-2 md:text-base text-xs">
                        Become an Instructor
                    </button>
                </div>
            </div>
        </section>
    )
}

export default StudentFeedbacks
