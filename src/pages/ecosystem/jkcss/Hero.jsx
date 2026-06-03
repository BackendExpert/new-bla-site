import React from 'react'

const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 md:px-10 pt-40 pb-28">

            <div className="flex flex-wrap gap-3">
                <span className="border border-white/10 px-4 py-2 rounded-full text-xs uppercase tracking-[0.3em] text-zinc-500">
                    Utility First
                </span>

                <span className="border border-white/10 px-4 py-2 rounded-full text-xs uppercase tracking-[0.3em] text-zinc-500">
                    Built in Sri Lanka 🇱🇰
                </span>

                <span className="border border-white/10 px-4 py-2 rounded-full text-xs uppercase tracking-[0.3em] text-zinc-500">
                    Production Ready
                </span>
            </div>

            <div className="mt-12">

                <div className="text-zinc-600 uppercase tracking-[0.4em] text-sm">
                    BlackAlphaLabs Framework
                </div>

                <h1 className="mt-6 text-5xl md:text-8xl font-black leading-[0.9] tracking-[-0.05em] text-white max-w-6xl">
                    JKCSS
                </h1>

                <p className="mt-8 text-xl md:text-2xl text-zinc-300 max-w-3xl leading-10">
                    Utility-first CSS framework built for speed and clarity.
                </p>

                <p className="mt-8 text-lg md:text-xl text-zinc-400 max-w-3xl leading-9">
                    A modern framework engineered for predictable layouts, clean semantics, and long-term maintainability. Designed in South Asia to power scalable UI systems with simplicity and performance at its core.
                </p>

            </div>

            <div className="mt-16 flex flex-wrap gap-5">

                <a target='_blank' href="https://jkcss-css-framework.github.io/JKCSS-Framework/site/content/docs/index.html">
                    <button className="px-8 py-4 border border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300">
                        Get Started
                    </button>
                </a>


                <button className="px-8 py-4 border border-white/10 rounded-full text-zinc-400 hover:text-white hover:border-white transition-all duration-300">
                    View Documentation
                </button>

            </div>

            <div className="mt-28 grid md:grid-cols-3 gap-10 border-t border-white/10 pt-10">

                <div>
                    <div className="text-4xl font-black text-white">01</div>
                    <p className="mt-3 text-zinc-400">
                        Human-readable utilities designed for clean and structured UI development.
                    </p>
                </div>

                <div>
                    <div className="text-4xl font-black text-white">02</div>
                    <p className="mt-3 text-zinc-400">
                        Production-ready architecture built to scale across complex applications.
                    </p>
                </div>

                <div>
                    <div className="text-4xl font-black text-white">03</div>
                    <p className="mt-3 text-zinc-400">
                        Predictable layouts with minimal conflicts and consistent behavior.
                    </p>
                </div>

            </div>

        </section>
    )
}

export default Hero