import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WebSite from '../layouts/WebSite'
import Home from '../pages/home/Home'
import EcoSystem from '../pages/ecosystem/EcoSystem'
import JKCSS from '../pages/ecosystem/jkcss/JKCSS'
import CoconutDB from '../pages/ecosystem/coconutdb/CoconutDB'
import BackendFramework from '../pages/ecosystem/coconutservejs/BackendFramework'
import AIJkcss from '../pages/ecosystem/JKCSCAI/AIJkcss'

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<WebSite />} >
                    <Route index element={<Home /> } />
                    <Route path='/eco-system'  element={<EcoSystem /> } />
                    <Route path='/eco-system/jkcss' element={<JKCSS /> } />
                    <Route path='/eco-system/coconutdb' element={<CoconutDB /> } />
                    <Route path='/eco-system/coconutServeJS' element={<BackendFramework /> } />
                    <Route path='/eco-system/ai-framework' element={<AIJkcss /> } />
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute