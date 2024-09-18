'use client'

const Header = function () {
    return (
        <header className="sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 sm:px-6 lg:px-8 dark:shadow-none dark:bg-transparent">
            <div className="mr-6 flex lg:hidden">
                <button type="button" className="relative" aria-label="Open navigation">
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="h-6 w-6 stroke-slate-500"
                    >
                        <path d="M4 7h16M4 12h16M4 17h16"></path>
                    </svg>
                </button>
            </div>
            <div className="relative flex flex-grow basis-0 items-center">
                <a aria-label="Home page" href="/">
                    VizUI
                </a>
            </div>
        </header>
    )
}

export { Header }
