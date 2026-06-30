import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WebSite from '../layouts/WebSite'
import Home from '../pages/home/Home'
import EcoSystem from '../pages/ecosystem/EcoSystem'
import JKCSS from '../pages/ecosystem/jkcss/JKCSS'
import CoconutDB from '../pages/ecosystem/coconutdb/CoconutDB'
import BackendFramework from '../pages/ecosystem/coconutservejs/BackendFramework'
import AIJkcss from '../pages/ecosystem/JKCSCAI/AIJkcss'
import DevTools from '../pages/devtools/DevTools'
import Products from '../pages/products/Products'
import Company from '../pages/company/Company'
import Publication from '../pages/company/Publication'
import Founder from '../pages/company/Founder'

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<WebSite />} >
                    <Route path='*' element={<EcoSystem /> } />

                    <Route index element={<Home /> } />
                    <Route path='/eco-system'  element={<EcoSystem /> } />
                    <Route path='/eco-system/jkcss' element={<JKCSS /> } />
                    <Route path='/eco-system/coconutdb' element={<CoconutDB /> } />
                    <Route path='/eco-system/coconutServeJS' element={<BackendFramework /> } />
                    <Route path='/eco-system/ai-framework' element={<AIJkcss /> } />

                    <Route path='/dev-tools'  element={<DevTools /> } />
                    <Route path='/products'  element={<Products /> } />

                    <Route path='/company'  element={<Company /> } />
                    <Route path='/publications' element={<Publication /> } />
                    <Route path='/founder' element={<Founder /> } />



                    
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute