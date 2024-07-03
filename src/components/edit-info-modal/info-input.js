import React from 'react'

function InfoInput({label, id, cols, error, value, onChange}) {
  return (
    <div className={`h-fit rounded py-2 px-3.5 relative border ${!value.length && 'border-border'} ${!value.length && 'text-text-secondary'}${value.length && error ? 'border-error' : 'border-success'}  ${value.length && error ? 'text-error' : 'text-success'} col-span-${cols}`}>          
        <label className={`size-fit px-1 bg-bg-secondary absolute left-2 -top-2 text- ${!value.length && 'text-text-secondary'} ${value.length && error ? 'text-error' : 'text-success'}`} htmlFor={id}>
        {label}
        </label>
        <input id={id} autoComplete='off' className={`w-full text-subtitle-2 bg-[transparent] ${!value.length && 'text-text-secondary'} ${value.length && error ? 'text-error' : 'text-success'}`} value={value} onChange={onChange}/>
    </div>
  )
}

export default InfoInput