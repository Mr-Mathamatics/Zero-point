import React from 'react'
import { Link } from 'react-router-dom';
import InnerPageBanner from '../../components/InnerPageBanner';
import Pagination from '../../components/Pagination';
import coursesItem from './DataFake/CoursesItem';
import  './MyCourse.css'
import MyCourseList from './MyCoursesList';
const MyCourses =()=>
{
    return(
        <>
        <main className="bg-gray-100">
            <InnerPageBanner title={"My Courses"} />
            <section className='sec-padding'>
                <div className="course-header border-b">
                    <div className="container mx-auto px-4 flex items-center justify-between pb-4">
                        <h2 className="font-bold text-3xl mb-0">My Courses</h2>
                        <Link to="add-course">
                            <button className="px-4 py-3 font-semibold text-sm bg-theme-color hover:bg-blue-700 text-white rounded shadow-sm">Create Course +</button>
                        </Link>
                    </div>
                </div>

                <div className="container m-auto px-4">
                    <div className="my-3">
                        <select className="bg-gray-50 border max-w-max border-gray-300 text-gray-900 font-medium text-sm rounded-sm focus:border-gray-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Showing: All Courses</option>
                            <option value="1">Purchased Courses</option>
                            <option value="2">In Progress Courses</option>
                            <option value="3">Created Courses</option>
                        </select>
                    </div>
                    <MyCourseList data={coursesItem} />
                    {/* <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
                        {
                            coursesItem.map((courseList) => 
                            <div className="course-item bg-white shadow-sm hover:shadow-lg transition duration-500">
                                <img className="h-48 w-full object-cover" src={courseList.courseImage} />
                                <div className="p-4 course-detail relative">
                                    <Link to="" className="font-medium block">{courseList.courseName}</Link>
                                    <div className="course-owner flex items-center py-3">
                                        <img className='w-10 h-10 rounded-full mr-2 cover object-cover object-top' src={courseList.courseOwnerProfile} />
                                        <p>{courseList.courseOwner}</p>
                                    </div>
                                    <button className="absolute left-0 right-0 bottom-4 m-auto bg-blue-500 hover:bg-blue-700 text-white font-semibold  py-2 px-4 rounded">
                                    {courseList.courseButton}</button>
                                </div>
                            </div>
                            )
                        }
                    </div> */}
                   <Pagination/>
                </div>
            </section>
        </main>
        </>
    )
}
export default MyCourses