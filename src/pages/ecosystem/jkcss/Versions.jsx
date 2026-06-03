import React from 'react'

const Versions = () => {

    const releases = [
        {
            version: "6.0.0",
            date: "May 2024",
            tag: "New Era",
            points: [
                "Utility-First CSS Architecture",
                "Next generation framework direction",
                "Focus on speed, clarity, and scalability"
            ]
        },
        {
            version: "NPM Ecosystem",
            date: "May 2024",
            tag: "Distribution",
            points: [
                "Official NPM package expansion",
                "Package: @jehankandy/jkcss",
                "Scalable ecosystem distribution"
            ]
        },

        {
            version: "5.1.0",
            date: "8 March 2024",
            tag: "Latest v5",
            points: [
                "Improve Base Interfaces",
                "Develop site Interface",
                "Updating Button",
                "Adding Button Groups"
            ]
        },
        {
            version: "5.0.0",
            date: "25 February 2024",
            points: [
                "5th Major Release",
                "Vite.js framework integration",
                "Develop site Interface"
            ]
        },
        {
            version: "5.0.0-beta2",
            date: "24 February 2024",
            points: [
                "Improve Base Interfaces",
                "Docs UI improvements"
            ]
        },
        {
            version: "5.0.0-beta1",
            date: "22 February 2024",
            points: [
                "Improve Base Interfaces",
                "Develop site Interface"
            ]
        },

        {
            version: "4.5.0",
            date: "12 February 2024",
            points: [
                "NPM package update (10th)",
                "Image alignment",
                "Spacing system"
            ]
        },
        {
            version: "4.4.0",
            date: "7 January 2024",
            points: [
                "NPM package update (9th)",
                "Image styling"
            ]
        },
        {
            version: "4.3.0",
            date: "30 January 2024",
            points: [
                "Modal fixes",
                "Multiple modals support"
            ]
        },
        {
            version: "4.2.0",
            date: "27 January 2024",
            points: [
                "Adding Alerts",
                "Improved interfaces"
            ]
        },
        {
            version: "4.1.1",
            date: "27 January 2024",
            points: [
                "Bug fixes",
                "Improved modals UX"
            ]
        },
        {
            version: "4.1.0",
            date: "25 January 2024",
            points: [
                "Tables, Forms, Cards added"
            ]
        },
        {
            version: "4.0.0",
            date: "24 January 2024",
            points: [
                "4th Major Release",
                "JavaScript integration",
                "Modals system"
            ]
        },

        {
            version: "3.0.1",
            date: "22 January 2024",
            points: [
                "Responsive layouts improvement"
            ]
        },
        {
            version: "3.0.0",
            date: "16 January 2024",
            points: [
                "3rd Major Release",
                "Layout system (columns)"
            ]
        },

        {
            version: "2.1.0-beta1",
            date: "04 January 2024",
            points: [
                "Typography docs update",
                "Responsive navbar",
                "Structure improvements"
            ]
        },
        {
            version: "2.1.0-alpha1",
            date: "02 January 2024",
            points: [
                "Display styles",
                "Docs updates"
            ]
        },
        {
            version: "2.0.0",
            date: "01 January 2024",
            points: [
                "Typography system introduced"
            ]
        },

        {
            version: "1.2.0",
            date: "26 December 2023",
            points: [
                "Button states",
                "Button sizes"
            ]
        },
        {
            version: "1.1.0",
            date: "24 December 2023",
            points: [
                "Bug fixes",
                "Layouts testing"
            ]
        },
        {
            version: "1.1.0-alpha1",
            date: "12 December 2023",
            points: [
                "Component CSS start",
                "Layouts testing"
            ]
        },
        {
            version: "1.0.1",
            date: "07 December 2023",
            points: [
                "First NPM package",
                "CDN preparation"
            ]
        },
        {
            version: "1.0.1-alpha1",
            date: "31 October 2023",
            points: [
                "Pre-release testing",
                "Component system start"
            ]
        },
        {
            version: "1.0.0",
            date: "21 August 2023",
            points: [
                "Initial stable core",
                "Domain setup"
            ]
        },

        {
            version: "1.0.0-beta2",
            date: "11 August 2023",
            points: [
                "Pre-release improvements"
            ]
        },
        {
            version: "1.0.0-beta1",
            date: "30 June 2023",
            points: [
                "Early beta stage"
            ]
        },

        {
            version: "0.2.0",
            date: "04 June 2023",
            points: [
                "Test release",
                "Base interfaces"
            ]
        },
        {
            version: "0.1.1",
            date: "31 May 2023",
            points: [
                "Pre-release improvements"
            ]
        },
        {
            version: "0.1.0",
            date: "18 May 2023",
            points: [
                "Initial release",
                "Base interfaces"
            ]
        }
    ]

    return (
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-32 text-white">

            <div className="max-w-3xl">
                <div className="text-zinc-600 uppercase tracking-[0.4em] text-sm">
                    Full Timeline
                </div>

                <h1 className="mt-6 text-5xl md:text-7xl font-black">
                    JKCSS Evolution
                </h1>

                <p className="mt-8 text-zinc-400 text-lg leading-9">
                    From early research to a fully developed framework ecosystem, JKCSS has evolved through continuous experimentation and system design.
                </p>
            </div>


            <div className="mt-20 border-t border-white/10 pt-12 grid md:grid-cols-4 gap-10">

                <div>
                    <div className="text-zinc-600 text-xs uppercase tracking-[0.3em]">
                        Phase
                    </div>
                    <div className="text-3xl font-black mt-2">
                        Planning
                    </div>
                    <p className="text-zinc-500 mt-2 text-sm">
                        Dec 2021 → May 2023
                    </p>
                </div>

                <div className="md:col-span-3 space-y-2">
                    <p className="text-zinc-400 leading-7">
                        Initial planning, research, and system design exploration.
                    </p>
                    <p className="text-zinc-400 leading-7">
                        Focused on defining architecture, core principles, and framework direction.
                    </p>
                    <p className="text-zinc-400 leading-7">
                        Foundation phase before the first public release.
                    </p>
                </div>

            </div>


            <div className="mt-24 space-y-16">

                {releases.map((item, index) => (
                    <div key={index} className="grid md:grid-cols-4 gap-10 border-t border-white/10 pt-10">

                        <div>
                            <div className="text-3xl font-black">
                                {item.version}
                            </div>
                            <p className="text-zinc-500 mt-2 text-sm">
                                {item.date}
                            </p>

                            {item.tag && (
                                <span className="inline-block mt-3 text-xs border border-white px-3 py-1">
                                    {item.tag}
                                </span>
                            )}
                        </div>

                        <div className="md:col-span-3 space-y-2">
                            {item.points.map((p, i) => (
                                <p key={i} className="text-zinc-400 leading-7">
                                    {p}
                                </p>
                            ))}
                        </div>

                    </div>
                ))}

            </div>

        </section>
    )
}

export default Versions