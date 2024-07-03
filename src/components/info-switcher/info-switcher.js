'use client'
import React, { useState } from 'react'

function InfoSwitcher() {
    let [activeTab, setActiveTab] = useState('main-info')
    return (
        <div className='max-w-[1414px] w-full desktop:mt-[52px] mt-6 flex'>
            <button
                onClick={() => {setActiveTab('main-info')}}
                className={`h-10 w-fit px-4 transition-all
                    flex justify-center items-center
                    text-button ${activeTab === 'main-info' ? 
                        'text-text-primary shadow-[0px_2px_0px_0px] shadow-accent' : 
                        'text-text-secondary shadow-[0px_1px_0px_0px] shadow-border hover:text-text-primary'
                    }`}
            >
                Основная информация
            </button>
            <button
                onClick={() => {setActiveTab('vacation')}}
                className={`h-10 w-fit px-4 transition-all
                    flex justify-center items-center
                    text-button ${activeTab === 'vacation' ? 
                        'text-text-primary shadow-[0px_2px_0px_0px] shadow-accent' : 
                        'text-text-secondary shadow-[0px_1px_0px_0px] shadow-border hover:text-text-primary'
                    }`}
            > 
                Отпуск
            </button>
        </div>
    )
}

export default InfoSwitcher