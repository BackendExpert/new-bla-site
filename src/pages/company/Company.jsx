import React from "react";
import { motion } from "framer-motion";

const timeline = [
    {
        year: "May 2023",
        title: "JKCSS Launch",
        desc: "The journey began with the first production release of JKCSS, a modern utility-first CSS framework designed to simplify and accelerate front-end development.",
    },
    {
        year: "April 2024",
        title: "NPM Ecosystem Expansion",
        desc: "Released the first collection of NPM packages, helping developers build applications faster with reusable tooling.",
    },
    {
        year: "Nov 2024",
        title: "CoconutDB",
        desc: "Introduced CoconutDB, a lightweight high-performance NoSQL document database built for modern software development.",
    },
    {
        year: "Sept 2025",
        title: "CoconutServeJS",
        desc: "Expanded the ecosystem with CoconutServeJS, a research-focused backend runtime designed for secure and scalable applications.",
    },
    {
        year: "Jan 2026",
        title: "Research-Based Innovation",
        desc: "Began dedicated research into next-generation software engineering, AI-assisted development, and modern infrastructure.",
    },
    {
        year: "March 2026",
        title: "JKCSS AI Runtime",
        desc: "Introduced AI-powered styling that enables developers to create interfaces using natural language and intelligent workflows.",
    },
    {
        year: "Future",
        title: "AI CSS Framework",
        desc: "Developing a fully AI-native CSS framework that reimagines how interfaces are designed, generated, and optimized.",
    },
];

const Company = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-32">

            <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >

                <span className="uppercase tracking-[0.4em] text-zinc-500 text-sm">
                    About BlackAlphaLabs
                </span>

                <h1 className="mt-8 text-5xl md:text-8xl font-black leading-[0.9] tracking-[-0.05em] text-white">
                    Building the <br />
                    <span className="italic text-zinc-300">Future</span> of <br />
                    Software Innovation
                </h1>

                <p className="mt-12 max-w-4xl mx-auto text-xl text-zinc-400 leading-9">
                    BlackAlphaLabs is a software innovation company focused
                    exclusively on building its own ecosystem of developer-first
                    technologies including South Asia's first utility-first CSS
                    framework, NoSQL database technologies, backend runtimes,
                    APIs, NPM packages, and Visual Studio Code extensions.
                </p>

                <p className="mt-8 max-w-4xl mx-auto text-lg text-zinc-500 leading-8">
                    Every product is independently researched, designed,
                    architected, and maintained with a long-term commitment to
                    performance, scalability, and exceptional developer
                    experience. We do not undertake client projects,
                    outsourcing, or software consultancy.
                </p>

            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-32 rounded-3xl border border-white/10 bg-white/[0.02] p-12"
            >

                <div className="grid md:grid-cols-2 gap-16">

                    <div>

                        <div className="text-zinc-500 uppercase tracking-[0.35em] text-sm">
                            Vision
                        </div>

                        <h2 className="mt-6 text-4xl font-black text-white">
                            Developer-First Innovation
                        </h2>

                        <p className="mt-8 text-zinc-400 leading-8">
                            BlackAlphaLabs exists to create an independent
                            ecosystem of software technologies that empower
                            developers through modern engineering,
                            experimentation, and long-term research.
                        </p>

                    </div>

                    <div>

                        <div className="text-zinc-500 uppercase tracking-[0.35em] text-sm">
                            Philosophy
                        </div>

                        <h2 className="mt-6 text-4xl font-black text-white">
                            Products Before Services
                        </h2>

                        <p className="mt-8 text-zinc-400 leading-8">
                            Every resource is dedicated to creating original
                            software products. Rather than delivering custom
                            client work, we invest in technologies that can
                            benefit developers globally for years to come.
                        </p>

                    </div>

                </div>

            </motion.div>

            <div className="mt-40">

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >

                    <span className="uppercase tracking-[0.4em] text-zinc-500 text-sm">
                        Our History
                    </span>

                    <h2 className="mt-6 text-5xl font-black text-white">
                        The Journey
                    </h2>

                </motion.div>

                <div className="relative">

                    <div className="absolute left-1/2 top-0 h-full w-px bg-white/10 -translate-x-1/2"></div>

                    {timeline.map((item, index) => (

                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                x: index % 2 === 0 ? -120 : 120,
                                scale: 0.95,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                scale: 1,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.3,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className={`relative mb-20 flex items-center ${index % 2 === 0
                                    ? "justify-start"
                                    : "justify-end"
                                }`}
                        >

                            <motion.div
                                whileHover={{
                                    y: -10,
                                    scale: 1.02,
                                    borderColor: "rgba(34,211,238,0.8)",
                                    boxShadow:
                                        "0 25px 60px rgba(34,211,238,0.15)",
                                }}
                                transition={{ duration: 0.3 }}
                                className={`w-full md:w-[45%] rounded-3xl border border-white/10 bg-white/[0.03] p-8 ${index % 2 === 0
                                        ? "md:mr-auto"
                                        : "md:ml-auto"
                                    }`}
                            >

                                <div className="text-cyan-400 font-bold uppercase tracking-widest text-sm">
                                    {item.year}
                                </div>

                                <h3 className="mt-4 text-3xl font-bold text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-6 text-zinc-400 leading-8">
                                    {item.desc}
                                </p>

                            </motion.div>

                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.1 + 0.3,
                                    type: "spring",
                                    stiffness: 250,
                                }}
                                whileHover={{
                                    scale: 1.5,
                                    boxShadow: "0 0 30px rgb(34 211 238)",
                                }}
                                className="absolute left-1/2 h-5 w-5 rounded-full border-4 border-zinc-950 bg-cyan-400 -translate-x-1/2"
                            />

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Company;