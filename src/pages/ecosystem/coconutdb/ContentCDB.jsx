import React from 'react'

const ContentCDB = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-32 text-white">

            <div className="max-w-4xl">
                <div className="text-zinc-600 uppercase tracking-[0.4em] text-sm">
                    CoconutDB v3.0.0
                </div>

                <h1 className="mt-6 text-5xl md:text-7xl font-black">
                    Centralized Local Database Architecture
                </h1>

                <p className="mt-8 text-zinc-400 text-lg leading-9">
                    CoconutDB is a lightweight local database management solution designed for desktop applications,
                    development tools, and standalone software projects. Version 3.0.0 introduces a major architectural redesign,
                    replacing project-level JSON storage with a centralized database workspace.
                </p>
            </div>


            <div className="mt-24 border-t border-white/10 pt-16 grid md:grid-cols-2 gap-10">

                <div>
                    <h2 className="text-3xl font-bold">Key Features</h2>
                    <div className="mt-8 space-y-3 text-zinc-400">
                        <p>Centralized local database management</p>
                        <p>Zero server dependency</p>
                        <p>Desktop-based database administration</p>
                        <p>Real-time file synchronization</p>
                        <p>Lightweight JSON storage engine</p>
                        <p>Cross-project data accessibility</p>
                        <p>Simple integration API</p>
                        <p>Automatic data persistence</p>
                        <p>Developer-friendly architecture</p>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold">How It Works</h2>
                    <div className="mt-8 space-y-3 text-zinc-400">
                        <p>Applications connect to CoconutDB</p>
                        <p>Operations executed via database engine</p>
                        <p>Data stored in centralized workspace</p>
                        <p>Desktop reflects changes in real-time</p>
                        <p>Bidirectional sync between apps and desktop</p>
                    </div>
                </div>

            </div>


            <div className="mt-32 border-t border-white/10 pt-20 grid md:grid-cols-2 gap-10">

                <div>
                    <h2 className="text-3xl font-bold">Previous Architecture</h2>

                    <pre className="mt-6 text-sm text-zinc-400 bg-black border border-white/10 p-6 overflow-x-auto">
                        {`MyProject/
├── data.json
├── src/
└── package.json`}
                    </pre>

                    <div className="mt-6 text-zinc-500 text-sm space-y-2">
                        <p>Database inside project</p>
                        <p>One database per project</p>
                        <p>Manual file management</p>
                        <p>Limited scalability</p>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold">New Architecture (v3.0.0)</h2>

                    <pre className="mt-6 text-sm text-zinc-400 bg-black border border-white/10 p-6 overflow-x-auto">
                        {`C:\\Users\\<username>\\CoconutDB
├── ProjectA
├── ProjectB
└── ProjectC`}
                    </pre>

                    <div className="mt-6 text-zinc-500 text-sm space-y-2">
                        <p>Centralized storage</p>
                        <p>Independent from project structure</p>
                        <p>Managed via desktop app</p>
                        <p>Consistent access layer</p>
                    </div>
                </div>

            </div>


            <div className="mt-32 border-t border-white/10 pt-20">

                <h2 className="text-3xl font-bold">Storage Location</h2>
                <p className="mt-6 text-zinc-400">C:\\Users\\&lt;username&gt;\\CoconutDB</p>

                <p className="mt-4 text-zinc-500 text-sm">
                    All databases, collections, metadata, and configuration files are stored here.
                </p>

            </div>


            <div className="mt-32 border-t border-white/10 pt-20 grid md:grid-cols-2 gap-10">

                <div>
                    <h2 className="text-3xl font-bold">Benefits</h2>
                    <div className="mt-6 space-y-3 text-zinc-400">
                        <p>Centralized database access</p>
                        <p>Improved maintainability</p>
                        <p>Better scalability</p>
                        <p>Desktop integration</p>
                        <p>Async operations</p>
                        <p>Lightweight local storage</p>
                        <p>No server configuration</p>
                        <p>Rapid development</p>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold">Use Cases</h2>
                    <div className="mt-6 space-y-3 text-zinc-400">
                        <p>Desktop applications</p>
                        <p>Local development tools</p>
                        <p>Offline-first systems</p>
                        <p>Educational projects</p>
                        <p>Small business apps</p>
                        <p>Internal enterprise tools</p>
                        <p>Rapid prototyping</p>
                    </div>
                </div>

            </div>


            <div className="mt-32 border-t border-white/10 pt-20">

                <h2 className="text-3xl font-bold">NestJS Integration</h2>

                <pre className="mt-8 text-sm text-zinc-400 bg-black border border-white/10 p-6 overflow-x-auto">
                    {`@Global()
@Module({
  providers: [DatabaseService],
  exports: [DatabaseService]
})
export class DatabaseModule {}`}
                </pre>

                <pre className="mt-6 text-sm text-zinc-400 bg-black border border-white/10 p-6 overflow-x-auto">
                    {`@Injectable()
export class DatabaseService {
  private db = new Database("nestjs-testing");

  public users = this.db.collection("users");
  public posts = this.db.collection("posts");
}`}
                </pre>

                <pre className="mt-6 text-sm text-zinc-400 bg-black border border-white/10 p-6 overflow-x-auto">
                    {`@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createUser(name: string, age: number) {
    return await this.databaseService.users.create({ name, age });
  }
}`}
                </pre>

                <pre className="mt-6 text-sm text-zinc-400 bg-black border border-white/10 p-6 overflow-x-auto">
                    {`@Post('/create-user')
createUser(@Body() body) {
  return this.userService.createUser(body.name, body.age);
}`}
                </pre>

            </div>


            <div className="mt-32 border-t border-white/10 pt-20">

                <h2 className="text-3xl font-bold">Future Roadmap</h2>

                <div className="mt-8 grid md:grid-cols-2 gap-6 text-zinc-400">
                    <p>Remote Database Server</p>
                    <p>Multi-User Support</p>
                    <p>Authentication & Authorization</p>
                    <p>Database Backup Management</p>
                    <p>Query Optimization Engine</p>
                    <p>Migration Tools</p>
                    <p>Plugin Ecosystem</p>
                    <p>REST API Gateway</p>
                    <p>Cloud Synchronization</p>
                    <p>Distributed Storage</p>
                </div>

            </div>


            <div className="mt-32 border-t border-white/10 pt-20">

                <h2 className="text-3xl font-bold">Version Info</h2>

                <div className="mt-6 text-zinc-400 space-y-2">
                    <p>Current Release: v3.0.0</p>
                    <p>Architecture: Centralized Workspace Model</p>
                    <p>License: MIT</p>
                </div>

            </div>

        </section>
    )
}

export default ContentCDB