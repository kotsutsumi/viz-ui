import Prism from 'prismjs'
import { useEffect } from 'react'

import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@kotsutsumi/viz-ui'
import { Tabs } from '@ark-ui/react'

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
            <p>Displays a button or a component that looks like a button.</p>
            <h2>Basic</h2>
            <div className="code-container">
                <Tabs.Root defaultValue="preview">
                    <Tabs.List className="">
                        <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
                        <Tabs.Trigger value="code">Code</Tabs.Trigger>
                        <Tabs.Indicator />
                    </Tabs.List>
                    <Tabs.Content value="preview">
                        <Button>Button</Button>
                    </Tabs.Content>
                    <Tabs.Content value="code">
                        <pre className="language-javascript">
                            <code>{`import { Button } from '@kotsutsumi/viz-ui'

export function ButtonDemo() {
  return <Button>Button</Button>
}`}</code>
                        </pre>
                    </Tabs.Content>
                </Tabs.Root>
            </div>
        </div>
    )
}
