import Link from 'next/link'
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiTiktokLine,
  RiLinkedinLine,
} from 'react-icons/ri'
const Socials = () => {
  return (
    <div className='flex gap-x-5 items-center text-lg'>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiYoutubeLine />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiFacebookLine />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiTiktokLine />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
    </div>
  )
}

export default Socials
