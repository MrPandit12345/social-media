import React from 'react';
import { HiArrowNarrowLeft } from "react-icons/hi";
import Link from 'next/link'

const page = () => {
    let data = null;
  return (
    <div className='max-w-xl mx-auto border-r border-l min-h-screen'>
    <div className="flex items-center space-x-2 py-3 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
     <Link href={'/'} className=''>
      <HiArrowNarrowLeft/>
      </Link>
      <h2 className='sm:text-lg'>Back</h2>
      </div>
      <div className=''>

      </div>
    </div>
  )
}

export default page
