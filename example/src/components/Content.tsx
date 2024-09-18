'use client'

const Content = function ({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16 prose prose-xl">
            {children}
        </main>
    )
}

export { Content }
