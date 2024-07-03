import Image from 'next/image'
import React from 'react'

function MenuBurger() {
    return (
        <button className='w-10 h-10 p-2'>
            <Image src={'/burger.svg'} className='w-auto h-auto' width={24} height={24} alt=''/>
        </button>
    )
}

export default MenuBurger