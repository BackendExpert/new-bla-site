import React from 'react'

const Principles = () => {
    return (
        <section className="max-w-5xl mx-auto px-6 md:px-10 py-32">

            <div className="text-zinc-600 uppercase tracking-[0.4em] text-sm">
                Core Principles
            </div>

            <h1 className="mt-6 text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-[-0.04em]">
                System Design Philosophy
            </h1>

            <div className="mt-16 space-y-16">

                <div>
                    <h2 className="text-2xl font-bold text-white">
                        Developer Experience First
                    </h2>
                    <p className="mt-4 text-zinc-400 leading-8">
                        Systems must feel natural to use. Every API, interface, and abstraction is designed to reduce thinking overhead while maintaining full control over behavior and output.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-white">
                        Minimal by Design
                    </h2>
                    <p className="mt-4 text-zinc-400 leading-8">
                        No unnecessary layers, no hidden magic. Only essential primitives are provided, allowing developers to build exactly what they need without constraints.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-white">
                        Performance Over Complexity
                    </h2>
                    <p className="mt-4 text-zinc-400 leading-8">
                        Every system is optimized for speed, efficiency, and predictability. Designed for edge environments, real-time systems, and high-load execution scenarios.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-white">
                        Modular Architecture
                    </h2>
                    <p className="mt-4 text-zinc-400 leading-8">
                        Each component operates independently while remaining fully compatible within the ecosystem. Build small or scale infinitely without redesigning.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-white">
                        System-Level Thinking
                    </h2>
                    <p className="mt-4 text-zinc-400 leading-8">
                        We don’t build features—we build systems. Every tool is part of a larger architecture designed to evolve and interconnect.
                    </p>
                </div>

            </div>

        </section>
    )
}

export default Principles