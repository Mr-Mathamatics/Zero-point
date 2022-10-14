import React from 'react'

const FeaturedSection = () => {
  return (
    <>
    <section className='featured-sec sec-padding'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-12 gap-4 items-center featured-content'>
            <div className='md:col-start-2 col-span-5 md:w-11/12'>
                <h2 className='title relative'>Course Details Features</h2>
                <p>
                You Don’t Need Additional Plugins. Just Drag an Element, Configure it and Launch Your Site.
                </p>
                <ul className='mt-6'>
                  <li className='flex items-center mb-3'>
                  <img src="./images/check.png" className='w-6 mr-2' alt="" />
                  Dashboard For Student & Instructor</li>
                  <li className='flex items-center mb-3'>
                  <img src="./images/check.png" className='w-6 mr-2' alt="" />
                  Work Schedule For Each Student</li>
                  <li className='flex items-center mb-3'>
                  <img src="./images/check.png" className='w-6 mr-2' alt="" />
                  Days with Custom Schedule</li>
                </ul>
            </div>
            <div className='col-span-5 featured-image md:ml-auto md:w-11/12'>
                <img className="w-full object-cover rounded-md" src="./images/education.jpg" alt='' />
            </div>
        
            <div className='col-span-5 featured-image md:col-start-2 md:w-11/12 py-6'>
                <img className="w-full object-cover rounded-md" src="./images/course-details-1.jpg" alt='' />
            </div>
            <div className='col-span-5 md:ml-auto md:w-11/12'>
                <h2 className='title relative'>Course Search Feature</h2>
                <p>
                You Don’t Need Additional Plugins. Just Drag an Element, Configure it and Launch Your Site.
                </p>
                <ul className='mt-6'>
                  <li className='flex items-center mb-3'>
                  <img src="./images/check.png" className='w-6 mr-2' alt="" />
                  Dashboard For Student & Instructor</li>
                  <li className='flex items-center mb-3'>
                  <img src="./images/check.png" className='w-6 mr-2' alt="" />
                  Work Schedule For Each Student</li>
                  <li className='flex items-center mb-3'>
                  <img src="./images/check.png" className='w-6 mr-2' alt="" />
                  Days with Custom Schedule</li>
                </ul>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default FeaturedSection
