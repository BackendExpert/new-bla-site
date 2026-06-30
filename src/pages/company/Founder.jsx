import React from "react";
import CEO from "../../assets/OKCEO.png";

const Founder = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-32">

            <div className="grid lg:grid-cols-2 gap-20 items-center">

                <div className="relative">

                    <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full"></div>

                    <img
                        src={CEO}
                        alt="Jehan Weerasuriya"
                        className="relative w-full max-w-lg mx-auto rounded-3xl border border-white/10"
                    />

                </div>

                <div>

                    <div className="uppercase tracking-[0.4em] text-zinc-500 text-sm">
                        Founder & CEO
                    </div>

                    <h1 className="mt-6 text-5xl md:text-7xl font-black leading-none text-white">
                        Jehan
                        <br />
                        Weerasuriya
                    </h1>

                    <div className="mt-8 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-cyan-400">
                        Founder • CEO • Systems Architect • Independent Researcher
                    </div>

                    <p className="mt-10 text-lg text-zinc-400 leading-9">
                        Jehan Weerasuriya is the Founder and Chief Executive
                        Officer of BlackAlphaLabs. His work focuses on
                        software architecture, secure backend engineering,
                        developer platforms, artificial intelligence,
                        database technologies, and research-driven software
                        innovation. He founded BlackAlphaLabs with a vision
                        of building an independent ecosystem of technologies
                        rather than operating as a traditional software
                        services company. 
                    </p>

                    <p className="mt-8 text-zinc-500 leading-8">
                        His research explores secure government digital
                        infrastructure, developer tooling, backend security,
                        AI-assisted software engineering, software education,
                        and modern programming ecosystems. Alongside product
                        development, he actively publishes technical reports
                        and research papers covering software engineering,
                        digital governance, and applied computing. 
                    </p>

                    <div className="mt-14 grid grid-cols-2 gap-6">

                        <div className="rounded-2xl border border-white/10 p-6">
                            <div className="text-4xl font-black text-white">
                                40+
                            </div>
                            <div className="mt-2 text-zinc-500">
                                Research Publications
                            </div>
                        </div>

                        <div className="rounded-2xl border border-white/10 p-6">
                            <div className="text-4xl font-black text-white">
                                10+
                            </div>
                            <div className="mt-2 text-zinc-500">
                                Developer Products
                            </div>
                        </div>

                        <div className="rounded-2xl border border-white/10 p-6">
                            <div className="text-4xl font-black text-white">
                                AI
                            </div>
                            <div className="mt-2 text-zinc-500">
                                Research & Innovation
                            </div>
                        </div>

                        <div className="rounded-2xl border border-white/10 p-6">
                            <div className="text-4xl font-black text-white">
                                OSS
                            </div>
                            <div className="mt-2 text-zinc-500">
                                Open Source Projects
                            </div>
                        </div>

                    </div>

                    <div className="mt-16 flex flex-wrap gap-4">

                        <a
                            href="https://www.researchgate.net/profile/Jehan-Weerasuriya-2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-7 py-4 rounded-full border border-white text-white hover:bg-white hover:text-black transition"
                        >
                            ResearchGate
                        </a>

                        <a
                            href="https://scholar.google.com/citations?hl=en&user=t4_aNDoAAAAJ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-7 py-4 rounded-full border border-white/10 text-zinc-400 hover:text-white hover:border-white transition"
                        >
                            Google Scholar
                        </a>

                        <a
                            href="https://www.linkedin.com/in/jehanweerasuriya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-7 py-4 rounded-full border border-white/10 text-zinc-400 hover:text-white hover:border-white transition"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="https://github.com/BackendExpert"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-7 py-4 rounded-full border border-white/10 text-zinc-400 hover:text-white hover:border-white transition"
                        >
                            GitHub
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Founder;