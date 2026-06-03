import React from 'react'

const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 md:px-10 pt-40 pb-28">

            <div className="flex flex-wrap gap-3">
                <span className="border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-zinc-500">
                    NoSQL Database
                </span>

                <span className="border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-zinc-500">
                    Built in Sri Lanka 🇱🇰
                </span>

                <span className="border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-zinc-500">
                    Production Ready
                </span>
            </div>

            <div className="mt-12">

                <div className="text-zinc-600 uppercase tracking-[0.4em] text-sm">
                    BlackAlphaLabs Database
                </div>

                <h1 className="mt-6 text-5xl md:text-8xl font-black leading-[0.9] tracking-[-0.05em] text-white max-w-6xl">
                    CoconutDB
                </h1>

                <p className="mt-8 text-xl md:text-2xl text-zinc-300 max-w-3xl leading-10">
                    Document-oriented NoSQL database built for modern applications.
                </p>

                <p className="mt-8 text-lg md:text-xl text-zinc-400 max-w-3xl leading-9">
                    CoconutDB is a high-performance database engineered for scalability,
                    flexibility, and predictable performance. Designed for real-world
                    systems, it enables developers to build reliable and efficient
                    data-driven applications.
                </p>

            </div>

            <div className="mt-16 flex flex-wrap gap-5">

                <button className="px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300">
                    Get Started
                </button>

                <button className="px-8 py-4 border border-white/10 text-zinc-400 hover:text-white hover:border-white transition-all duration-300">
                    View Documentation
                </button>

            </div>

            <div className="mt-28 grid md:grid-cols-3 gap-10 border-t border-white/10 pt-10">

                <div>
                    <div className="text-4xl font-black text-white">01</div>
                    <p className="mt-3 text-zinc-400">
                        Document-centric storage using flexible JSON-like data models.
                    </p>
                </div>

                <div>
                    <div className="text-4xl font-black text-white">02</div>
                    <p className="mt-3 text-zinc-400">
                        Built for production with consistency, durability, and reliability.
                    </p>
                </div>

                <div>
                    <div className="text-4xl font-black text-white">03</div>
                    <p className="mt-3 text-zinc-400">
                        Predictable performance with optimized indexing and query execution.
                    </p>
                </div>

            </div>


            <div className="mt-32 border-t border-white/10 pt-16 grid lg:grid-cols-2 gap-16">

                <div>
                    <div className="text-zinc-600 uppercase tracking-[0.4em] text-sm">
                        Why CoconutDB
                    </div>

                    <h2 className="mt-6 text-4xl md:text-5xl font-black leading-[0.95] text-white">
                        Built for Real Systems
                    </h2>

                    <p className="mt-6 text-zinc-400 leading-8">
                        CoconutDB balances flexibility and control by combining schema-like validation,
                        scalable architecture, and developer-friendly query patterns.
                    </p>

                    <p className="mt-6 text-zinc-500 text-sm leading-7">
                        Designed to support large-scale applications while maintaining predictable behavior
                        and clean data structures.
                    </p>
                </div>

                <div>
                    <div className="text-zinc-600 uppercase tracking-[0.4em] text-sm">
                        Built By
                    </div>

                    <h2 className="mt-6 text-4xl md:text-5xl font-black leading-[0.95] text-white">
                        BlackAlphaLabs
                    </h2>

                    <p className="mt-6 text-zinc-400 leading-8">
                        Developed and maintained by BlackAlphaLabs, focused on building scalable,
                        reliable, and production-ready infrastructure tools for modern software systems.
                    </p>

                    <p className="mt-6 text-zinc-500 text-sm leading-7">
                        A system-first approach to engineering platforms that power next-generation applications.
                    </p>
                </div>

            </div>

        </section>
    )
}

export default Hero