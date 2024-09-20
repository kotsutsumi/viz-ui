'use client'

const Header = function () {
    return (
        <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between flex-none px-4 py-5 bg-white shadow-md shadow-slate-900/5 transition duration-500 sm:px-6 lg:px-8 dark:shadow-none dark:bg-transparent">
            <div className="flex mr-6 lg:hidden">
                <button type="button" className="relative" aria-label="Open navigation">
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="w-6 h-6 stroke-slate-500"
                    >
                        <path d="M4 7h16M4 12h16M4 17h16"></path>
                    </svg>
                </button>
            </div>
            <div className="relative flex items-center flex-grow basis-0">
                <a aria-label="Home page" href="/">
                    VizUI
                </a>
            </div>
        </header>
    )
}

export { Header }
