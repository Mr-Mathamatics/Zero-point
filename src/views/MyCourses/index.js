import React from 'react'
import { Link } from 'react-router-dom';
import coursesItem from './CoursesItem';
import  './MyCourse.css'
const MyCourses =()=>
{
    return(
        <>
        <main className="bg-gray-100">
            <div className="course-header border-b">
                <div className="container m-auto px-4 flex justify-between py-4 ">
                    <h2 className="font-bold text-3xl">My Courses</h2>
                    <button className="px-4 py-3 font-semibold text-sm bg-blue-500 hover:bg-blue-700 text-white rounded shadow-sm">Create Course +</button>
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
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
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
                </div>
                <div className="flex items-center space-x-1 py-4 justify-center">
                    <Link to="" className="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md">
                        Previous
                    </Link>
                    <Link to="" className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-500 hover:text-white">
                        1
                    </Link>
                    <Link to="" className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-500 hover:text-white">
                        2
                    </Link>
                    <Link to="" className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-500 hover:text-white">
                        3
                    </Link>
                    <Link to="" className="px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-500 hover:text-white">
                        Next
                    </Link>
                </div>
            </div>
        </main>
        </>
    )
}
export default MyCourses