import React from 'react'

const Versions = () => {

    const cdbReleases = [
        {
            version: "v1.0.0",
            date: "28 November 2024",
            status: "In Development",
            features: "Initial public release, core CRUD operations, lightweight engine"
        },
        {
            version: "v2.0.0",
            date: "19 December 2024",
            status: "In Development",
            features: "Extended querying capabilities, internal performance improvements"
        },
        {
            version: "v3.0.0-beta",
            date: "03 June 2025",
            status: "Beta",
            features: "Third major release, simplified integration, refactored core"
        }
    ]

    const timeline = [
        {
            phase: "Initial Development (v1.0.0)",
            duration: "Sep – Nov 2024",
            notes: "Core structure, initial testing, first NPM release"
        },
        {
            phase: "Feature Expansion (v2.0.0)",
            duration: "Nov – Dec 2024",
            notes: "Advanced features and internal improvements"
        },
        {
            phase: "CoconutDB Web Alpha Testing",
            duration: "Jan – Feb 2025",
            notes: "Temporary browser-based interface, later discontinued"
        },
        {
            phase: "Planning & Proposal Drafting",
            duration: "Mar 2025",
            notes: "Research objectives and scope finalized"
        },
        {
            phase: "Third Major Release (v3.0.0-beta)",
            duration: "June 2025",
            notes: "Simplified integration and performance revamp"
        }
    ]

    return (
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-32 text-white">

            <div className="max-w-4xl">
                <div className="text-zinc-600 uppercase tracking-[0.4em] text-sm">
                    System Evolution
                </div>

                <h1 className="mt-6 text-5xl md:text-7xl font-black">
                    Versions & Timeline
                </h1>

                <p className="mt-8 text-zinc-400 text-lg leading-9">
                    CoconutDB evolves through structured releases and experimental phases,
                    balancing research-driven development with practical system design.
                </p>
            </div>


            <div className="mt-24 border-t border-white/10 pt-20">

                <h2 className="text-4xl font-black mb-12">
                    CoconutDB Releases
                </h2>

                <div className="border border-white/10">

                    <div className="grid grid-cols-4 border-b border-white/10 text-zinc-500 text-sm uppercase tracking-[0.2em]">
                        <div className="p-4">Version</div>
                        <div className="p-4">Release Date</div>
                        <div className="p-4">Status</div>
                        <div className="p-4">Key Features</div>
                    </div>

                    {cdbReleases.map((item, index) => (
                        <div key={index} className="grid grid-cols-4 border-b border-white/10">

                            <div className="p-4 font-bold">
                                {item.version}
                            </div>

                            <div className="p-4 text-zinc-400">
                                {item.date}
                            </div>

                            <div className="p-4 text-zinc-400">
                                {item.status}
                            </div>

                            <div className="p-4 text-zinc-400">
                                {item.features}
                            </div>

                        </div>
                    ))}

                </div>

                <p className="mt-10 text-zinc-500 leading-7 max-w-4xl">
                    A CoconutDB Web Alpha version was briefly available to early adopters,
                    providing a browser-based interface for real-time interaction. Although discontinued,
                    it directly influenced architectural decisions in v3.0.0-beta.
                </p>

            </div>


            <div className="mt-32 border-t border-white/10 pt-20">

                <h2 className="text-4xl font-black mb-12">
                    Development Timeline
                </h2>

                <div className="space-y-16">

                    {timeline.map((item, index) => (
                        <div key={index} className="grid md:grid-cols-4 gap-10 border-t border-white/10 pt-10">

                            <div>
                                <div className="text-zinc-600 text-xs uppercase tracking-[0.3em]">
                                    Phase
                                </div>

                                <div className="text-xl font-bold mt-2">
                                    {item.phase}
                                </div>

                                <p className="text-zinc-500 mt-2 text-sm">
                                    {item.duration}
                                </p>
                            </div>

                            <div className="md:col-span-3">
                                <p className="text-zinc-400 leading-7">
                                    {item.notes}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>

            </div>


            <div className="mt-32 border-t border-white/10 pt-20 max-w-4xl">

                <div className="text-zinc-600 uppercase tracking-[0.4em] text-sm">
                    Insight
                </div>

                <h2 className="mt-6 text-4xl md:text-6xl font-black leading-[0.95]">
                    Continuous Evolution
                </h2>

                <p className="mt-8 text-zinc-400 text-lg leading-9">
                    These development stages reinforce CoconutDB as a continuously evolving,
                    regionally driven NoSQL system. Each phase aligns closer to real-world deployment
                    requirements, improving performance, usability, and integration capabilities.
                </p>

            </div>

        </section>
    )
}

export default Versions