'use client'

import Prism from 'prismjs'
import { useEffect } from 'react'

import { ComponentPage } from '@/components/ComponentPage'
import { CodePreview } from '@/components/CodePreview'

import { Button, Panel } from '../../../../../src'
import code_basic from './code/basic.txt'

const rightMenuItems = [
    {
        title: 'Description',
        link: '#description'
    }
]

export default function Page() {
    return (
        <ComponentPage rightMenuItems={rightMenuItems}>
            {/* Description */}
            <div id="description">
                <h1>Panel</h1>
                <p>Provides panel functionality that encompasses components.</p>
                <p>
                    The panel has a layout specification, the default value is{' '}
                    <code>container</code>. and in the case of a container layout, the panel
                    component can specify all the attributes of the container component.
                </p>
            </div>

            {/* Basic */}
            <div id="basic">
                <h2>Basic</h2>
                <CodePreview codeBlock={code_basic}>
                    <Panel title="Basic Panel">
                        <Button>Button A</Button>
                        <Button>Button B</Button>
                        <Button>Button C</Button>
                    </Panel>
                </CodePreview>
            </div>

            {/* Closable */}
            <div id="closable">
                <h2>Closable</h2>
                <CodePreview codeBlock={code_basic}>
                    <Panel
                        title="Basic Panel"
                        closeable
                        closeFn={() => {
                            alert('Close button clicked')
                        }}
                    >
                        <Button>Button A</Button>
                        <Button>Button B</Button>
                        <Button>Button C</Button>
                    </Panel>
                </CodePreview>
            </div>
        </ComponentPage>
    )
}
