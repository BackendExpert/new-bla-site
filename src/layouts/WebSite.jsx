import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/core/NavBar'
import Footer from '../components/core/Footer'

const WebSite = () => {
        const navmenu = [
        {
            id: 1,
            name: "Eco System",
            link: "#"
        },
        {
            id: 2,
            name: "Dev Tools",
            link: "#"
        },
        {
            id: 3,
            name: "Products",
            link: "#"
        },
        {
            id: 4,
            name: "Docs",
            link: "#"
        },
        {
            id: 5,
            name: "About",
            link: "#"
        },
    ]
    return (
        <div className="min-h-screen flex flex-col text-white antialiased bg-gradient-to-br from-zinc-950 via-neutral-900 to-zinc-950">
            <div className="">
                <NavBar />
            </div>
            <div className="min-h-screen mt-5">
                <Outlet />
            </div>  
            <div className="">
                <Footer />
            </div>
        </div>
    )
}

export default WebSite