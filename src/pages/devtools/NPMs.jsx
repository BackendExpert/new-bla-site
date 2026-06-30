import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const NPMs = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);

            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }, 100);
            }
        }
    }, [location]);

    const npms = [
        {
            id: 1,
            name: '@jehankandy/jkcss',
            desc: 'The First Sri Lankan Utility-First CSS Framework',
            code: 'npm i @jehankandy/jkcss',
            link: 'https://www.npmjs.com/package/@jehankandy/jkcss',
            version: 'Latest',
            isPublic: true
        },
        {
            id: 2,
            name: 'jkcss-ai-runtime',
            desc: 'Write styles like human language — no classes, no Tailwind, no CSS files.',
            code: 'npm i jkcss-ai-runtime',
            link: 'https://www.npmjs.com/package/jkcss-ai-runtime',
            version: '6.0.0',
            isPublic: false
        },
        {
            id: 3,
            name: 'coconutdb',
            desc: 'South Asian and Sri Lankan first NoSQL document database.',
            code: 'npm i coconutdb',
            link: 'https://www.npmjs.com/package/coconutdb',
            version: '3.0.0-beta',
            isPublic: true
        },
        {
            id: 4,
            name: 'coconutdb-v3.0.0',
            desc: 'Lightweight local database for desktop applications and standalone software.',
            code: 'npm i coconutdb-v3.0.0',
            link: 'https://www.npmjs.com/package/coconutdb-v3.0.0',
            version: '3.0.0',
            isPublic: true
        },
        {
            id: 5,
            name: '@jehankandy/react-jkcss',
            desc: 'React integration for JKCSS utility framework.',
            code: 'npm i @jehankandy/react-jkcss',
            link: 'https://www.npmjs.com/package/@jehankandy/react-jkcss',
            version: '1.2.0',
            isPublic: true
        },
        {
            id: 6,
            name: '@jehankandy/jkreact-icons',
            desc: 'Modern React Icons library developed in Sri Lanka.',
            code: 'npm i @jehankandy/jkreact-icons',
            link: 'https://www.npmjs.com/package/@jehankandy/jkreact-icons',
            version: '1.2.0',
            isPublic: true
        },
        {
            id: 7,
            name: 'jkmysql-easy',
            desc: 'Simplified MySQL package for Node.js without writing SQL queries.',
            code: 'npm i jkmysql-easy',
            link: 'https://www.npmjs.com/package/jkmysql-easy',
            version: '1.4.0',
            isPublic: true
        },
        {
            id: 8,
            name: 'login-signup-react',
            desc: 'Ready-to-use authentication UI components for React.',
            code: 'npm i login-signup-react',
            link: 'https://www.npmjs.com/package/login-signup-react',
            version: 'Archived',
            isPublic: true
        },
        {
            id: 9,
            name: 'js-wysiwyg-editor',
            desc: 'A lightweight React WYSIWYG editor.',
            code: 'npm i js-wysiwyg-editor',
            link: 'https://www.npmjs.com/package/js-wysiwyg-editor',
            version: '1.0.1-alpha',
            isPublic: false
        }
    ]

    return (
        <section className="max-w-7xl mx-auto px-6 py-32">

            <div className="text-center mb-20">
                <span className="uppercase tracking-[0.4em] text-zinc-500 text-sm">
                    NPM Packages
                </span>

                <h2 className="mt-6 text-5xl font-black text-white">
                    Open Source Developer Packages
                </h2>

                <p className="mt-6 text-zinc-400 max-w-3xl mx-auto leading-8">
                    A collection of production-ready packages for frontend,
                    backend, databases, React development, CSS frameworks,
                    icons, and developer productivity.
                </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                {npms.map((pkg) => (

                    <div
                        key={pkg.id}
                        className="border border-white/10 rounded-3xl p-8 bg-white/[0.02] hover:border-white/30 transition-all duration-300 hover:-translate-y-2"
                    >

                        <div className="flex justify-between items-start">

                            <h3 className="text-2xl font-bold text-white break-all">
                                {pkg.name}
                            </h3>

                            <span
                                className={`px-3 py-1 rounded-full text-xs ${pkg.isPublic
                                    ? 'bg-green-500/20 text-green-400'
                                    : 'bg-yellow-500/20 text-yellow-400'
                                    }`}
                            >
                                {pkg.isPublic ? 'Public' : 'Private'}
                            </span>

                        </div>

                        <p className="mt-6 text-zinc-400 leading-7">
                            {pkg.desc}
                        </p>

                        <div className="mt-8">

                            <div className="text-xs uppercase tracking-widest text-zinc-500 mb-2">
                                Install
                            </div>

                            <div className="bg-black border border-white/10 rounded-xl p-4 font-mono text-sm text-green-400 overflow-x-auto">
                                {pkg.code}
                            </div>

                        </div>

                        <div className="mt-8 flex justify-between items-center">

                            <div>
                                <div className="text-xs uppercase text-zinc-500">
                                    Version
                                </div>

                                <div className="text-white font-semibold">
                                    {pkg.version}
                                </div>
                            </div>

                            {pkg.isPublic ? (
                                <a
                                    href={pkg.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-5 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition-all"
                                >
                                    View Package →
                                </a>
                            ) : (
                                <button
                                    disabled
                                    className="px-5 py-3 border border-white/10 rounded-full text-zinc-600 cursor-not-allowed"
                                >
                                    Coming Soon
                                </button>
                            )}

                        </div>

                    </div>

                ))}

            </div>

        </section>
    )
}

export default NPMs