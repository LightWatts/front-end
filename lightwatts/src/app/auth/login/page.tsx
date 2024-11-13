import LoginTemplate from '@/components/login'
import React from 'react'

export default function Login() {
  return (
    <div className='bg-black h-screen overflow-y-hidden overflow-x-hidden w-screen flex'>
      <div className='bg-white h-full w-2/5'>
        <LoginTemplate />
      </div>
      <div className='bg-black h-full w-3/5 flex justify-center items-center'>
      </div>
    </div>
  )
}
