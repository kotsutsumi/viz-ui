'use client'

import { ArrowBigDownDash } from 'lucide-react'

import { CodePreview } from '@/components/CodePreview'
import { Content } from '@/components/Content'
import { Header } from '@/components/Header'
import { LeftMenu } from '@/components/LeftMenu'
import { RightMenu } from '@/components/RightMenu'

import { Button } from '../../../../../src'
import code_interval_basic from './code/interval/basic.txt'
import code_size_icon from './code/size/icon.txt'
import code_size_large from './code/size/large.txt'
import code_size_small from './code/size/small.txt'
import code_variants_destructive from './code/variants/destructive.txt'
import code_variants_ghost from './code/variants/ghost.txt'
import code_variants_link from './code/variants/link.txt'
import code_variants_outline from './code/variants/outline.txt'
import code_variants_primary from './code/variants/primary.txt'
import code_variants_secondary from './code/variants/secondary.txt'
import code_basic from './code/basic.txt'

export default function ButtonPage() {
    return (
        <div className="flex w-full flex-col">
            {/* Header */}
            <Header />

            <div className="relative mx-auto flex w-full max-w-8xl flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
                {/* Left Menu */}
                <LeftMenu />

                {/* Content */}
                <Content>
                    {/* Description */}
                    <div>
                        <h1>Button</h1>
                        <p>Displays a button or a component that looks like a button.</p>
                    </div>

                    {/* Basic */}
                    <div>
                        <h2>Basic</h2>
                        <CodePreview code={code_basic}>
                            <Button>Button</Button>
                        </CodePreview>
                    </div>

                    {/* Variants */}
                    <div>
                        <h2>Variants</h2>

                        <p>
                            The appearance can be toggled by specifying the <code>variants</code>{' '}
                            attribute.
                        </p>

                        <h3>Primary</h3>
                        <CodePreview code={code_variants_primary}>
                            <Button variant="primary">Primary</Button>
                        </CodePreview>

                        <h3>Secondary</h3>
                        <CodePreview code={code_variants_secondary}>
                            <Button variant="secondary">Secondary</Button>
                        </CodePreview>

                        <h3>Destructive</h3>
                        <CodePreview code={code_variants_destructive}>
                            <Button variant="destructive">Destructive</Button>
                        </CodePreview>

                        <h3>Outline</h3>
                        <CodePreview code={code_variants_outline}>
                            <Button variant="outline">Outline</Button>
                        </CodePreview>

                        <h3>Ghost</h3>
                        <CodePreview code={code_variants_ghost}>
                            <Button variant="ghost">Ghost</Button>
                        </CodePreview>

                        <h3>Link</h3>
                        <CodePreview code={code_variants_link}>
                            <Button variant="link">Link</Button>
                        </CodePreview>
                    </div>

                    {/* Size */}
                    <div>
                        <h2>Size</h2>

                        <p>
                            The size can be toggled by specifying the <code>size</code> attribute.
                        </p>

                        <h3>Small</h3>
                        <CodePreview code={code_size_small}>
                            <Button size="sm">Small</Button>
                        </CodePreview>

                        <h3>Large</h3>
                        <CodePreview code={code_size_large}>
                            <Button size="lg">Large</Button>
                        </CodePreview>

                        <h3>Icon</h3>
                        <CodePreview code={code_size_icon}>
                            <Button size="icon">
                                <ArrowBigDownDash />
                            </Button>
                        </CodePreview>
                    </div>

                    {/* Interval */}
                    <div>
                        <h2>Interval</h2>
                        <p>Click and hold to repeat the clicking action.</p>

                        <div>
                            <h3>Basic</h3>
                            <p>
                                The time to repeat for the <code>interval</code> attribute is in
                                milliseconds.
                            </p>

                            <CodePreview code={code_interval_basic}>
                                <Button
                                    interval={100}
                                    onClick={() => {
                                        console.log('Clicked!')
                                    }}
                                >
                                    Interval output log
                                </Button>
                            </CodePreview>
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
                                    <th className="px-4 py-2 border-t border-b text-gray-600">
                                        Default
                                    </th>
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
                                            'default' | 'primary' | 'secondary' | 'destructive' |
                                            'outline' | 'ghost' | 'link'
                                        </code>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Content>

                {/* Right Menu */}
                <RightMenu />
            </div>
        </div>
    )
}
