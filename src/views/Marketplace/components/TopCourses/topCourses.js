const TopCourses = (TopCoursesData) => {
    const {data} = TopCoursesData
    return (
        <>
            <div className="top-courses">
                <h3 className="font-bold text-2xl pb-4">Top Courses this Month</h3>
                <ol className='list-decimal pl-6'>
                    {data && data.length ?
                        <>
                            {data.map((TopCourse) =>
                                <li key={TopCourse}> {TopCourse} </li>
                            )}
                        </>
                        : null}
                </ol>
            </div>
        </>
    )
}
export default TopCourses