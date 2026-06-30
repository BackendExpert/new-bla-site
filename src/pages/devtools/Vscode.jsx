import React from 'react'

const Vscode = () => {
    return (
        <section id="vscode" className="max-w-7xl mx-auto px-6 py-32">

            <div className="text-center">

                <span className="uppercase tracking-[0.4em] text-zinc-500 text-sm">
                    Visual Studio Code
                </span>

                <h2 className="mt-6 text-5xl font-black text-white">
                    VS Code Extensions
                </h2>

                <p className="mt-6 max-w-3xl mx-auto text-zinc-400 leading-8">
                    We're building a collection of Visual Studio Code extensions
                    focused on developer productivity, intelligent tooling,
                    automation, debugging, and seamless integration with the
                    BlackAlphaLabs ecosystem.
                </p>

            </div>

            <div className="mt-20 rounded-3xl border border-white/10 bg-white/[0.02] p-16 text-center">

                <div className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm font-medium text-yellow-400">
                    In Development
                </div>

                <h3 className="mt-8 text-4xl font-black text-white">
                    Coming Soon
                </h3>

                <p className="mt-6 max-w-2xl mx-auto text-zinc-400 leading-8">
                    Our Visual Studio Code extensions are currently under active
                    development. They will be released publicly after extensive
                    testing to ensure a fast, reliable, and developer-friendly
                    experience.
                </p>

                <div className="mt-14 grid gap-6 md:grid-cols-3">

                    <div className="rounded-2xl border border-white/10 p-8">
                        <div className="text-3xl mb-4">⚡</div>
                        <h4 className="text-white font-bold">
                            Productivity
                        </h4>
                        <p className="mt-3 text-sm text-zinc-500">
                            Faster development workflows with intelligent tools.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 p-8">
                        <div className="text-3xl mb-4">🧠</div>
                        <h4 className="text-white font-bold">
                            Smart Assistance
                        </h4>
                        <p className="mt-3 text-sm text-zinc-500">
                            Developer-first features powered by modern tooling.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 p-8">
                        <div className="text-3xl mb-4">🚀</div>
                        <h4 className="text-white font-bold">
                            Ecosystem Integration
                        </h4>
                        <p className="mt-3 text-sm text-zinc-500">
                            Built to work seamlessly with future BlackAlphaLabs projects.
                        </p>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Vscode