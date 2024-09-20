import { ClipboardCopy } from 'lucide-react'
import { ClipboardCheck } from 'lucide-react'
import { useState } from 'react'

const CodeCopyButton = function ({ codeBlock }: { codeBlock: string }) {
    const [copyOk, setCopyOk] = useState(false)

    const handleClick = () => {
        navigator.clipboard.writeText(codeBlock)

        setCopyOk(true)
        setTimeout(() => {
            setCopyOk(false)
        }, 500)
    }

    return (
        <div
            className="absolute flex flex-col items-center justify-center cursor-pointer top-6 right-6 text-slate-200/50 hover:text-slate-300"
            onClick={handleClick}
        >
            {copyOk && <ClipboardCheck />}
            {!copyOk && <ClipboardCopy />}
            <div className="mt-1 text-xs">COPY</div>
        </div>
    )
}

export { CodeCopyButton }
