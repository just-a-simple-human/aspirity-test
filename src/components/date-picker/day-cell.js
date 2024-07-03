import { DatePeakerContext } from '@/context'
import React, { useContext } from 'react'

function DayCell({children, disabled, isWeekend}) {
    let {dateRange, onChange, setOpenedPicker} = useContext(DatePeakerContext)
    return (
        <button disabled={disabled} type='button' 
            className={`min-w-10 min-h-10 flex justify-center items-center text-subtitle-2 ${isWeekend ? 'text-error' : 'text-text-primary'}`}
            onClick={() => {
                onChange(
                    (children < 10 ? '0' : '') + children + 
                    '.' + (dateRange.month < 10 ? '0' : '') + dateRange.month + 
                    '.' + dateRange.year
                )
                setOpenedPicker(null)
            }}
        >
            {children || ''}
        </button>
    )
}

export default DayCell