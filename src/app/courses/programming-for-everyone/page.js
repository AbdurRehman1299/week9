import { FiCalendar } from 'react-icons/fi'
import { HiOutlineLocationMarker } from "react-icons/hi";

function ProgrammingForEveryOne() {
  return (
    <div className='bg-gray-300 min-h-screen'>
        <div className='w-full h-[130px] bg-gradient-to-r from-teal-200 to-teal-500'>
            <h1 className='text-center text-white text-3xl p-8'>Programming for everyone</h1>
            <div className='flex flex-2 items-center w-[580px] h-[200px] bg-[#324254] m-auto rounded-md md:flex-row'>
                <div className='h-full flex items-center'>
                    <img 
                        src='/program1.avif'
                        className='rounded-full w-[150px] h-[150px] border-white border-3 ml-8'
                    />
                </div>
                <div className='flex flex-col px-10 text-teal-600'>
                    <FiCalendar />
                    <p>2021-05-12</p>
                    <HiOutlineLocationMarker className='mt-5'/>
                    <p>Somewhere Street, 12345 San Somewhere</p>
                </div>
            </div>
            <h1 className='mt-4 w-[800px] m-auto text-center'>Everyone can learn to code! Yes everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.</h1>
        </div>
    </div>
  )
}

export default ProgrammingForEveryOne