// import Image from 'next/image'
import Link from 'next/link'
import Socials from './Socials'

const Header = () => {
  return (
    <header className='absolute z-30 w-full items-center px-16 xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
          {/* logo  */}
          <Link href={'/'}>
            {/* <Image
              src={'/btphongDevLogo.svg'}
              width={220}
              height={48}
              alt=''
              priority={true}
            /> */}
            <h1 className='font-poppins text-3xl mt-2'>
              <b>btphong</b>
              <span className='font-thin'>Dev</span>
            </h1>
          </Link>
          {/* social  */}
          <Socials />
        </div>
      </div>
    </header>
  )
}

export default Header