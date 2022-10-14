import { Link } from 'react-router-dom';
const NewCourses = (newCourseData) => {
    const { data } = newCourseData
    return (
        <>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 py-4">
                {
                    data && data.length ?
                        <>
                            {
                                data.map((courseList) =>
                                    <div className="course-item bg-white shadow-sm shadow-md hover:shadow-lg transition duration-500">
                                        <div className='h-56 overflow-hidden rounded-tl-md rounded-tr-md relative'>
                                            <div className={`course_tag absolute font-medium text-white rounded ${courseList.bgClassName}`}>
                                                {courseList.courseTag}
                                            </div>
                                            <img className="course_image h-56 w-full object-cover" src={courseList.courseImage} />
                                        </div>
                                        <div className="course_content p-4">
                                            <div className='flex items-center justify-between pb-4'>
                                                <div className='flex items-center text-black-500'>
                                                    <i className='fa fa-book'></i>
                                                    <span className='pl-2'>22 Lesson</span>
                                                </div>
                                                <div className='flex items-center'>
                                                    <i className='fa fa-star yellow-star'></i>
                                                    <span className='pl-1'>4.5 (42)</span>
                                                </div>
                                            </div>
                                            <h5 className='leading-6'>
                                            <Link to="" className="font-medium block hover:text-blue-700">{courseList.courseName}</Link>
                                            </h5>
                                            <div className="course-owner flex items-center">
                                                <img src='./images/user-1.jpg' alt='' />
                                                <p className='mb-0 ml-3'>{courseList.courseOwner}</p>
                                            </div>
                                        </div>
                                        <div className='course_more flex items-center justify-between'>
                                            <div class="course_price flex items-center">
                                                <span class={`font-bold text-lg ${courseList.textClassName}`}>$62.00</span>
                                                <span class="old-price text-sm font-medium text-black-500 line-through pl-2">$97.00</span>
                                            </div>
                                            <div className='more-details flex items-center'>
                                                <Link to="" className='font-medium text-black-500 hover:text-blue-700'>
                                                    <span className='mr-2'>More Details</span>
                                                    <i class="fas fa-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </>
                        :
                        null
                }
            </div>
        </>
    )
}
export default NewCourses