'use client'

import { Highlight, themes } from 'prism-react-renderer'
import React from 'react'
import ReactDOM from 'react-dom/client'
import styles from 'styles.module.css'

import { Tabs } from '@ark-ui/react'

const CodePreview = function ({
    children,
    codeBlock
}: {
    children: React.ReactNode
    codeBlock: string
}) {
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
                    <Highlight theme={themes.jettwaveDark} code={codeBlock} language="tsx">
                        {({ className, style, tokens, getLineProps, getTokenProps }) => (
                            <pre style={style}>
                                {tokens.map((line, i) => (
                                    <div key={i} {...getLineProps({ line })}>
                                        {/* <span>{i + 1}</span> */}
                                        {line.map((token, key) => (
                                            <span key={key} {...getTokenProps({ token })} />
                                        ))}
                                    </div>
                                ))}
                            </pre>
                        )}
                    </Highlight>
                    {/* <pre className="language-javascript">
                        <code>{code}</code>
                    </pre> */}
                </Tabs.Content>
            </Tabs.Root>
        </div>
    )
}

export { CodePreview }
