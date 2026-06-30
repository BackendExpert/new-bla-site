import React from 'react'

const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-32">


            <div className="flex flex-wrap gap-3">

                <span className="border border-white/10 px-4 py-2 rounded-full text-xs uppercase tracking-[0.3em] text-zinc-500">
                    Products
                </span>

                <span className="border border-white/10 px-4 py-2 rounded-full text-xs uppercase tracking-[0.3em] text-zinc-500">
                    REST APIs
                </span>

                <span className="border border-white/10 px-4 py-2 rounded-full text-xs uppercase tracking-[0.3em] text-zinc-500">
                    RapidAPI Ready
                </span>

            </div>


            <div className="mt-12">

                <div className="text-zinc-600 uppercase tracking-[0.4em] text-sm">
                    BlackAlphaLabs Products
                </div>

                <h1 className="mt-6 text-5xl md:text-8xl font-black leading-[0.9] tracking-[-0.05em] text-white max-w-6xl">
                    Powerful APIs for Modern Applications
                </h1>

                <p className="mt-10 text-lg md:text-xl text-zinc-400 max-w-3xl leading-9">
                    Build faster with secure, scalable, and production-ready REST
                    APIs developed by BlackAlphaLabs. Our APIs are designed for
                    developers and businesses, with simple integration through
                    RapidAPI and standard HTTP requests.
                </p>

            </div>


            <div className="mt-16 flex flex-wrap gap-5">

                <button className="px-8 py-4 border border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300">
                    Browse APIs
                </button>

                <button className="px-8 py-4 border border-white/10 rounded-full text-zinc-400 hover:text-white hover:border-white transition-all duration-300">
                    View Documentation
                </button>

            </div>

   
            <div className="mt-28 grid md:grid-cols-4 gap-10 border-t border-white/10 pt-10">

                <div>
                    <div className="text-4xl font-black text-white">01</div>
                    <p className="mt-3 text-zinc-500">
                        Custom REST APIs
                    </p>
                </div>

                <div>
                    <div className="text-4xl font-black text-white">02</div>
                    <p className="mt-3 text-zinc-500">
                        RapidAPI Integration
                    </p>
                </div>

                <div>
                    <div className="text-4xl font-black text-white">03</div>
                    <p className="mt-3 text-zinc-500">
                        Secure Authentication
                    </p>
                </div>

                <div>
                    <div className="text-4xl font-black text-white">04</div>
                    <p className="mt-3 text-zinc-500">
                        Production Ready
                    </p>
                </div>

            </div>

        </section>
    )
}

export default Hero