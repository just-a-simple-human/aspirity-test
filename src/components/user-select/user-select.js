'use client'
import Image from 'next/image'
import React, { useState } from 'react'

function UserSelect({avatar}) {
    let [isOpened, setIsOpened] = useState(false)
    return (
        <button
            className='w-20 h-9 py-1.5 px-4 flex border border-border rounded-full'
            onClick={() => {setIsOpened(prev => !prev)}}
        >
            <Image src={avatar} width={24} height={24} alt=''/>
            <Image src={'/chevron-down.svg'} className={`transition-transform ${isOpened && 'translate-y-0.5'}`} width={24} height={24} alt=''/>
        </button>
    )
}

export default UserSelect