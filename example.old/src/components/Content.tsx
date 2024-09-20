'use client'

const Content = function ({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex-auto max-w-2xl min-w-0 px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16 prose prose-xl">
            {children}
        </main>
    )
}

export { Content }
