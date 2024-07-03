'use client'
import React, { forwardRef} from 'react'

const Modal = forwardRef(function Modal(props, ref) {
    return  <dialog className='absolute left-0 top-0 min-w-[360px] w-screen m-0 min-h-screen open:flex justify-center items-center bg-[transparent] z-10' ref={ref} onClick={() => {ref.current.close()}}>
                {props.children}
            </dialog>
})

export default Modal