import React from 'react'

const Publication = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-32">

            <div className="flex flex-wrap gap-3">

                <span className="border border-white/10 px-4 py-2 rounded-full text-xs uppercase tracking-[0.3em] text-zinc-500">
                    Publications
                </span>

                <span className="border border-white/10 px-4 py-2 rounded-full text-xs uppercase tracking-[0.3em] text-zinc-500">
                    Research
                </span>

                <span className="border border-white/10 px-4 py-2 rounded-full text-xs uppercase tracking-[0.3em] text-zinc-500">
                    Open Science
                </span>

            </div>

            <div className="mt-12">

                <div className="text-zinc-600 uppercase tracking-[0.4em] text-sm">
                    BlackAlphaLabs Research
                </div>

                <h1 className="mt-6 text-5xl md:text-8xl font-black leading-[0.9] tracking-[-0.05em] text-white max-w-6xl">
                    Research That <br />
                    Powers Software <br />
                    Innovation
                </h1>

                <p className="mt-10 text-lg md:text-xl text-zinc-400 max-w-3xl leading-9">
                    BlackAlphaLabs conducts independent research focused on
                    software engineering, developer platforms, programming
                    languages, databases, backend architectures, artificial
                    intelligence, and next-generation development tools.
                    Our publications are openly accessible through leading
                    academic platforms.
                </p>

            </div>

            <div className="mt-16 flex flex-wrap gap-5">

                <a
                    href="https://www.researchgate.net/profile/Jehan-Weerasuriya-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 border border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                    ResearchGate
                </a>

                <a
                    href="https://scholar.google.com/citations?hl=en&user=t4_aNDoAAAAJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 border border-white/10 rounded-full text-zinc-400 hover:text-white hover:border-white transition-all duration-300"
                >
                    Google Scholar
                </a>

            </div>

            <div className="mt-28 grid md:grid-cols-4 gap-10 border-t border-white/10 pt-10">

                <div>
                    <div className="text-4xl font-black text-white">01</div>
                    <p className="mt-3 text-zinc-500">
                        Software Engineering
                    </p>
                </div>

                <div>
                    <div className="text-4xl font-black text-white">02</div>
                    <p className="mt-3 text-zinc-500">
                        AI & Developer Tools
                    </p>
                </div>

                <div>
                    <div className="text-4xl font-black text-white">03</div>
                    <p className="mt-3 text-zinc-500">
                        Database Research
                    </p>
                </div>

                <div>
                    <div className="text-4xl font-black text-white">04</div>
                    <p className="mt-3 text-zinc-500">
                        Open Publications
                    </p>
                </div>

            </div>

        </section>
    )
}

export default Publication