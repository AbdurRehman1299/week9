import Link from 'next/link'
import { FaClipboardList } from "react-icons/fa";

function Page() {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='flex gap-10'>
        <Link href='/counter' className='flex flex-col justify-center items-center 
                                        w-[185px] h-[185px] text-[15px] border-2
                                      border-gray-500 rounded-md gap-4' >
          <h1 className='text-5xl'>0 &rarr; 1</h1>
          <p className='text-[20px]'>Counter Program</p>
        </Link>

        <Link href='/courses' className='flex flex-col justify-center items-center 
                                        w-[185px] h-[185px] text-[15px] border-2
                                      border-gray-500 rounded-md gap-4' >
          <FaClipboardList className='text-5xl'/>
          <p className='text-[20px]'>Courses List</p>
        </Link>
      </div>
    </div>
  )
}

export default Page