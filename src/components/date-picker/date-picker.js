import Image from 'next/image'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import WeekLine from './week-line'
import MonthList from './month-list'
import { DatePeakerContext } from '@/context'

const daysOfWeek = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"]
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
const countDaysInMonth = (month, year) => {
    switch (month) {
        case "Февраль": {
            return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) ? 29 : 28
        }
        case "Апрель":
        case "Июнь":
        case "Сентябрь":
        case "Ноябрь": {
            return 30
        }   
        default: {
            return 31
        }
    }
}

const countFirstDate = ({month, year}) => {
    return new Date(`${month}.01.${year}`).getUTCDay()
}

const createMonthArray = (dateRange) => {
    return [
        ...new Array(countFirstDate(dateRange)).fill(null), 
        ...new Array(countDaysInMonth(dateRange)).fill(null).map((_e, i) => i+1)
    ]
}

function DatePicker({label, id, openedPicker, setOpenedPicker, value, onChange}) {
    let [dateRange, setDataRange] = useState({
        year: new Date().getFullYear(),
        month: new Date().getMonth()+1
    })
    return (
        <DatePeakerContext.Provider value={{value, onChange, setOpenedPicker, dateRange}}>
            <div
                className={`h-fit rounded py-2 px-3.5 relative border 
                    ${Date.parse(value.slice(3, 6) + value.slice(0, 3) + value.slice(6, 10)) === Date.now() && 'border-border'}
                    ${Date.parse(value.slice(3, 6) + value.slice(0, 3) + value.slice(6, 10)) > Date.now() && 'border-error'}
                    ${Date.parse(value.slice(3, 6) + value.slice(0, 3) + value.slice(6, 10)) < Date.now() && 'border-success'}
                col-span-1`} 
                onFocus={()=>{
                    setOpenedPicker(id)
                }}
                onClick={e => e.stopPropagation()}
            >          
                <label className={`size-fit px-1 bg-bg-secondary absolute left-2 -top-2 text-caption 
                    ${Date.parse(value.slice(3, 6) + value.slice(0, 3) + value.slice(6, 10)) === Date.now() && 'text-text-secondary'}
                    ${Date.parse(value.slice(3, 6) + value.slice(0, 3) + value.slice(6, 10)) > Date.now() && 'text-error'}
                    ${Date.parse(value.slice(3, 6) + value.slice(0, 3) + value.slice(6, 10)) < Date.now() && 'text-success'}
                `} htmlFor={id}>
                    {label}
                </label>
                <input
                    id={id} 
                    className={`w-full text-subtitle-2 bg-bg-secondary 
                        ${Date.parse(value.slice(3, 6) + value.slice(0, 3) + value.slice(6, 10)) === Date.now() && 'text-text-secondary'}
                        ${Date.parse(value.slice(3, 6) + value.slice(0, 3) + value.slice(6, 10)) > Date.now() && 'text-error'}
                        ${Date.parse(value.slice(3, 6) + value.slice(0, 3) + value.slice(6, 10)) < Date.now() && 'text-success'}
                    `}
                    onChange={onChange}
                    onClick={e => e.stopPropagation()}
                    value={value}
                />
                <div 
                    hidden={!(openedPicker === id)} 
                    className='w-[336px] rounded p-4 absolute left-0 top-12 bg-modal z-10'
                >
                    <div className='flex justify-between'>
                        <button type='button' className='text-subtitle-1 text-text-primary flex gap-2'>
                            {months[dateRange.month-1]} {dateRange.year}
                            <Image src={'/chevron-down.svg'} className='size-auto' width={24} height={24} alt=''/>
                        </button>
                        <div className='flex gap-8'>
                            <button type='button' onClick={() => setDataRange(prev => {
                                return {...prev, month: prev.month === 1 ? 12 : prev.month - 1, year: prev.month === 1 ? prev.year - 1 : prev.year}})}>
                                <Image src={'/chevron-left.svg'} className='size-auto' width={24} height={24} alt=''/>
                            </button>
                            <button disabled={dateRange.year === new Date().getFullYear} type='button' onClick={() => setDataRange(prev => {
                                return {...prev, month: prev.month === 12 ? 1 : prev.month + 1, year: prev.month === 12 ? prev.year + 1 : prev.year}})}>
                                <Image src={'/chevron-right.svg'} className='size-auto' width={24} height={24} alt=''/>
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <WeekLine disabled dayList={daysOfWeek}/>
                        <MonthList dayList={createMonthArray(dateRange)}/>
                    </div>
                </div>
            </div>
        </DatePeakerContext.Provider>
    )
}

export default DatePicker