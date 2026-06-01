import React from 'react'

const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 md:px-10 pt-40 pb-28">

            <div className="flex flex-wrap gap-3">
                <span className="border border-white/10 px-4 py-2 rounded-full text-xs uppercase tracking-[0.3em] text-zinc-500">
                    Research
                </span>

                <span className="border border-white/10 px-4 py-2 rounded-full text-xs uppercase tracking-[0.3em] text-zinc-500">
                    Infrastructure
                </span>

                <span className="border border-white/10 px-4 py-2 rounded-full text-xs uppercase tracking-[0.3em] text-zinc-500">
                    Developer Ecosystem
                </span>
            </div>

            <div className="mt-12">

                <div className="text-zinc-600 uppercase tracking-[0.4em] text-sm">
                    BlackAlphaLabs
                </div>

                <h1 className="mt-6 text-5xl md:text-8xl font-black leading-[0.9] tracking-[-0.05em] text-white max-w-6xl">
                    Engineering An Entire Software Ecosystem From The Ground Up.
                </h1>

                <p className="mt-10 text-lg md:text-xl text-zinc-400 max-w-3xl leading-9">
                    We do not build client projects. We build infrastructure,
                    databases, frameworks, developer tooling, APIs, and research
                    systems that become the foundation of our own technology universe.
                </p>

            </div>

            <div className="mt-16 flex flex-wrap gap-5">

                <button className="px-8 py-4 border border-white rounded-full text-white">
                    Explore Platform
                </button>

                <button className="px-8 py-4 border border-white/10 rounded-full text-zinc-400">
                    View Research
                </button>

            </div>

            <div className="mt-28 grid md:grid-cols-4 gap-10 border-t border-white/10 pt-10">

                <div>
                    <div className="text-4xl font-black text-white">01</div>
                    <p className="mt-3 text-zinc-500">
                        Proprietary Databases
                    </p>
                </div>

                <div>
                    <div className="text-4xl font-black text-white">02</div>
                    <p className="mt-3 text-zinc-500">
                        Infrastructure Services
                    </p>
                </div>

                <div>
                    <div className="text-4xl font-black text-white">03</div>
                    <p className="mt-3 text-zinc-500">
                        Developer Tooling
                    </p>
                </div>

                <div>
                    <div className="text-4xl font-black text-white">04</div>
                    <p className="mt-3 text-zinc-500">
                        AI Research Systems
                    </p>
                </div>

            </div>

        </section>
    )
}

export default Hero