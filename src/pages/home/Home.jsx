import React from 'react'
import Hero from './Hero'
import WeBuild from './WeBuild'
import AboutUs from './AboutUs'
import CaseStudy from './CaseStudy'
import HowWeThink from './HowWeThink'

const Home = () => {
    return (
        <div>
            <div className="">
                <Hero />
            </div>
            <div className="">
                <WeBuild />
            </div>
            <div className="">
                <AboutUs />
            </div>
            <div className="">
                <CaseStudy />
            </div>
            <div className="">
                <HowWeThink />
            </div>
        </div>
    )
}

export default Home