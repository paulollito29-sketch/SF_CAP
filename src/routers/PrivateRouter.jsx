import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

const PrivateRouter = () => {

    // const status = 'no-authenticated';
    const { status } = useAuth();
    if (status === 'no-authenticated') return <Navigate to='/login' />
    return (
        <Outlet />
    )
}

export default PrivateRouter