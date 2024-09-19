'use client'

const RightMenu = function ({
    items
}: {
    items: { title: string; link: string; items?: { title: string; link: string }[] }[]
}) {
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
                    {items.map((item, index) => {
                        return (
                            <li key={`right-menu-${index}`}>
                                <h3>
                                    <a className="text-primary" href={item.link}>
                                        {item.title}
                                    </a>
                                </h3>

                                {/* Nested list */}
                                {item.items?.map((nestedItem, nestedIndex) => {
                                    return (
                                        <ol
                                            role="list"
                                            className="mt-2 space-y-3 pl-5 text-slate-500 "
                                        >
                                            <li>
                                                <a
                                                    className="hover:text-slate-600 "
                                                    href={nestedItem.link}
                                                >
                                                    {nestedItem.title}
                                                </a>
                                            </li>
                                        </ol>
                                    )
                                })}
                            </li>
                        )
                    })}
                </ol>
            </nav>
        </div>
    )
}

export { RightMenu }
