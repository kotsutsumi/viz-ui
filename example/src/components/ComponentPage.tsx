import { Content } from './Content'
import { Header } from './Header'
import { LeftMenu } from './LeftMenu'
import { RightMenu } from './RightMenu'

const ComponentPage = function ({
    children,
    rightMenuItems
}: {
    children: React.ReactNode
    rightMenuItems: { title: string; link: string; items?: { title: string; link: string }[] }[]
}) {
    return (
        <div className="flex w-full flex-col">
            {/* Header */}
            <Header />

            <div className="relative mx-auto flex w-full max-w-8xl flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
                {/* Left Menu */}
                <LeftMenu />

                {/* Content */}
                <Content>{children}</Content>

                {/* Right Menu */}
                <RightMenu items={rightMenuItems} />
            </div>
        </div>
    )
}

export { ComponentPage }
