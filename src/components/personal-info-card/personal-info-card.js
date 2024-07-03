'use client'
import React, { useRef } from 'react'
import Modal from '@/components/modal';
import EditInfo from '@/components/edit-info-modal';

function PersonalInfo() {
    const modalRef = useRef(null)
    return (
        <section className='w-full max-w-[820px] h-fit rounded-xl py-[30px] px-4 desktop:px-[30px] bg-bg-secondary'>
            <div className='flex justify-between'>
                <h2 className='text-title-3 desktop:text-h-5 text-text-primary'>
                    Персональная информация
                </h2>
                <button className='text-subtitle-2 text-text-tertiary' onClick={() => {
                    modalRef.current.showModal()
                    document.addEventListener('scroll', e => e.preventDefault())
                }}>
                    Изменить
                </button>
            </div>
            <div className='w-full h-fit mt-8 grid desktop:grid-cols-2 gap-6 grid-cols-1'>
                <div className='h-fit rounded py-2 px-3.5 relative border border-border col-span-1 before:size-fit before:px-1 before:bg-bg-secondary before:absolute before:left-2 before:-top-2 before:content-["Имя"] before:text-caption before:text-text-secondary'>
                    <p className='w-full text-subtitle-2 text-text-secondary'>Юрий</p>
                </div>
                <div className='h-fit rounded py-2 px-3.5 relative border border-border col-span-1 before:size-fit before:px-1 before:bg-bg-secondary before:absolute before:left-2 before:-top-2 before:content-["Фамилия"] before:text-caption before:text-text-secondary'>
                    <p className='w-full text-subtitle-2 text-text-secondary'>Герыш</p>
                </div>
                <div className='h-fit rounded py-2 px-3.5 relative border border-border col-span-full before:size-fit before:px-1 before:bg-bg-secondary before:absolute before:left-2 before:-top-2 before:content-["Отчество"] before:text-caption before:text-text-secondary'>
                    <p className='w-full text-subtitle-2 text-text-secondary'>Андреевич</p>
                </div>
                <div className='h-fit rounded py-2 px-3.5 relative border border-border col-span-1 before:size-fit before:px-1 before:bg-bg-secondary before:absolute before:left-2 before:-top-2 before:content-["Дата_рождения"] before:text-caption before:text-text-secondary'>
                    <p className='w-full text-subtitle-2 text-text-secondary'>06.01.2014</p>
                </div>
                <div className='h-fit rounded py-2 px-3.5 relative border border-border col-span-1 before:size-fit before:px-1 before:bg-bg-secondary before:absolute before:left-2 before:-top-2 before:content-["Дата_трудоустройства"] before:text-caption before:text-text-secondary'>
                    <p className='w-full text-subtitle-2 text-text-secondary'>15.05.2020</p>
                </div>
                <div className='h-fit rounded py-2 px-3.5 relative border border-border col-span-1 before:size-fit before:px-1 before:bg-bg-secondary before:absolute before:left-2 before:-top-2 before:content-["Страна"] before:text-caption before:text-text-secondary'>
                    <p className='w-full text-subtitle-2 text-text-secondary'>Россия</p>
                </div>
                <div className='h-fit rounded py-2 px-3.5 relative border border-border col-span-1 before:size-fit before:px-1 before:bg-bg-secondary before:absolute before:left-2 before:-top-2 before:content-["Город"] before:text-caption before:text-text-secondary'>
                    <p className='w-full text-subtitle-2 text-text-secondary'>Красноярск</p>
                </div>
                <div className='h-fit rounded py-2 px-3.5 relative border border-border col-span-1 before:size-fit before:px-1 before:bg-bg-secondary before:absolute before:left-2 before:-top-2 before:content-["Должность"] before:text-caption before:text-text-secondary'>
                    <p className='w-full text-subtitle-2 text-text-secondary'>UI/UX designer</p>
                </div>
                <div className='h-fit rounded py-2 px-3.5 relative border border-border col-span-1 before:size-fit before:px-1 before:bg-bg-secondary before:absolute before:left-2 before:-top-2 before:content-["Электронная_почта"] before:text-caption before:text-text-secondary'>
                    <p className='w-full text-subtitle-2 text-text-secondary'>test@gmail.com</p>
                </div>
            </div>
            <Modal ref={modalRef}>
                <EditInfo modalRef={modalRef}/>
            </Modal>
        </section>
    )
}

export default PersonalInfo