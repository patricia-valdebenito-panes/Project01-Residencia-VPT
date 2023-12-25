import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

export const SecureRoute = () => {
    const { auth,loading } = useAuth();

    if(loading){return  (
        <>
            <div className='w-100 flex flex-row mx-auto'>
               Cargando...
            </div>
        </>
    )}

    return (
        <>
            { auth._id ? (
                <div className='w-100 mx-auto'>
                    <Header/>
                    <div className='md:flex md:min-h-screen flex-row'>
                        <Sidebar/>
                        <main className='flex-1 h-screen px-5 py-3 border-l-2 border-gray-200 bg-slate-50'>
                            <Outlet/> 
                        </main>
                    </div>
                </div>): 
                <Navigate to={"/"}/>
            }
        </>
    )
}
