import React from 'react'
import DayCell from './day-cell'

function WeekLine({dayList, disabled}) {
    return (
        <div className='flex gap-1'>
            {dayList.map((e, i) => {
                return <DayCell disabled={!e || disabled} isWeekend={i === 5 || i === 6} key={e+i}>{e}</DayCell>
            })}
        </div>
    )
}

export default WeekLine