import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PublicRouter = () => {

    // const status = 'no-authenticated';
    const { status } = useAuth();
    if (status === 'authenticated') return <Navigate to='/admin' />
    return (
        <Outlet />
    )
}

export default PublicRouter