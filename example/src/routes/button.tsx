import Prism from 'prismjs'
import { useEffect } from 'react'

import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@kotsutsumi/viz-ui'

export const Route = createFileRoute('/button')({
    component: PageComponent
})

function PageComponent() {
    useEffect(() => {
        Prism.highlightAll()
    }, [])

    return (
        <div className="prose prose-xl">
            <h1>Button</h1>
            <div>
                <pre className="language-javascript">
                    <code>{`import {Button} from '@kotsutsumi/viz-ui'`}</code>
                </pre>
            </div>
            <Button />
        </div>
    )
}
