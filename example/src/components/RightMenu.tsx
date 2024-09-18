'use client'

const RightMenu = function () {
    return (
        <div className="hidden xl:sticky xl:top-[4.75rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.75rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
            <nav aria-labelledby="on-this-page-title" className="w-56">
                <h2
                    id="on-this-page-title"
                    className="font-display text-sm font-medium text-slate-900 "
                >
                    On this page
                </h2>
                <ol role="list" className="mt-4 space-y-3 text-sm">
                    <li>
                        <h3>
                            <a className="text-sky-500" href="#quick-start">
                                Quick start
                            </a>
                        </h3>
                        <ol role="list" className="mt-2 space-y-3 pl-5 text-slate-500 ">
                            <li>
                                <a
                                    className="hover:text-slate-600 "
                                    href="#installing-dependencies"
                                >
                                    Installing dependencies
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:text-slate-600 "
                                    href="#configuring-the-library"
                                >
                                    Configuring the library
                                </a>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h3>
                            <a
                                className="font-normal text-slate-500 hover:text-slate-700 "
                                href="#basic-usage"
                            >
                                Basic usage
                            </a>
                        </h3>
                        <ol role="list" className="mt-2 space-y-3 pl-5 text-slate-500 ">
                            <li>
                                <a className="hover:text-slate-600 " href="#your-first-cache">
                                    Your first cache
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-slate-600 " href="#clearing-the-cache">
                                    Clearing the cache
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-slate-600 " href="#adding-middleware">
                                    Adding middleware
                                </a>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h3>
                            <a
                                className="font-normal text-slate-500 hover:text-slate-700 "
                                href="#getting-help"
                            >
                                Getting help
                            </a>
                        </h3>
                        <ol role="list" className="mt-2 space-y-3 pl-5 text-slate-500 ">
                            <li>
                                <a className="hover:text-slate-600 " href="#submit-an-issue">
                                    Submit an issue
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-slate-600 " href="#join-the-community">
                                    Join the community
                                </a>
                            </li>
                        </ol>
                    </li>
                </ol>
            </nav>
        </div>
    )
}

export { RightMenu }
