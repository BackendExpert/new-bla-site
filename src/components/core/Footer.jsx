import React from 'react'

const Footer = () => {
    const footermenus = [
        {
            id: 1,
            name: "BlackAlphaLabs",
            link: "/"
        },
        {
            id: 2,
            name: "Platform Overview",
            link: "#"
        },
        {
            id: 3,
            name: "Products",
            link: "#"
        },
        {
            id: 4,
            name: "Research Lab",
            link: "#"
        },
        {
            id: 5,
            name: "Publications",
            link: "#"
        },
        {
            id: 6,
            name: "Docs",
            link: "#"
        },
        {
            id: 7,
            name: "Changelog",
            link: "#"
        }
    ];

    return (
        <footer className='max-w-7xl mx-auto px-6 md:px-10 py-20'>
            <div className="grid lg:grid-cols-2 gap-20 border-t border-white/10 pt-20">

                <div>
                    <div className="overflow-hidden">
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-[0.2em] text-white leading-none">
                            BlackAlpha
                        </h1>

                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-[0.2em] text-white/30 leading-none mt-2">
                            Labs
                        </h1>
                    </div>

                    <div className="mt-10 max-w-2xl">
                        <p className="text-zinc-400 leading-8 text-base md:text-lg">
                            A forward-thinking, product-driven software company dedicated to engineering an interconnected, proprietary developer ecosystem. Driven by intensive, practical research, we design, maintain, and optimize our own specialized stack—spanning JKCSS, CoconutDB, CoconutServeJS, system-level APIs, native NPM packages, and intelligent VS Code extensions—independently architected for maximal execution speed, absolute stability, and a frictionless workspace for global developers.
                        </p>

                        <p className="text-zinc-500 leading-8 text-base md:text-lg mt-6">
                            Operating on a strict zero-client service mandate, our corporate infrastructure completely excludes external consultancies, client projects, or third-party contract development, ensuring 100% of our engineering capital and technical talent are focused exclusively on expanding and hardening our own proprietary product universe.
                        </p>
                    </div>

                    <div className="mt-12 flex flex-wrap gap-4">
                        <div className="border border-white/10 px-5 py-2 rounded-full text-sm text-zinc-400">
                            Research Driven
                        </div>

                        <div className="border border-white/10 px-5 py-2 rounded-full text-sm text-zinc-400">
                            Proprietary Stack
                        </div>

                        <div className="border border-white/10 px-5 py-2 rounded-full text-sm text-zinc-400">
                            Zero Client Work
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-between">

                    <div>
                        <h2 className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-10">
                            Navigation
                        </h2>

                        <div>
                            {
                                footermenus.map((data, index) => {
                                    return (
                                        <a
                                            key={data.id}
                                            href={data.link}
                                            className="group flex items-center justify-between py-5 border-b border-white/10"
                                        >
                                            <div className="flex items-center gap-6">
                                                <span className="text-zinc-600 text-sm">
                                                    0{index + 1}
                                                </span>

                                                <span className="text-lg md:text-xl text-white transition-all duration-300 group-hover:translate-x-2">
                                                    {data.name}
                                                </span>
                                            </div>

                                            <span className="text-zinc-600 transition-all duration-300 group-hover:text-white group-hover:translate-x-2">
                                                →
                                            </span>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="mt-16 border border-white/10 rounded-3xl p-8">
                        <h3 className="text-white text-2xl font-bold">
                            Building The Future Developer Infrastructure
                        </h3>

                        <p className="text-zinc-500 mt-4 leading-7">
                            Research, experimentation, and relentless engineering focused entirely on our own ecosystem.
                        </p>

                        <button className="mt-8 border border-white/20 px-8 py-3 rounded-full text-white hover:scale-105 transition-all duration-300">
                            Explore Ecosystem
                        </button>
                    </div>

                </div>
            </div>

            <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 justify-between items-center">
                <h1 className="text-sm md:text-base text-zinc-500">
                    © {new Date().getFullYear()}{' '}
                    <span className="font-bold text-white uppercase tracking-wider">
                        BlackAlphaLabs
                    </span>{' '}
                    All Rights Reserved.
                </h1>

                <div className="flex flex-wrap items-center justify-center md:justify-end text-xs md:text-sm uppercase tracking-[0.2em] text-zinc-600">
                    <span>Engineered In-House</span>

                    <div className="w-8 h-px bg-white/10 mx-4"></div>

                    <span>Research First</span>

                    <div className="w-8 h-px bg-white/10 mx-4"></div>

                    <span>Independent Infrastructure</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer