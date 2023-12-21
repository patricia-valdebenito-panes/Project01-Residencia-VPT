import React from 'react'
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (<>
      <main className='container bg-primary-50 mx-auto p-6 md:flex md:justify-center'>
        <div className='w-full xl:w-11/12 mx-auto'>
        <Outlet/>
        </div>

      </main>
      
  </>)
}
