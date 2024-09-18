import { Content } from '@/components/Content'
import { Header } from '@/components/Header'
import { LeftMenu } from '@/components/LeftMenu'
import { RightMenu } from '@/components/RightMenu'

export default function Page() {
    return (
        <div className="flex w-full flex-col">
            {/* Header */}
            <Header />

            <div className="relative mx-auto flex w-full max-w-8xl flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
                {/* Left Menu */}
                <LeftMenu />

                {/* Content */}
                <Content>Docs Installation WIP.</Content>

                {/* Right Menu */}
                <RightMenu />
            </div>
        </div>
    )
}
