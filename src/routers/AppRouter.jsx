import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AdminPage from '../pages/AdminPage'
import CategoryPage from '../pages/CategoryPage'
import NotFoundPage from '../pages/NotFoundPage'
import ProductPage from '../pages/ProductPage'
import NavBar from '../components/NavBar'
import PublicRouter from './PublicRouter'
import PrivateRouter from './PrivateRouter'
import LoginPage from '../pages/LoginPage'
import { useAuth } from '../contexts/AuthContext'

export const AppRouter = () => {

    const { status } = useAuth();
    console.log(status);


    if (false) return <h1>Cargando...</h1>

    return (
        <>
            <NavBar />
            <Routes>
                <Route element={<PublicRouter />} >
                    <Route path='/' element={<HomePage />} />
                    <Route path='/login' element={<LoginPage />} />
                </Route>

                <Route element={<PrivateRouter />} >
                    <Route path='/admin' element={<AdminPage />} />
                    <Route path='/category' element={<CategoryPage />} />
                    <Route path='/product' element={<ProductPage />} />
                </Route>

                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </>
    )
}
