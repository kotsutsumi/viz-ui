import { ArrowBigDownDash } from 'lucide-react'
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
            {/* Description */}
            <div>
                <h1>Button</h1>
                <p>Displays a button or a component that looks like a button.</p>
            </div>

            {/* Basic */}
            <div>
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

            {/* Variants */}
            <div>
                <h2>Variants</h2>

                <p>
                    The appearance can be toggled by specifying the <code>variants</code> attribute.
                </p>

                <h3>Primary</h3>
                <div className="code-container">
                    <Tabs.Root defaultValue="preview">
                        <Tabs.List className="">
                            <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
                            <Tabs.Trigger value="code">Code</Tabs.Trigger>
                            <Tabs.Indicator />
                        </Tabs.List>
                        <Tabs.Content value="preview">
                            <Button variant="primary">Primary</Button>
                        </Tabs.Content>
                        <Tabs.Content value="code">
                            <pre className="language-javascript">
                                <code>{`import { Button } from '@kotsutsumi/viz-ui'

export function ButtonDemo() {
  return <Button variant="primary">Primary</Button>
}`}</code>
                            </pre>
                        </Tabs.Content>
                    </Tabs.Root>
                </div>

                <h3>Secondary</h3>
                <div className="code-container">
                    <Tabs.Root defaultValue="preview">
                        <Tabs.List className="">
                            <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
                            <Tabs.Trigger value="code">Code</Tabs.Trigger>
                            <Tabs.Indicator />
                        </Tabs.List>
                        <Tabs.Content value="preview">
                            <Button variant="secondary">Secondary</Button>
                        </Tabs.Content>
                        <Tabs.Content value="code">
                            <pre className="language-javascript">
                                <code>{`import { Button } from '@kotsutsumi/viz-ui'

export function ButtonDemo() {
  return <Button variant="secondary">Secondary</Button>
}`}</code>
                            </pre>
                        </Tabs.Content>
                    </Tabs.Root>
                </div>

                <h3>Destructive</h3>
                <div className="code-container">
                    <Tabs.Root defaultValue="preview">
                        <Tabs.List className="">
                            <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
                            <Tabs.Trigger value="code">Code</Tabs.Trigger>
                            <Tabs.Indicator />
                        </Tabs.List>
                        <Tabs.Content value="preview">
                            <Button variant="destructive">Destructive</Button>
                        </Tabs.Content>
                        <Tabs.Content value="code">
                            <pre className="language-javascript">
                                <code>{`import { Button } from '@kotsutsumi/viz-ui'

export function ButtonDemo() {
  return <Button variant="destructive">Destructive</Button>
}`}</code>
                            </pre>
                        </Tabs.Content>
                    </Tabs.Root>
                </div>

                <h3>Outline</h3>
                <div className="code-container">
                    <Tabs.Root defaultValue="preview">
                        <Tabs.List className="">
                            <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
                            <Tabs.Trigger value="code">Code</Tabs.Trigger>
                            <Tabs.Indicator />
                        </Tabs.List>
                        <Tabs.Content value="preview">
                            <Button variant="outline">Outline</Button>
                        </Tabs.Content>
                        <Tabs.Content value="code">
                            <pre className="language-javascript">
                                <code>{`import { Button } from '@kotsutsumi/viz-ui'

export function ButtonDemo() {
  return <Button variant="outline">Outline</Button>
}`}</code>
                            </pre>
                        </Tabs.Content>
                    </Tabs.Root>
                </div>

                <h3>Ghost</h3>
                <div className="code-container">
                    <Tabs.Root defaultValue="preview">
                        <Tabs.List className="">
                            <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
                            <Tabs.Trigger value="code">Code</Tabs.Trigger>
                            <Tabs.Indicator />
                        </Tabs.List>
                        <Tabs.Content value="preview">
                            <Button variant="ghost">Ghost</Button>
                        </Tabs.Content>
                        <Tabs.Content value="code">
                            <pre className="language-javascript">
                                <code>{`import { Button } from '@kotsutsumi/viz-ui'

export function ButtonDemo() {
  return <Button variant="ghost">Ghost</Button>
}`}</code>
                            </pre>
                        </Tabs.Content>
                    </Tabs.Root>
                </div>

                <h3>Link</h3>
                <div className="code-container">
                    <Tabs.Root defaultValue="preview">
                        <Tabs.List className="">
                            <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
                            <Tabs.Trigger value="code">Code</Tabs.Trigger>
                            <Tabs.Indicator />
                        </Tabs.List>
                        <Tabs.Content value="preview">
                            <Button variant="link">Link</Button>
                        </Tabs.Content>
                        <Tabs.Content value="code">
                            <pre className="language-javascript">
                                <code>{`import { Button } from '@kotsutsumi/viz-ui'

export function ButtonDemo() {
  return <Button variant="link">Link</Button>
}`}</code>
                            </pre>
                        </Tabs.Content>
                    </Tabs.Root>
                </div>
            </div>

            {/* Size */}
            <div>
                <h2>Size</h2>

                <p>
                    The size can be toggled by specifying the <code>size</code> attribute.
                </p>

                <h3>Small</h3>
                <div className="code-container">
                    <Tabs.Root defaultValue="preview">
                        <Tabs.List className="">
                            <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
                            <Tabs.Trigger value="code">Code</Tabs.Trigger>
                            <Tabs.Indicator />
                        </Tabs.List>
                        <Tabs.Content value="preview">
                            <Button size="sm">Small</Button>
                        </Tabs.Content>
                        <Tabs.Content value="code">
                            <pre className="language-javascript">
                                <code>{`import { Button } from '@kotsutsumi/viz-ui'

export function ButtonDemo() {
  return <Button size="sm">Small</Button>
}`}</code>
                            </pre>
                        </Tabs.Content>
                    </Tabs.Root>
                </div>
                <h3>Large</h3>
                <div className="code-container">
                    <Tabs.Root defaultValue="preview">
                        <Tabs.List className="">
                            <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
                            <Tabs.Trigger value="code">Code</Tabs.Trigger>
                            <Tabs.Indicator />
                        </Tabs.List>
                        <Tabs.Content value="preview">
                            <Button size="lg">Large</Button>
                        </Tabs.Content>
                        <Tabs.Content value="code">
                            <pre className="language-javascript">
                                <code>{`import { Button } from '@kotsutsumi/viz-ui'

export function ButtonDemo() {
  return <Button size="lg">Large</Button>
}`}</code>
                            </pre>
                        </Tabs.Content>
                    </Tabs.Root>
                </div>

                <h3>Icon</h3>
                <div className="code-container">
                    <Tabs.Root defaultValue="preview">
                        <Tabs.List className="">
                            <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
                            <Tabs.Trigger value="code">Code</Tabs.Trigger>
                            <Tabs.Indicator />
                        </Tabs.List>
                        <Tabs.Content value="preview">
                            <Button size="icon">
                                <ArrowBigDownDash />
                            </Button>
                        </Tabs.Content>
                        <Tabs.Content value="code">
                            <pre className="language-javascript">
                                <code>{`import { Button } from '@kotsutsumi/viz-ui'

export function ButtonDemo() {
  return <Button size="icon">Icon</Button>
}`}</code>
                            </pre>
                        </Tabs.Content>
                    </Tabs.Root>
                </div>
            </div>

            {/* Interval */}
            <div>
                <h2>Interval</h2>
                <p>Click and hold to repeat the clicking action.</p>

                <div>
                    <h3>Basic</h3>
                    The time to repeat for the <code>interval</code> attribute is in milliseconds.
                    <div className="code-container">
                        <Tabs.Root defaultValue="preview">
                            <Tabs.List className="">
                                <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
                                <Tabs.Trigger value="code">Code</Tabs.Trigger>
                                <Tabs.Indicator />
                            </Tabs.List>
                            <Tabs.Content value="preview">
                                <Button
                                    interval={100}
                                    onClick={() => {
                                        console.log('Clicked!')
                                    }}
                                >
                                    Interval output log
                                </Button>
                            </Tabs.Content>
                            <Tabs.Content value="code">
                                <pre className="language-javascript">
                                    <code>{`import { Button } from '@kotsutsumi/viz-ui'

export function ButtonDemo() {
  return <Button
    interval={100}
    onClick={() => {
      console.log('Clicked!')
    }}
  >Interval output log</Button>
}`}</code>
                                </pre>
                            </Tabs.Content>
                        </Tabs.Root>
                    </div>
                </div>
            </div>

            {/* Attributes */}
            <div>
                <h2>Attributes</h2>

                <table className="table-auto">
                    <thead>
                        <tr className="bg-gray-100 text-sm ">
                            <th className="px-4 py-2 border-l border-t border-b text-gray-600">
                                Props
                            </th>
                            <th className="px-4 py-2 border-t border-b text-gray-600">Default</th>
                            <th className="px-4 py-2 border-t border-r border-b text-gray-600">
                                Type
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-sm">
                            <td className="px-4 py-2 border-l border-t border-b">
                                <code className="text-sky-600">variants</code>
                            </td>
                            <td className="px-4 py-2 border-t border-b">
                                <code className="text-gray-600">'default'</code>
                            </td>
                            <td className="px-4 py-2 border-t border-r border-b">
                                <code className="text-gray-600">
                                    'default' | 'primary' | 'secondary' | 'destructive' | 'outline'
                                    | 'ghost' | 'link'
                                </code>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
