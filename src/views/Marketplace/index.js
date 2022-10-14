import React from 'react'
import InnerPageBanner from '../../components/InnerPageBanner'
import exploreCategoriesData from './DataFake/ExploreCategories';
import NewestCourse from './DataFake/NewestCourse';
import TopCoursesData from './DataFake/TopCourses';
import featuredCoursesData from './DataFake/FeaturedCourses';
import NewCourses from './components/NewCourses/newCourses';
import TopCourses from './components/TopCourses/topCourses';
import ExploreCategories from './components/ExploreCategory/exploreCategories';
import FeaturedCourses from './components/FeaturedCourses/featuredCourses';

const Marketplace = () => {

    return (
        <>
            <main className="">
                <InnerPageBanner title={"Marketplace"} />
                <section className='sec-padding'>
                    {/* <div className="course-header border-b">
                        <div className="container m-auto px-4 flex justify-between py-4 ">
                            <h1 className="font-bold text-3xl">Marketplace</h1>
                        </div>
                    </div> */}

                    <div className="container m-auto px-4 flex justify-between pt-4">
                        <h3 className="font-bold text-2xl">Newest Courses</h3>
                    </div>

                    <div className="container m-auto px-4">
                        <NewCourses data={NewestCourse} />

                        <div className="grid md:grid-cols-2 gap-8 py-6">
                            <TopCourses data={TopCoursesData} />
                            <ExploreCategories data={exploreCategoriesData} />
                        </div>

                        <div>
                            <h3 className="font-bold text-2xl">Featured Courses</h3>
                            <FeaturedCourses data={featuredCoursesData} />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Marketplace;