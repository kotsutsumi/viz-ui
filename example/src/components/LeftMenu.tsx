'use client'

import { title } from 'process'

const items: { title: string; items?: { title: string; link: string }[] }[] = [
    {
        title: 'Introduction',
        items: [
            {
                title: 'Getting started',
                link: '/docs'
            },
            {
                title: 'Installation',
                link: '/docs/installation'
            }
        ]
    },
    {
        title: 'Components',
        items: [
            {
                title: 'Button',
                link: '/components/button'
            },
            {
                title: 'Container',
                link: '/components/container'
            },
            {
                title: 'Panel',
                link: '/components/panel'
            }
        ]
    }
]

const LeftMenu = function () {
    return (
        <div className="hidden lg:relative lg:block lg:flex-none">
            <div className="sticky top-[4.75rem] -ml-0.5 h-[calc(100vh-4.75rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16">
                <nav className="text-base lg:text-sm">
                    <ul role="list" className="space-y-9">
                        {items.map((item, index) => {
                            return (
                                <li key={`left-menu-${index}`}>
                                    <h2 className="font-display font-medium text-slate-900 ">
                                        {item.title}
                                    </h2>

                                    {/* Nested list */}
                                    <ul
                                        role="list"
                                        className="mt-2 space-y-2 border-l-2 border-slate-100 lg:mt-4 lg:space-y-4 lg:border-slate-200 dark:border-slate-800"
                                    >
                                        {item.items?.map((nestedItem, nestedIndex) => {
                                            return (
                                                <li
                                                    className="relative"
                                                    key={`left-menu-sub-${nestedIndex}`}
                                                >
                                                    <a
                                                        className="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                                                        href={nestedItem.link}
                                                    >
                                                        {nestedItem.title}
                                                    </a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export { LeftMenu }
