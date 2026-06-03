import React from "react";

const stats = [
    { id: 1, value: "2022", label: "Founded" },
    { id: 2, value: "7+", label: "Framework Versions" },
    { id: 3, value: "20+", label: "Repositories" },
    { id: 4, value: "100%", label: "Open Source" }
];

const features = [
    {
        title: "CSS Framework",
        description:
            "Utility-first and component-driven architecture for fast, structured UI development."
    },
    {
        title: "Developer Ecosystem",
        description:
            "Integrated tooling, packages, and extensions built to enhance productivity."
    },
    {
        title: "Open Source",
        description:
            "Transparent, community-driven development with public repositories."
    },
    {
        title: "South Asian Innovation",
        description:
            "Engineered in Sri Lanka to contribute to the regional tech ecosystem."
    }
];

const ContentJKCSS = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-32 text-white">

            <div className="grid lg:grid-cols-2 gap-20 items-start">

                <div>

                    <div className="text-zinc-600 uppercase tracking-[0.4em] text-sm">
                        Framework Overview
                    </div>

                    <h1 className="mt-6 text-5xl md:text-7xl font-black leading-[0.95] tracking-[-0.04em]">
                        JKCSS Ecosystem
                    </h1>

                    <p className="mt-8 text-zinc-400 text-lg leading-9 max-w-xl">
                        An open-source CSS framework ecosystem focused on
                        modern frontend architecture, reusable systems, and
                        scalable UI development workflows.
                    </p>

                    <div className="mt-12 grid grid-cols-2 gap-8">

                        {stats.map((item) => (
                            <div key={item.id}>
                                <div className="text-3xl font-black">
                                    {item.value}
                                </div>
                                <p className="text-zinc-500 mt-2 text-sm">
                                    {item.label}
                                </p>
                            </div>
                        ))}

                    </div>

                </div>


                <div className="border border-white/10 p-10">

                    <div className="text-zinc-600 uppercase tracking-[0.3em] text-xs">
                        Definition
                    </div>

                    <h2 className="mt-4 text-3xl font-bold">
                        What is JKCSS?
                    </h2>

                    <p className="mt-6 text-zinc-400 leading-8">
                        JKCSS is a complete frontend system combining a
                        utility-first CSS framework, developer tooling,
                        and ecosystem-level integrations designed to
                        accelerate modern application development.
                    </p>

                    <p className="mt-6 text-zinc-500 text-sm leading-7">
                        Built with a focus on clarity, performance, and
                        long-term maintainability, it provides developers
                        with predictable styling patterns and scalable
                        architecture.
                    </p>

                    <button className="mt-8 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all">
                        Explore System
                    </button>

                </div>

            </div>


            <div className="mt-32 border-t border-white/10 pt-20">

                <div className="flex items-center justify-between flex-wrap gap-6 mb-16">

                    <h2 className="text-4xl font-black">
                        Core Capabilities
                    </h2>

                    <button className="px-6 py-3 border border-white/10 text-zinc-400 hover:text-white hover:border-white transition-all">
                        View All Modules
                    </button>

                </div>

                <div className="grid md:grid-cols-2 gap-10">

                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="border border-white/10 p-10 hover:border-white transition-all duration-300"
                        >
                            <div className="text-zinc-600 text-xs uppercase tracking-[0.3em]">
                                0{index + 1}
                            </div>

                            <h3 className="mt-4 text-2xl font-bold">
                                {feature.title}
                            </h3>

                            <p className="mt-6 text-zinc-400 leading-8">
                                {feature.description}
                            </p>
                        </div>
                    ))}

                </div>

            </div>


            <div className="mt-32 border-t border-white/10 pt-20">

                <div className="max-w-4xl">

                    <div className="text-zinc-600 uppercase tracking-[0.4em] text-sm">
                        Vision
                    </div>

                    <h2 className="mt-6 text-4xl md:text-6xl font-black leading-[0.95] tracking-[-0.04em]">
                        Building the Future of Frontend Systems
                    </h2>

                    <p className="mt-8 text-zinc-400 text-lg leading-9">
                        JKCSS continues to evolve as a system-level platform,
                        focusing on performance, developer experience, and
                        scalable architecture. It is not just a framework,
                        but a foundation for building modern software systems.
                    </p>

                </div>

            </div>

        </section>
    );
};

export default ContentJKCSS;