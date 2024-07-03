import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BackToEmployees() {
  return (
    <Link href='#' className='w-fit h-8 px-4 flex gap-2 items-center'>
        <Image src={'/chevron-left.svg'} className='size-6' width={24} height={24} alt=''/>
        <span className='text-button text-end text-text-tertiary'>Вернуться к сотрудникам</span>
    </Link>
  )
}

export default BackToEmployees