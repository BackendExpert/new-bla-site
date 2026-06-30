import React from 'react'

const APIs = () => {
    const apis = [
        {
            id: 1,
            name: "JKRecipeAPI",
            link: "https://rapidapi.com/jehankandy/api/jkrecipeapi2",
            desc: "API developed for fetching food recipe data.",
            version: "1.0.0-beta2",
        },
        {
            id: 2,
            name: "Sri Lanka Cities API",
            link: "https://rapidapi.com/jehankandy/api/sri-lanka-cities-api",
            desc: "A high-performance REST API providing structured and reliable geographic data for Sri Lankan cities.",
            version: "1.0.0",
        },
        {
            id: 3,
            name: "RACD API",
            link: "https://rapidapi.com/jehankandy/api/racd-api1",
            desc: "Regional Administrative Citizen Data API Infrastructure for secure government and enterprise integrations.",
            version: "1.0.0-alpha1",
        },
        {
            id: 4,
            name: "Learning Hub API",
            link: "https://rapidapi.com/jehankandy/api/learning-hub-api-by-blackalphalabs",
            desc: "A modern, high-performance API designed to power educational platforms and learning applications.",
            version: "1.0.0-alpha",
        },
    ]

    return (
        <section id="apis" className="max-w-7xl mx-auto px-6 py-32">

            <div className="text-center mb-20">

                <span className="uppercase tracking-[0.4em] text-zinc-500 text-sm">
                    APIs
                </span>

                <h2 className="mt-6 text-5xl font-black text-white">
                    Public API Products
                </h2>

                <p className="mt-6 max-w-3xl mx-auto text-zinc-400 leading-8">
                    Production-ready REST APIs built for developers and businesses.
                    Available through RapidAPI for fast integration into your applications.
                </p>

            </div>

            <div className="grid gap-8 md:grid-cols-2">

                {apis.map((api) => (

                    <div
                        key={api.id}
                        className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 hover:border-white/30 hover:-translate-y-2 transition-all duration-300"
                    >

                        <div className="flex items-center justify-between">

                            <h3 className="text-2xl font-bold text-white">
                                {api.name}
                            </h3>

                            <span className="rounded-full bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 text-xs text-cyan-400">
                                {api.version}
                            </span>

                        </div>

                        <p className="mt-6 text-zinc-400 leading-7">
                            {api.desc}
                        </p>

                        <div className="mt-10 flex items-center justify-between">

                            <div>
                                <div className="text-xs uppercase tracking-widest text-zinc-500">
                                    Platform
                                </div>

                                <div className="mt-2 text-white font-semibold">
                                    RapidAPI
                                </div>
                            </div>

                            <a
                                href={api.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full border border-white px-6 py-3 text-white transition-all duration-300 hover:bg-white hover:text-black"
                            >
                                View API →
                            </a>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    )
}

export default APIs