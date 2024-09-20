'use client'

import Prism from 'prismjs'
import { useEffect } from 'react'

import { ComponentPage } from '@/components/ComponentPage'
import { CodePreview } from '@/components/CodePreview'

import { Button, Panel } from '../../../../../src'
import code_basic from './code/basic.txt'
import code_closable from './code/closeable.txt'
import code_collapsible from './code/collapsible.txt'

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
                <CodePreview codeBlock={code_closable}>
                    <Panel
                        title="Closable Panel"
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

            {/* Collapsible */}
            <div id="collapsible">
                <h2>Collapsible</h2>
                <CodePreview codeBlock={code_collapsible}>
                    <Panel title="Basic Panel" collapsible>
                        <Button>Button A</Button>
                        <Button>Button B</Button>
                        <Button>Button C</Button>
                    </Panel>
                </CodePreview>
            </div>

            {/* Layouts */}
            <div id="layouts">
                <h2>Layouts</h2>

                <h3>Accordion</h3>
                <CodePreview codeBlock={code_collapsible}>
                    <Panel title="Accordion Layout Panel" layout="accordion">
                        <Panel title="Panel 1">Panel 1 Content</Panel>
                        <Panel title="Panel 2">Panel 2 Content</Panel>
                        <Panel title="Panel 3">Panel 3 Content</Panel>
                    </Panel>
                </CodePreview>
            </div>
        </ComponentPage>
    )
}
