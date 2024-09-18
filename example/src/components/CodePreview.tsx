'use client'

import Prism from 'prismjs'
import { useEffect } from 'react'

import { Tabs } from '@ark-ui/react'

const CodePreview = function ({ children, code }: { children: React.ReactNode; code: string }) {
    useEffect(() => {
        Prism.highlightAll()
    }, [])

    return (
        <div className="code-container">
            <Tabs.Root defaultValue="preview">
                <Tabs.List className="">
                    <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
                    <Tabs.Trigger value="code">Code</Tabs.Trigger>
                    <Tabs.Indicator />
                </Tabs.List>
                <Tabs.Content value="preview">{children}</Tabs.Content>
                <Tabs.Content value="code">
                    <pre className="language-javascript">
                        <code>{code}</code>
                    </pre>
                </Tabs.Content>
            </Tabs.Root>
        </div>
    )
}

export { CodePreview }
