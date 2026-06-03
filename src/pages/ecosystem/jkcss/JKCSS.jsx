import React from 'react'
import Hero from './Hero'
import ContentJKCSS from './ContentJKCSS'
import Versions from './Versions'

const JKCSS = () => {
    return (
        <div>
            <div className="">
                <Hero />
            </div>
            <div className="">
                <ContentJKCSS />
            </div>
            <div className="">
                <Versions />
            </div>
        </div>
    )
}

export default JKCSS