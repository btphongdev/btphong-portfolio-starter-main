import Image from 'next/image'

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image
        src={'/avatar2-removebg (1).png'}
        alt=''
        width={737}
        height={678}
        className='translate-z-0 h-full w-full drop-shadow-2xl '
      />
    </div>
  )
}

export default Avatar
