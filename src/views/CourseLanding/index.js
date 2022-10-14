import React from 'react'
import InnerPageBanner from '../../components/InnerPageBanner'
import { Link } from 'react-router-dom';
import InputForms from '../../common/inputForm'
import RelatedCourses from './RelatedCourses';
import RelatedCourseItem from './DataFake/RelatedCourseItem';

const CourseLanding = () => {
  return (
    <>
      <main className=''>
        <InnerPageBanner title={"Course Landing Page"} />
        <div className='container mx-auto px-4 sec-padding'>
          <div className='grid gap-4 grid-cols-4'>
            <div className='col-span-3'>
              <div className='course-details-left'>
                <div className="course_tag font-medium text-white rounded bg-color-1 static">
                  Development
                </div>
                <h2 className='font-bold py-3'>The business Intelligence analyst Course 2022</h2>
                <div className='course_info flex items-center mb-12'>
                  <div className='teacher_info flex items-center mr-12'>
                    <img src="./images/user-1.jpg" className='mr-3' alt="" />
                    <div className='short_info'>
                      <span className='mb-0 fomt-medium text-sm short_title'>Teacher</span>
                      <h6 className='font-medium text-gray-900'>Elon Gated</h6>
                    </div>
                  </div>
                  <div className='short_info mr-12'>
                    <span className='mb-0 fomt-medium text-sm short_title'>Last Update:</span>
                    <h6 className='font-medium text-gray-900'>July 24, 2022</h6>
                  </div>
                  <div className='short_info'>
                    <span className='mb-0 fomt-medium text-sm short_title'>Review:</span>
                    <h6 className='font-medium text-gray-900 flex items-center'>
                      <div className="back-ratings text-sm"> 
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </div>
                      4.5
                    </h6>
                  </div>
                </div>
                <img src="./images/course-details-1.jpg" className='rounded' alt='' />
                <div className='pt-12'>
                  <ul className="course-tab nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 mb-4 bg-white py-3 rounded" id="tabs-tab"
                    role="tablist">
                    <li className="nav-item" role="presentation">
                      <a href="#tabs-home" className="
                        nav-link
                        block
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        px-8
                        py-4
                        bg-gray-100
                        
                        focus:border-transparent
                        active
                      " id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"
                        aria-selected="true"><i class="fas fa-layer-group pr-1"></i> Description</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a href="#tabs-profile" className="
                        nav-link
                        block
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        px-8
                        py-4
                        bg-gray-100
                        
                        focus:border-transparent
                      " id="tabs-curriculum-tab" data-bs-toggle="pill" data-bs-target="#tabs-curriculum" role="tab"
                        aria-controls="tabs-curriculum" aria-selected="false"><i className="fa fa-book pr-1"></i> Curriculum</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a href="#tabs-profile" className="
                        nav-link
                        block
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        px-8
                        py-4
                        bg-gray-100
                        
                        focus:border-transparent
                      " id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
                        aria-controls="tabs-profile" aria-selected="false"><i className='fa fa-star pr-1'></i> Reviews</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a href="#tabs-messages" className="
                        nav-link
                        block
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        px-8
                        py-4
                        bg-gray-100
                        
                        focus:border-transparent
                      " id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab"
                        aria-controls="tabs-messages" aria-selected="false"><i className='fa fa-user pr-1'></i> About Author</a>
                    </li>
                  </ul>
                  <div className="tab-content" id="tabs-tabContent">
                    <div className="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
                      <div className='bg-white p-6 pt-4 course-box'>
                        <h2>Course Overview</h2>
                        <h5>Course Description</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <h5 className='pt-4'>What you'll learn</h5>
                        <ul className='columns-2 check-list pl-5'>
                          <li>Become a UI designer.</li>
                          <li>Become a UX designer.</li>
                          <li>Build & test a full website design.</li>
                          <li>Build & test a full mobile app.</li>
                          <li>Learn to design websites & mobile phone apps.</li>
                          <li>You'll learn how to choose colors.</li>
                          <li>Prototype your designs with interactions.</li>
                          <li>Export production ready assets.</li>
                          <li>All the techniques used by UX professionals</li>
                          <li>You will be able to add UX designer to your CV</li>
                        </ul>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tabs-curriculum" role="tabpanel" aria-labelledby="tabs-curriculum-tab">
                      <div className='bg-white p-6 pt-4 course-box mt-4'>
                        <h2>Curriculum</h2>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
                      <div className='bg-white p-6 pt-4 course-box mt-4'>
                        <h2>Reviews</h2>
                        <div className='review-item flex items-center mb-4'>
                          <div className='review-image w-20'>
                            <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                          </div>
                          <div className=''>
                            <div className="back-ratings text-sm"> 
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <h5 className='name mb-0'>Jassica Miller <span className="designation text-sm font-normal">July 8, 2022 at 7:38 am</span></h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
                          </div>
                        </div>
                        <div className='review-item flex items-center mb-4'>
                          <div className='review-image w-20'>
                            <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                          </div>
                          <div className=''>
                            <div className="back-ratings text-sm"> 
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <h5 className='name mb-0'>Jassica Miller <span className="designation text-sm font-normal">July 8, 2022 at 7:38 am</span></h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
                          </div>
                        </div>
                        <div className='mt-8'>
                          <h2 className='mb-0'>Write a Review</h2>
                          <p>Your email address will not be published. Required fields are marked *</p>
                          <div className='ratings flex items-center pt-1 pb-3'>
                            <h6 className='mb-0 font-medium'>Ratings:</h6>
                            <div className="text-sm ml-3"> 
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                          </div>
                          <form>
                            <div className='grid grid-cols-2 gap-4'>
                              <div className=''>
                                  <label className="block font-medium mb-2 text-gray-700">Name</label>
                                  <InputForms
                                      className="block font-medium"
                                      type='text'
                                      name="name"
                                      value=''
                                      placeholder="Name"
                                  />
                              </div>
                              <div className=''>
                                  <label className="block font-medium mb-2 text-gray-700">Email</label>
                                  <InputForms
                                      className="block font-medium"
                                      type='text'
                                      name="email"
                                      value=''
                                      placeholder="Email"
                                  />
                              </div>
                              <div className='col-span-2'>
                                <label className="block font-medium mb-2 text-gray-700">Subject</label>
                                <InputForms
                                    className="block font-medium"
                                    type='text'
                                    name="subject"
                                    value=''
                                    placeholder="Subject"
                                />
                            </div>
                            <div className='col-span-2'>
                            
                            <label className="block font-medium mb-2 text-gray-700">Message</label>
                            <textarea
                              className="
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none
                              "
                              id="exampleFormControlTextarea1"
                              rows="3"
                              placeholder="Your message"
                            ></textarea>
                            </div>
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold mt-4 uppercase py-3 px-8 rounded max-w-max">Submit</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tabs-messages" role="tabpanel" aria-labelledby="tabs-profile-tab">
                      <div className='bg-white course-box p-6 pt-4'>
                        <h5 className='mb-0'>Jassica Miller</h5>
                        <p>GameDev.tv Founder :: Entrepreneur :: Passionate Teacher</p>
                        <div className='author-overview flex items-center'>
                          <div className='author-image mr-3'>
                            <img src='images/user-1.jpg' className='rounded-full w-20 h-20 object-cover' alt='' />
                          </div>
                          <div className='overview-item'>
                            <ul>
                              <li><i className='fa fa-star'></i> 4.7 Instructor Rating</li>
                              <li><i className="fa fa-bookmark"></i> 114,059 Reviews</li>
                              <li><i className="fa fa-users"></i> 904,190 Students</li>
                              <li><i className="fa fa-play-circle"></i> 14 Courses</li>
                            </ul>
                          </div>
                        </div>
                        <div className='mt-4'>
                          <p>Hi, I'm Jassica Miller. I have a degree in computing from Imperial College London, and a physics diploma from the Open University.</p>
                          <p>I started working for myself at the age of 15, and never looked back. I explored careers as varied as being a commercial pilot, stunt-man, rock climbing instructor, and more. None of these provided a continued challenge, and stable income in the same way technology does. </p>
                          <p>After building and selling a home computer support business, I became an angel investor and business mentor here in Cambridge UK. I fell in love with teaching game development through one of my investments, and I now spend all of my time sharing my passion with people like you. </p>
                          <p>I can't wait to help you experience the fulfilment, and financial freedom, that having a deep understanding of technology brings. </p>
                          <p>So why not start learning to make games with me and my team now?</p>
                          <p>See you soon! </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-white p-4 mt-4 rounded'>
                <h2 className='mb-0'>Related Courses</h2>
                  <RelatedCourses data={RelatedCourseItem} />
                </div>
              </div>
            </div>
            <div className=''>
              <div className='bg-white course-sidebox'>
                <ul className="price flex items-center p-8">
                  <li>$ 72 USD</li>
                  <li className='line-through leading-4 font-medium text-sm'>$ 95 USD</li>
                  <li className='leading-4 font-medium p-1 rounded text-sm'>25% OFF</li>
                </ul>
                <ul className='price-courses p-8'>
                  <li> <i className="fa fa-user"></i> Instructor <span className='float-right'>Penny Tool</span></li>
                  <li><i className="fa fa-tag"></i> Subject <span className='float-right'>IT &amp; Software</span></li>
                  <li> <i className="fa fa-users"></i> Enrolled <span className='float-right'>146 students</span></li>
                  <li><i className="fa fa-clock"></i> Duration <span className='float-right'>2 weeks</span></li>
                  <li><i className="fa fa-book"></i> Lectures <span className='float-right'>4 lectures</span></li>
                  <li><i className="fa fa-map"></i> Language <span className='float-right'> English</span></li>
                </ul>
                <div className='px-8 pb-8'>
                  <Link to="" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold uppercase py-3 px-8 rounded block text-center">
                  Add to cart </Link>
                  <div className='share font-medium text-center mt-4 flex items-center justify-center'>
                    Share this course
                    <i className="fa fa-share-alt ml-2  flex items-center justify-center" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <div className='bg-white course-sidebox p-8 mt-4'>
                <h5>Related Course</h5>
                <div className='sidebar-course flex items-center mt-6'>
                  <img src="./images/course-1.jpg" className='course_img object-cover mr-4' alt='' />
                  <div>
                    <ul className="rating yellow-star flex inline-block">
                      <li><i className='fa fa-star'></i></li>
                      <li><i className='fa fa-star'></i></li>
                      <li><i className='fa fa-star'></i></li>
                      <li><i className='fa fa-star'></i></li>
                      <li><i className='fa fa-star'></i></li>
                    </ul>
                    <div className='course_name font-medium text-sm'>Development</div>
                    <div className='course_price font-medium text-sm'>$54.00</div>
                  </div>
                </div>
                <div className='sidebar-course flex items-center mt-6'>
                  <img src="./images/course-2.jpg" className='course_img object-cover mr-4' alt='' />
                  <div>
                    <ul className="rating yellow-star flex inline-block">
                      <li><i className='fa fa-star'></i></li>
                      <li><i className='fa fa-star'></i></li>
                      <li><i className='fa fa-star'></i></li>
                      <li><i className='fa fa-star'></i></li>
                      <li><i className='fa fa-star'></i></li>
                    </ul>
                    <div className='course_name font-medium text-sm'>Data Science</div>
                    <div className='course_price font-medium text-sm'>$74.00</div>
                  </div>
                </div>
                <div className='sidebar-course flex items-center mt-6'>
                  <img src="./images/course-3.jpg" className='course_img object-cover mr-4' alt='' />
                  <div>
                    <ul className="rating yellow-star flex inline-block">
                      <li><i className='fa fa-star'></i></li>
                      <li><i className='fa fa-star'></i></li>
                      <li><i className='fa fa-star'></i></li>
                      <li><i className='fa fa-star'></i></li>
                      <li><i className='fa fa-star'></i></li>
                    </ul>
                    <div className='course_name font-medium text-sm'>UI Design</div>
                    <div className='course_price font-medium text-sm'>Free</div>
                  </div>
                </div>
              </div>
              <div className='bg-white course-box  p-8 mt-4'>
                <h5>Course categories</h5>
                <ul className='list-item'>
                  <li><Link to="">Art & Design (6)</Link></li>
                  <li><Link to="">Exercise (4)</Link></li>
                  <li><Link to="">Photography (8)</Link></li>
                  <li><Link to="">Environmental Sciences (3)</Link></li>
                  <li><Link to="">Software Training (5)</Link></li>
                  <li><Link to="">Software Development (2)</Link></li>
                  <li><Link to="">Music (10)</Link></li>
                  <li><Link to="">Material Design (2)</Link></li>
                  <li><Link to="">Technology (7)</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default CourseLanding
