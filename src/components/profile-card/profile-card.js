import Image from 'next/image'
import React from 'react'
import InfoSwitcher from '@/components/info-switcher'

function ProfileCard() {
  return (
    <div className='w-full max-h-[452px] min-h-96 rounded-xl mt-2 
    pt-[clamp(32px,8vw,40px)] desktop:pb-5 pb-7 px-[clamp(16px,4vw,40px)] 
    flex flex-col items-center bg-bg-secondary'>
      <div className='w-full h-fit flex flex-col desktop:flex-row flex-wrap gap-x-12 desktop:items-start items-center'>
        <Image src={'/avatar-160.png'} width={160} height={160} alt=''/>
        <div className='flex flex-col items-center desktop:items-start desktop:gap-y-8 gap-y-6'>
          <h1 className='w-fit h-fit mt-4 desktop:mt-6 desktop:text-custom-headline text-2xl text-center desktop:text-start text-text-primary leading-8'>
            Иванов<br/>Иван Иванович
          </h1>
          <div className='w-fit flex flex-col items-center desktop:items-start gap-4' >
            <p className='text-subtitle-1 text-text-primary'>UI/UX designer</p>
            <p className='text-subtitle-1 text-text-primary'>Россия, Красноярск</p>
          </div>
        </div>
      </div>
      <InfoSwitcher />
    </div>
  )
}

export default ProfileCard