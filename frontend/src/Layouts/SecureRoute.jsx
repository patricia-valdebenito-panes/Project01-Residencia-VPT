import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export const SecureRoute = () => {
    const { auth,loading } = useAuth();
    console.log(auth);

    if(loading){return  (
        <>
            <div className='container'>
               Cargando...
            </div>
        </>
    )}

    return (
        <>
            <div className='container'>
                { auth._id ? <Outlet/>:<Navigate to={"/"}/>}
            </div>
        </>
    )
}
