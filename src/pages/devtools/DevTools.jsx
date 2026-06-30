import React from 'react'
import Hero from './Hero'
import NPMs from './NPMs'
import Vscode from './Vscode'

const DevTools = () => {
    return (
        <div>
            <section className="">
                <Hero />
            </section>
            <section className="" id='npms'>
                <NPMs />
            </section>
            <section className="" id='vscode'>
                <Vscode />
            </section>
        </div>
    )
}

export default DevTools