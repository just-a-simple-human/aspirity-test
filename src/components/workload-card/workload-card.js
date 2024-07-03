'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import Modal from '@/components/modal';
import TeamModal from '@/components/team-modal';

function WorkloadCard() {
  const modalRef = useRef()
  return (
    <div className='w-full max-w-[658px] rounded-xl py-[30px] px-4 desktop:px-[30px] flex flex-col gap-10 bg-bg-secondary'>
      <div className='w-full flex justify-between'>
        <h2 className='text-h-5 text-text-primary'>
          Загрузка сотрудника
        </h2>
        <p className='text-button text-error'>
          100%
        </p>
      </div>
      <div className='flex flex-wrap gap-x-[124px]'>
        <div className='w-fit flex flex-col gap-2'>
          <p className='text-subtitle-1 text-text-tertiary'>
            Название проекта
          </p>
          <p className='text-subtitle-1 text-text-primary'>
            MedPoint 24
          </p>
        </div>
        <div className='w-fit flex flex-col gap-2'>
          <p className='text-subtitle-1 text-text-tertiary'>
            Тип проекта
          </p>
          <p className='text-subtitle-1 text-text-primary'>
            Коммерческий
          </p>
        </div>
      </div>
      <div className='flex flex-wrap gap-x-[78px]'>
        <div className='w-fit flex flex-col gap-2'>
          <p className='text-subtitle-1 text-text-tertiary'>
            Ответственный
          </p>
          <div className='w-fit flex items-center gap-2'>
            <Image src={'/curator.png'} className='' width={48} height={48} alt=''/>
            <p className='text-subtitle-1 text-text-primary'>Анна Кузнецова</p>
          </div>
        </div>
        <div className='w-fit flex flex-col gap-2'>
          <p className='text-subtitle-1 text-text-tertiary'>
            Команда
          </p>
          <button className='flex items-center gap-2' onClick={() => {modalRef.current.showModal()}}>
            <Image src={'/avatar-group.png'} className='size-auto' width={264} height={48} alt=''/>
            <span className='text-body-1 text-text-primary'>+2</span>
          </button>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <p className='text-subtitle-1 text-text-tertiary'>
          Сроки работы
        </p>
        <p className='flex gap-2 text-subtitle-1 text-text-secondary'>
          03 марта 2023 <Image src={'/arrow-right.svg'} className='size-auto' width={24} height={24} alt='' /> 23 марта 2023
        </p>
      </div>
      <button className='rounded py-2.5 px-4 bg-accent text-button text-text-primary transition-all hover:bg-accent-hover focus-visible:bg-accent-focused'>
        Посмотреть всю загрузку
      </button>
      <Modal ref={modalRef}>
        <TeamModal modalRef={modalRef}/>
      </Modal>
    </div>
  )
}

export default WorkloadCard