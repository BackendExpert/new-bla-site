import React from 'react'

const HowWeThink = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-32">

            <div className="max-w-4xl">

                <span className="text-zinc-600 uppercase tracking-[0.4em] text-sm">
                    Engineering Philosophy
                </span>

                <h2 className="mt-6 text-4xl md:text-7xl font-black leading-[0.95] tracking-[-0.05em] text-white">
                    How We Think.
                </h2>

                <p className="mt-10 text-zinc-400 text-xl leading-9">
                    Every system at BlackAlphaLabs is guided by a consistent
                    engineering philosophy. These principles influence how we
                    conduct research, design architecture, and build products
                    across the entire ecosystem.
                </p>

            </div>

            <div className="mt-24">

                <div className="border-t border-white/10 py-12 group">

                    <div className="grid lg:grid-cols-[120px_1fr_1fr] gap-10 items-start">

                        <div className="text-zinc-600 text-sm uppercase tracking-[0.3em]">
                            01
                        </div>

                        <h3 className="text-3xl md:text-5xl font-black text-white">
                            Ecosystem First
                        </h3>

                        <p className="text-zinc-500 leading-8">
                            We do not build isolated products. Every technology
                            is designed to strengthen the broader ecosystem and
                            create long-term architectural alignment.
                        </p>

                    </div>

                </div>

                <div className="border-t border-white/10 py-12 group">

                    <div className="grid lg:grid-cols-[120px_1fr_1fr] gap-10 items-start">

                        <div className="text-zinc-600 text-sm uppercase tracking-[0.3em]">
                            02
                        </div>

                        <h3 className="text-3xl md:text-5xl font-black text-white">
                            Research Before Implementation
                        </h3>

                        <p className="text-zinc-500 leading-8">
                            Engineering decisions are validated through
                            experimentation, benchmarking, analysis, and
                            practical evaluation before becoming production systems.
                        </p>

                    </div>

                </div>

                <div className="border-t border-white/10 py-12 group">

                    <div className="grid lg:grid-cols-[120px_1fr_1fr] gap-10 items-start">

                        <div className="text-zinc-600 text-sm uppercase tracking-[0.3em]">
                            03
                        </div>

                        <h3 className="text-3xl md:text-5xl font-black text-white">
                            Modularity By Design
                        </h3>

                        <p className="text-zinc-500 leading-8">
                            Systems should evolve independently while remaining
                            deeply connected. Modular architecture enables
                            flexibility without sacrificing cohesion.
                        </p>

                    </div>

                </div>

                <div className="border-t border-white/10 py-12 group">

                    <div className="grid lg:grid-cols-[120px_1fr_1fr] gap-10 items-start">

                        <div className="text-zinc-600 text-sm uppercase tracking-[0.3em]">
                            04
                        </div>

                        <h3 className="text-3xl md:text-5xl font-black text-white">
                            Performance As A Requirement
                        </h3>

                        <p className="text-zinc-500 leading-8">
                            Performance is considered during architecture,
                            implementation, deployment, and maintenance rather
                            than being treated as a later optimization step.
                        </p>

                    </div>

                </div>

                <div className="border-t border-white/10 py-12 group">

                    <div className="grid lg:grid-cols-[120px_1fr_1fr] gap-10 items-start">

                        <div className="text-zinc-600 text-sm uppercase tracking-[0.3em]">
                            05
                        </div>

                        <h3 className="text-3xl md:text-5xl font-black text-white">
                            Independence Through Ownership
                        </h3>

                        <p className="text-zinc-500 leading-8">
                            Long-term control over critical technology requires
                            ownership of the underlying infrastructure,
                            frameworks, tooling, and development workflow.
                        </p>

                    </div>

                </div>

                <div className="border-t border-b border-white/10 py-12 group">

                    <div className="grid lg:grid-cols-[120px_1fr_1fr] gap-10 items-start">

                        <div className="text-zinc-600 text-sm uppercase tracking-[0.3em]">
                            06
                        </div>

                        <h3 className="text-3xl md:text-5xl font-black text-white">
                            Automation Wherever Possible
                        </h3>

                        <p className="text-zinc-500 leading-8">
                            Repetitive work should become systems. Systems should
                            become platforms. Platforms should accelerate future
                            engineering efforts across the ecosystem.
                        </p>

                    </div>

                </div>

            </div>

            <div className="mt-24">

                <div className="border border-white/10 rounded-3xl p-10">

                    <div className="text-zinc-600 uppercase tracking-[0.3em] text-sm">
                        Internal Doctrine
                    </div>

                    <p className="mt-6 text-2xl md:text-4xl font-black text-white leading-tight">
                        Research Creates Knowledge.
                        <br />
                        Knowledge Creates Systems.
                        <br />
                        Systems Create Ecosystems.
                    </p>

                </div>

            </div>

        </section>
    )
}

export default HowWeThink