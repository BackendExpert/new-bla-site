import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WebSite from '../layouts/WebSite'
import Home from '../pages/home/Home'
import EcoSystem from '../pages/ecosystem/EcoSystem'
import JKCSS from '../pages/ecosystem/jkcss/JKCSS'

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<WebSite />} >
                    <Route index element={<Home /> } />
                    <Route path='/eco-system'  element={<EcoSystem /> } />
                    <Route path='/eco-system/jkcss' element={<JKCSS /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute