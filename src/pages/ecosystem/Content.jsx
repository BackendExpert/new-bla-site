import React from 'react'
import { useNavigate } from 'react-router-dom'

const Content = () => {

    const navigate = useNavigate()

    return (
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-32">

            <div className="grid lg:grid-cols-2 gap-20 items-start">

                <div>

                    <div className="text-zinc-600 uppercase tracking-[0.4em] text-sm">
                        Philosophy
                    </div>

                    <h2 className="mt-6 text-4xl md:text-6xl font-black leading-[0.95] tracking-[-0.04em] text-white">
                        Developer Experience First
                    </h2>

                    <div className="mt-10 space-y-10 text-zinc-400 text-lg leading-8 max-w-xl">

                        <p>
                            Every system is engineered to reduce mental overhead while giving precise control over execution layers.
                        </p>

                        <p>
                            We eliminate abstraction noise. Only essential primitives remain, enabling faster reasoning and development cycles.
                        </p>

                        <p>
                            Designed for high-frequency environments where latency, throughput, and determinism define system quality.
                        </p>

                        <p>
                            Modular architecture ensures every component can operate independently or as part of a unified ecosystem.
                        </p>

                    </div>


                </div>


                <div className="grid sm:grid-cols-2 gap-6">

                    <div className="border border-white/10 p-8 hover:border-white transition-all duration-300">
                        <div className="text-sm text-zinc-600 uppercase tracking-[0.3em]">01</div>
                        <h3 className="mt-4 text-2xl font-bold text-white">JKCSS</h3>
                        <p className="mt-4 text-zinc-500 text-sm leading-7">
                            Atomic styling engine with deterministic output and zero runtime overhead.
                        </p>
                        <p className="mt-3 text-zinc-600 text-xs">
                            CSS • Runtime-less • Structured
                        </p>
                        <a href="/eco-system/jkcss">
                            <button className="mt-6 text-white text-sm border-b border-white/20 hover:border-white">
                                View More
                            </button>
                        </a>

                    </div>

                    <div className="border border-white/10 p-8 hover:border-white transition-all duration-300">
                        <div className="text-sm text-zinc-600 uppercase tracking-[0.3em]">02</div>
                        <h3 className="mt-4 text-2xl font-bold text-white">CoconutDB</h3>
                        <p className="mt-4 text-zinc-500 text-sm leading-7">
                            Flexible NoSQL database optimized for real-time workloads and distributed systems.
                        </p>
                        <p className="mt-3 text-zinc-600 text-xs">
                            NoSQL • Real-time • Scalable
                        </p>
                        <button className="mt-6 text-white text-sm border-b border-white/20 hover:border-white">
                            View More
                        </button>
                    </div>

                    <div className="border border-white/10 p-8 hover:border-white transition-all duration-300">
                        <div className="text-sm text-zinc-600 uppercase tracking-[0.3em]">03</div>
                        <h3 className="mt-4 text-2xl font-bold text-white">CoconutServeJS</h3>
                        <p className="mt-4 text-zinc-500 text-sm leading-7">
                            Backend execution layer for building APIs, services, and event-driven systems.
                        </p>
                        <p className="mt-3 text-zinc-600 text-xs">
                            APIs • Microservices • Edge-ready
                        </p>
                        <button className="mt-6 text-white text-sm border-b border-white/20 hover:border-white">
                            View More
                        </button>
                    </div>

                    <div className="border border-white/10 p-8 hover:border-white transition-all duration-300">
                        <div className="text-sm text-zinc-600 uppercase tracking-[0.3em]">04</div>
                        <h3 className="mt-4 text-2xl font-bold text-white">JKCSS AI Runtime</h3>
                        <p className="mt-4 text-zinc-500 text-sm leading-7">
                            Intelligent styling runtime enabling adaptive UI behavior powered by AI systems.
                        </p>
                        <p className="mt-3 text-zinc-600 text-xs">
                            AI • Runtime • Adaptive UI
                        </p>
                        <button className="mt-6 text-white text-sm border-b border-white/20 hover:border-white">
                            View More
                        </button>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Content