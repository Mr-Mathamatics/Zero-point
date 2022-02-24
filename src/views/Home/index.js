import React from 'react';
import BannerSection from './components/Banner';
import FAQ from './components/FAQ';
import FaqData from './DataFake/FaqData'
import NewestCourse from '../Marketplace/DataFake/NewestCourse';
import NewCourses from '../Marketplace/components/NewCourses/newCourses'
import FeaturedSection from './components/FeaturedSection';
import FullPageLoader from '../../components/FullPageLoader/FullPageLoader';
import CounterNumerals from './components/counterNumeral'
import counterDataFake from './DataFake/CouterData';
const Home = () => {

    return (
        <>
            <BannerSection />

            <FeaturedSection />

            {/* React counter coding starts here */}
            <section className="mt-2 py-5" id="secthird">
                <CounterNumerals DataFake={counterDataFake}/>
            </section>
            {/* React count up ends here */}

            <FAQ data={FaqData} />

            <section className='sec-padding'>
                <div className="container mx-auto px-4">
                    <div className='grid grid-cols-12'>
                        <div className='col-span-10 col-start-2'>
                            <h3 className="font-bold text-2xl">Newest Courses</h3>
                            <NewCourses data={NewestCourse} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home