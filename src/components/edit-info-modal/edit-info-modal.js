import Image from 'next/image'
import React, { useState } from 'react'
import DatePicker from '@/components/date-picker'
import { Controller, useForm } from 'react-hook-form'
import InfoInput from './info-input'

function EditInfo({modalRef}) {
  let [openedPicker, setOpenedPicker] = useState(null)
  const {handleSubmit, control, reset} = useForm({mode: "all"})
  return (
    <section 
      className='w-screen min-w-360px max-w-[820px] h-fit flex flex-col desktop:gap-10 gap-6 rounded-xl desktop:p-[30px] self-start desktop:self-auto p-4 bg-bg-secondary'
      onClick={(e) => {
        e.stopPropagation() 
        setOpenedPicker(null)
      }}
    >
      <div className='flex justify-between'>
        <h2 className='text-title-3 desktop:text-h-5 text-text-primary'>
          Персональная информация
        </h2>
        <button className='text-subtitle-2 text-text-tertiary' onClick={() => {
          modalRef.current.close()
        }}>
          <Image src={'/exit.svg'} className='size-auto' width={24} height={24} alt=''/>
        </button>
      </div>
      <form 
        id='edit-form' 
        className='w-full h-fit grid desktop:grid-cols-2 desktop:gap-6 gap-4 grid-cols-1'
        onSubmit={handleSubmit((data) => {
          reset({data})
          modalRef.current.close()
        })}
      >
        <Controller name='name' defaultValue={''} control={control} rules={{
          required: true, minLength: 1
        }} render={
          ({fieldState: {error}, field: {value, onChange}}) =>{ 
            return <InfoInput error={error} label='Имя' id='name' cols='1' value={value} onChange={onChange}/>
          }
        }
        />
        <Controller name='surname' defaultValue={''} control={control} rules={{
          required: true, minLength: 1
        }} render={
          ({fieldState: {error}, field: {value, onChange}}) => {
            return <InfoInput error={error} label='Фамилия' id='surname' cols='1' value={value} onChange={onChange}/>
          }}
        />
        <Controller name='lastname' defaultValue={''} control={control} rules={{
          required: true, minLength: 1
        }} render={
          ({fieldState: {error}, field: {value, onChange}}) => {
            return <InfoInput error={error} label='Отчество' id='lastname' cols='full' value={value} onChange={onChange}/>
          }}
        />
        <Controller name='birthday' defaultValue={new Date().toLocaleDateString('ru')} control={control} rules={{
          required: true, minLength: 1
        }} render={
          ({fieldState: {error}, field: {value, onChange}}) => {
            return <DatePicker label="Дата рождения" id='birthday' openedPicker={openedPicker} setOpenedPicker={setOpenedPicker} value={value} onChange={onChange}/>
          }}
        />
        <Controller name='employeement' defaultValue={new Date().toLocaleDateString('ru')} control={control} rules={{
          required: true, minLength: 1
        }} render={
          ({fieldState: {error}, field: {value, onChange}}) => {
            return <DatePicker label="Дата трудоустройства" id='employeement' openedPicker={openedPicker} setOpenedPicker={setOpenedPicker} value={value} onChange={onChange}/>
          }}
        />
        <Controller name='country' defaultValue={''} control={control} rules={{
          required: true, minLength: 1
        }} render={
          ({fieldState: {error}, field: {value, onChange}}) => {
            return <InfoInput error={error} label='Страна' id='country' cols='1' value={value} onChange={onChange}/>
          }}
        />
        <Controller name='city' defaultValue={''} control={control} rules={{
          required: true, minLength: 1
        }} render={
          ({fieldState: {error}, field: {value, onChange}}) => {
            return <InfoInput error={error} label='Город' id='city' cols='1' value={value} onChange={onChange}/>
          }}
        />
        <Controller name='post' defaultValue={''} control={control} rules={{
          required: true, minLength: 1
        }} render={
          ({fieldState: {error}, field: {value, onChange}}) => {
            return <InfoInput error={error}
             label='Должность' id='post' cols='1' value={value} onChange={onChange}/>
          }}
        />
        <Controller name='email' defaultValue={''} control={control} rules={{
          required: true, minLength: 1,
          pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g
        }} render={
          ({fieldState: {error}, field: {value, onChange}}) => {
            return <InfoInput error={error}
            label='Электронная почта' id='email' cols='1' value={value} onChange={onChange}/>
          }}
        />
      </form>
        <button type='submit' form='edit-form' className='w-full rounded py-2.5 px-4 bg-accent text-button text-text-primary transition-all hover:bg-accent-hover focus-visible:bg-accent-focused'>
            Сохранить
        </button>
    </section>
  )
}

export default EditInfo