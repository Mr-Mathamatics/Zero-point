import React from 'react'
import { Link } from 'react-router-dom'

const InnerPageBanner = ({title}) => {
  return (
    <div className='inner_page_breadcrumb relative flex items-center'>
      <div className='container px-4 mx-auto'>
        <div className='breadcrumb-content text-white text-center relative'>
            <h1>{title}</h1>
            <nav className="rounded-md w-full">
                <ol className="list-reset flex justify-center">
                    <li><Link to="" className="">Home</Link></li>
                    <li><span className="mx-2">/</span></li>
                    <li className="">{title}</li>
                </ol>
            </nav>
        </div>
      </div>
    </div>
  )
}

export default InnerPageBanner
