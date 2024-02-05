import { useState } from 'react'
import { FaDollarSign, FaLocationDot } from 'react-icons/fa6'
import Star from './Star'
import { Job } from '@/utils/interfaces'
const JobDetailsPC = ({ jobPost }: { jobPost: Job }) => {
  const [checked, setChecked] = useState(false)
  const {
    location,
    salary: { max, min },
  } = jobPost
  return (
    <div className='hidden sm:flex flex-col sm:flex-row gap-0 sm:gap-2 col-span-3 lg:text-base justify-evenly lg:col-span-4 *:border *:border-black *:shadow-md *:sm:text-xs *:lg:text-sm'>
      <p className='flex gap-2 items-center bg-amber-300 px-2 rounded-md'>
        <span className='hidden lg:block'>
          <FaLocationDot />
        </span>
        <span className='block lg:hidden'>{location?.split(',')[0]}</span>
        <span className='hidden lg:block'>{location}</span>
      </p>
      <p className='flex items-center bg-lime-400 px-2 rounded-md'>
        <span className='hidden lg:block'>
          <FaDollarSign />
        </span>
        <button className='text-2xl absolute right-2'>
          <div className='rating rating-md transition-all'>
            <Star checked={checked} setChecked={setChecked} />
          </div>
        </button>
        <span>
          {min}K-{max}K
        </span>
      </p>
    </div>
  )
}
export default JobDetailsPC
