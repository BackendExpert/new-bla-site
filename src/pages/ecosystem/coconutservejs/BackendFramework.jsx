import React from 'react'

const BackendFramework = () => {
    return (
        <section className="min-h-screen flex items-center justify-center text-white px-6">

            <div className="text-center max-w-2xl">

                <div className="text-zinc-600 uppercase tracking-[0.4em] text-sm">
                    Backend Runtime
                </div>

                <h1 className="mt-6 text-4xl md:text-6xl font-black">
                    CoconutServeJS
                </h1>

                <p className="mt-6 text-zinc-400 text-lg leading-9">
                    A research-level backend runtime focused on secure execution,
                    structured request handling, and predictable system behavior.
                </p>

                <p className="mt-4 text-zinc-500 text-sm">
                    Designed for scalable and controlled server-side environments.
                </p>

            </div>

        </section>
    )
}

export default BackendFramework