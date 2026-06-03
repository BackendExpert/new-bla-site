import React from 'react'
import Hero from './Hero'
import JKCSS from './jkcss/ContentJKCSS'
import Content from './Content'
import Principles from './Principles'

const EcoSystem = () => {
    return (
        <div>
            <div className="">
                <Hero />
            </div>
            <div className="">
                <Content />
            </div>
            <section className="" id='#principles'>
                <Principles />
            </section>
        </div>
    )
}

export default EcoSystem