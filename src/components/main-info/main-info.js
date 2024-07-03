import React from 'react'
import PersonalInfo from '@/components/personal-info-card'
import WorkloadCard from '@/components/workload-card'

function InfoCard() {
  return (
    <div className='flex flex-wrap gap-4 mt-4'>
      <PersonalInfo />
      <WorkloadCard />
    </div>
  )
}

export default InfoCard