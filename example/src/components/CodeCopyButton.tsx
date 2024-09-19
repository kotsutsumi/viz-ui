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
            className="absolute top-6 right-6 cursor-pointer flex flex-col justify-center items-center text-slate-200/50 hover:text-slate-300"
            onClick={handleClick}
        >
            {copyOk && <ClipboardCheck />}
            {!copyOk && <ClipboardCopy />}
            <div className="text-xs mt-1">COPY</div>
        </div>
    )
}

export { CodeCopyButton }
