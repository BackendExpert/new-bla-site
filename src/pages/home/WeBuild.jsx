import React from 'react'

const WeBuild = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-32">

            <div className="max-w-3xl">

                <span className="text-zinc-600 uppercase tracking-[0.4em] text-sm">
                    What We Build
                </span>

                <h2 className="mt-6 text-4xl md:text-7xl font-black leading-[0.95] tracking-[-0.05em] text-white">
                    A Connected Software Ecosystem.
                </h2>

                <p className="mt-8 text-zinc-400 text-lg leading-8">
                    Every system we create is designed to strengthen the next.
                    Frameworks power services. Services power infrastructure.
                    Infrastructure powers products.
                </p>

            </div>

            <div className="mt-24">

                <div className="group border-t border-white/10 py-10 cursor-pointer">

                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">

                        <div>
                            <div className="text-zinc-600 text-sm uppercase tracking-[0.3em]">
                                01
                            </div>

                            <h3 className="mt-4 text-4xl md:text-6xl font-black text-white">
                                JKCSS
                            </h3>

                            <p className="mt-4 text-zinc-500 max-w-xl">
                                South Asia's research-driven CSS framework engineered
                                for performance, consistency, and scalable interface systems.
                            </p>
                        </div>

                        <div className="lg:max-w-xl">
                            <p className="text-zinc-400 leading-8">
                                Built from years of frontend experimentation, JKCSS
                                focuses on reducing development friction while
                                maintaining complete design flexibility.
                            </p>
                        </div>

                    </div>

                </div>

                <div className="group border-t border-white/10 py-10 cursor-pointer">

                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">

                        <div>
                            <div className="text-zinc-600 text-sm uppercase tracking-[0.3em]">
                                02
                            </div>

                            <h3 className="mt-4 text-4xl md:text-6xl font-black text-white">
                                CoconutDB
                            </h3>

                            <p className="mt-4 text-zinc-500 max-w-xl">
                                A document-oriented database engine built for modern
                                applications and large-scale data operations.
                            </p>
                        </div>

                        <div className="lg:max-w-xl">
                            <p className="text-zinc-400 leading-8">
                                CoconutDB combines flexible document storage,
                                optimized querying, and a simplified developer
                                experience without sacrificing performance.
                            </p>
                        </div>

                    </div>

                </div>

                <div className="group border-t border-b border-white/10 py-10 cursor-pointer">

                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">

                        <div>
                            <div className="text-zinc-600 text-sm uppercase tracking-[0.3em]">
                                03
                            </div>

                            <h3 className="mt-4 text-4xl md:text-6xl font-black text-white">
                                CoconutServeJS
                            </h3>

                            <p className="mt-4 text-zinc-500 max-w-xl">
                                A research-based backend service engine designed
                                for modern web infrastructure.
                            </p>
                        </div>

                        <div className="lg:max-w-xl">
                            <p className="text-zinc-400 leading-8">
                                Engineered to simplify backend architecture while
                                maintaining enterprise-grade scalability,
                                reliability, and execution speed.
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default WeBuild