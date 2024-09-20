import { Content } from '@/components/Content'
import { Header } from '@/components/Header'
import { LeftMenu } from '@/components/LeftMenu'
import { RightMenu } from '@/components/RightMenu'

export default function Page() {
    return (
        <div className="flex flex-col w-full">
            {/* Header */}
            <Header />

            <div className="relative flex justify-center flex-auto w-full mx-auto max-w-8xl sm:px-2 lg:px-8 xl:px-12">
                {/* Left Menu */}
                <LeftMenu />

                {/* Content */}
                <Content>Docs Installation WIP.</Content>

                {/* Right Menu */}
                <RightMenu items={[]} />
            </div>
        </div>
    )
}
