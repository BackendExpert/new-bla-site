import React from 'react'
import Hero from './Hero'
import ContentCDB from './ContentCDB'
import Versions from './Versions'

const CoconutDB = () => {
    return (
        <div>
            <div className="">
                <Hero />
            </div>
            <div className="">
                <ContentCDB />
            </div>
            <div className="">
                <Versions />
            </div>
        </div>
    )
}

export default CoconutDB