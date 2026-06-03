import React from 'react'

const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 md:px-10 pt-40 pb-28">

            <div className="flex flex-wrap gap-3">
                <span className="border border-white/10 px-4 py-2 rounded-full text-xs uppercase tracking-[0.3em] text-zinc-500">
                    v4.0.0 Stable Deployment
                </span>

                <span className="border border-white/10 px-4 py-2 rounded-full text-xs uppercase tracking-[0.3em] text-zinc-500">
                    Ecosystem Release
                </span>

                <span className="border border-white/10 px-4 py-2 rounded-full text-xs uppercase tracking-[0.3em] text-zinc-500">
                    High Performance Stack
                </span>
            </div>

            <div className="mt-12">

                <div className="text-zinc-600 uppercase tracking-[0.4em] text-sm">
                    BlackAlphaLabs
                </div>

                <h1 className="mt-6 text-5xl md:text-8xl font-black leading-[0.9] tracking-[-0.05em] text-white max-w-6xl">
                    The BlackAlphaLabs Ecosystem
                </h1>

                <p className="mt-10 text-lg md:text-xl text-zinc-400 max-w-3xl leading-9">
                    A unified suite of high-performance tools engineered for the next
                    generation of decentralized and real-time computing. Built from
                    first principles to power scalable infrastructure, intelligent
                    systems, and developer-first platforms.
                </p>

            </div>

            <div className="mt-16 flex flex-wrap gap-5">

                <button className="px-8 py-4 border border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300">
                    Explore Ecosystem
                </button>

                <button className="px-8 py-4 border border-white/10 rounded-full text-zinc-400 hover:text-white hover:border-white transition-all duration-300">
                    View Architecture
                </button>

            </div>

            <div className="mt-28 grid md:grid-cols-4 gap-10 border-t border-white/10 pt-10">

                <div>
                    <div className="text-4xl font-black text-white">01</div>
                    <p className="mt-3 text-zinc-500">
                        Distributed Infrastructure
                    </p>
                </div>

                <div>
                    <div className="text-4xl font-black text-white">02</div>
                    <p className="mt-3 text-zinc-500">
                        Real-time Data Systems
                    </p>
                </div>

                <div>
                    <div className="text-4xl font-black text-white">03</div>
                    <p className="mt-3 text-zinc-500">
                        Developer Platforms
                    </p>
                </div>

                <div>
                    <div className="text-4xl font-black text-white">04</div>
                    <p className="mt-3 text-zinc-500">
                        AI & Autonomous Engines
                    </p>
                </div>

            </div>

        </section>
    )
}

export default Hero