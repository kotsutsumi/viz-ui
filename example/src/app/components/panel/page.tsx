'use client'

import Prism from 'prismjs'
import { useEffect } from 'react'

import { ComponentPage } from '@/components/ComponentPage'
import { CodePreview } from '@/components/CodePreview'

import { Button, Panel } from '../../../../../src'

const rightMenuItems = [
    {
        title: 'Description',
        link: '#description'
    }
]

export default function Page() {
    useEffect(() => {
        // Prism.highlightAll()
    }, [])

    return (
        <ComponentPage rightMenuItems={rightMenuItems}>
            {/* Description */}
            <div id="description">
                <h1>Panel</h1>
                <p>Provides panel functionality that encompasses components.</p>
            </div>

            {/* Basic */}
            <div id="basic">
                <h2>Basic</h2>
                <CodePreview code={''}>
                    <Panel>
                        <Button>Button A</Button>
                        <Button>Button B</Button>
                        <Button>Button C</Button>
                    </Panel>
                </CodePreview>
            </div>
        </ComponentPage>
    )
}
