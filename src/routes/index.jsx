import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WebSite from '../layouts/WebSite'
import Home from '../pages/home/Home'

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<WebSite />} >
                    <Route index element={<Home /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute