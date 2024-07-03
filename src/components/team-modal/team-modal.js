import Image from 'next/image'
import React from 'react'

const team = [
    {img: '/team-avatar-1.png', name: 'John Smith', post: 'Junior UI/UX designer'},
    {img: '/team-avatar-2.png', name: 'Sarah Brown', post: 'Middle Product Design TeamLead'},
    {img: '/team-avatar-3.png', name: 'David Taylor', post: 'Middle Android Developer'},
    {img: '/team-avatar-4.png', name: 'Ann Williams', post: 'Middle Head of Service'},
    {img: '/team-avatar-5.png', name: 'James Miller', post: 'CEO'},
    {img: '/team-avatar-6.png', name: 'Henry Jones', post: 'Middle QA'},
    {img: '/team-avatar-7.png', name: 'Charles Williams', post: 'Junior Employee Support Manager'},
    {img: '/team-avatar-8.png', name: 'Jane Miller', post: 'Middle Sales Manager'},
    {img: '/team-avatar-9.png', name: 'Sam Clark', post: 'QA Lead'}
]

function TeamModal({modalRef}) {

    return (
        <section 
            className='w-screen min-w-360px max-w-[650px] h-fit flex flex-col desktop:gap-10 gap-4 rounded-xl desktop:p-8 self-start desktop:self-auto p-4 bg-bg-secondary'
            onClick={e => e.stopPropagation()}
        >
            <div className='flex justify-between'>
                <h2 className='text-title-3 desktop:text-h-5 text-text-primary'>
                    Команда
                </h2>
                <button className='text-subtitle-2 text-text-tertiary' onClick={() => {
                    modalRef.current.close()
                }}>
                <Image src={'/exit.svg'} className='size-auto' width={24} height={24} alt=''/>
                </button>
            </div>
            <div className='flex flex-col gap-4'>
                {team.map((e, i) => {
                    return (
                        <div className='w-fit flex items-center gap-2' key={i}>
                            <Image src={e.img} className='size-auto' width={48} height={48} alt=''/>
                            <div className='w-fit flex flex-col gap-0'>
                                <p className='text-subtitle-1 text-text-primary'>
                                    {e.name}
                                </p>
                                <p className='text-body-2 text-text-secondary'>
                                    {e.post}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default TeamModal
