import React from 'react'
import WeekLine from './week-line'

function MonthList({dayList}) {
  return (
    <div className='flex flex-col gap-2'>
        <WeekLine dayList={dayList.slice(0, 7)}/>
        <WeekLine dayList={dayList.slice(7, 14)}/>
        <WeekLine dayList={dayList.slice(14, 21)}/>
        <WeekLine dayList={dayList.slice(21, 28)}/>
        {dayList.length > 28 && <WeekLine dayList={dayList.slice(28, 35)}/>} 
        {dayList.length > 35 && <WeekLine dayList={dayList.slice(35, dayList.length)}/>} 
    </div>
  )
}

export default MonthList