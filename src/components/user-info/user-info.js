import React from 'react'
import ProfileCard from '@/components/profile-card';
import InfoCard from '@/components/main-info';

function UserInfo() {
  return (
    <div className='w-full h-fit'>
        <ProfileCard />
        <InfoCard />
    </div>
  )
}

export default UserInfo