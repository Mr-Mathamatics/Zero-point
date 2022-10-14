import { Link } from 'react-router-dom';
const FeaturedCourses = (featuredCoursesData) => {
    const { data } = featuredCoursesData
    return (
        <>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-6 py-6'>
                {
                    data && data.length ?
                        <>
                            {
                                data.map((featuredCoursesList) =>
                                    <div className="course-item bg-white shadow-sm shadow-md hover:shadow-lg transition duration-500">
                                        <img className="h-56 w-full object-cover" src={featuredCoursesList.courseImage} />
                                        <div className="p-4">
                                            <Link to="" className="font-medium block">{featuredCoursesList.courseName}</Link>
                                            <div className="course-owner flex items-center">
                                                <p>{featuredCoursesList.courseOwner}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </> : null
                }
            </div>
        </>
    )
}
export default FeaturedCourses