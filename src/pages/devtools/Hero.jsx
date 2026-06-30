import React from 'react'

const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-32">


            <div className="flex flex-wrap gap-3">
                <span className="border border-white/10 px-4 py-2 rounded-full text-xs uppercase tracking-[0.3em] text-zinc-500">
                    NPM Packages
                </span>

                <span className="border border-white/10 px-4 py-2 rounded-full text-xs uppercase tracking-[0.3em] text-zinc-500">
                    VS Code Extensions
                </span>

                <span className="border border-white/10 px-4 py-2 rounded-full text-xs uppercase tracking-[0.3em] text-zinc-500">
                    Open Source
                </span>
            </div>


            <div className="mt-12">

                <div className="text-zinc-600 uppercase tracking-[0.4em] text-sm">
                    Developer Toolkit
                </div>

                <h1 className="mt-6 text-5xl md:text-8xl font-black leading-[0.9] tracking-[-0.05em] text-white max-w-6xl">
                    Build Faster with Powerful Developer Tools
                </h1>

                <p className="mt-10 text-lg md:text-xl text-zinc-400 max-w-3xl leading-9">
                    Discover a growing collection of modern NPM packages and
                    Visual Studio Code extensions designed to improve developer
                    productivity, simplify workflows, and accelerate application
                    development.
                </p>

            </div>


            <div className="mt-16 flex flex-wrap gap-5">

                <a target="_blank" href="https://www.npmjs.com/~jehankandy">
                    <button className="px-8 py-4 border border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300">
                        Explore Packages
                    </button>
                </a>

                <a target="_blank" href="https://www.npmjs.com/~backendexpert">
                    <button className="px-8 py-4 border border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300">
                        Explore More Packages
                    </button>
                </a>

            </div>


            <div className="mt-28 grid md:grid-cols-4 gap-10 border-t border-white/10 pt-10">

                <div>
                    <div className="text-4xl font-black text-white">30+</div>
                    <p className="mt-3 text-zinc-500">
                        Published NPM Packages
                    </p>
                </div>

                <div>
                    <div className="text-4xl font-black text-white">5+</div>
                    <p className="mt-3 text-zinc-500">
                        VS Code Extensions
                    </p>
                </div>

                <div>
                    <div className="text-4xl font-black text-white">100K+</div>
                    <p className="mt-3 text-zinc-500">
                        Total Downloads
                    </p>
                </div>

                <div>
                    <div className="text-4xl font-black text-white">MIT</div>
                    <p className="mt-3 text-zinc-500">
                        Open Source Licensed
                    </p>
                </div>

            </div>

        </section>
    )
}

export default Hero