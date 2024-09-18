import * as React from 'react'

import { Outlet, createRootRoute } from '@tanstack/react-router'

import Header from '../components/Header'

export const Route = createRootRoute({
    component: () => (
        <React.Fragment>
            <div className="flex w-full flex-col">
                {/* Header */}
                <Header />

                <div className="relative mx-auto flex w-full max-w-8xl flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
                    {/* Left Menu */}
                    <div className="hidden lg:relative lg:block lg:flex-none">
                        <div className="sticky top-[4.75rem] -ml-0.5 h-[calc(100vh-4.75rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16">
                            <nav className="text-base lg:text-sm">
                                <ul role="list" className="space-y-9">
                                    <li>
                                        <h2 className="font-display font-medium text-slate-900 dark:text-white">Introduction</h2>
                                        <ul
                                            role="list"
                                            className="mt-2 space-y-2 border-l-2 border-slate-100 lg:mt-4 lg:space-y-4 lg:border-slate-200 dark:border-slate-800"
                                        >
                                            <li className="relative">
                                                <a
                                                    className="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                                                    href="/"
                                                >
                                                    Getting started
                                                </a>
                                            </li>
                                            <li className="relative">
                                                <a
                                                    className="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                                                    href="/docs/installation"
                                                >
                                                    Installation
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
                        <Outlet />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
})
