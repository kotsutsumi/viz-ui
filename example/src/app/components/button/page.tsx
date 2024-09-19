'use client'

import { ArrowBigDownDash } from 'lucide-react'
import { useState } from 'react'

import { CodePreview } from '@/components/CodePreview'
import { ComponentPage } from '@/components/ComponentPage'

import { Button } from '../../../../../src'
import code_basic_aschild from './code/basic/aschild.txt'
import code_basic_basic from './code/basic/basic.txt'
import code_disabled_basic from './code/disabled/basic.txt'
import code_disabled_state from './code/disabled/state.txt'
import code_interval_basic from './code/interval/basic.txt'
import code_longpress_basic from './code/longpress/basic.txt'
import code_size_icon from './code/size/icon.txt'
import code_size_large from './code/size/large.txt'
import code_size_small from './code/size/small.txt'
import code_variants_destructive from './code/variants/destructive.txt'
import code_variants_ghost from './code/variants/ghost.txt'
import code_variants_link from './code/variants/link.txt'
import code_variants_outline from './code/variants/outline.txt'
import code_variants_primary from './code/variants/primary.txt'
import code_variants_secondary from './code/variants/secondary.txt'

const rightMenuItems = [
    {
        title: 'Description',
        link: '#description'
    },
    {
        title: 'Basic',
        link: '#basic',
        items: [
            {
                title: 'Basic',
                link: '#basic'
            },
            {
                title: 'asChild',
                link: '#asChild'
            }
        ]
    },
    {
        title: 'Variants',
        link: '#variants',
        items: [
            {
                title: 'Primary',
                link: '#variants-primary'
            },
            {
                title: 'Secondary',
                link: '#variants-secondary'
            },
            {
                title: 'Destructive',
                link: '#variants-destructive'
            },
            {
                title: 'Outline',
                link: '#variants-outline'
            },
            {
                title: 'Ghost',
                link: '#variants-ghost'
            },
            {
                title: 'Link',
                link: '#variants-link'
            }
        ]
    },
    {
        title: 'Size',
        link: '#size',
        items: [
            {
                title: 'Small',
                link: '#size-small'
            },
            {
                title: 'Large',
                link: '#size-large'
            },
            {
                title: 'Icon',
                link: '#size-icon'
            }
        ]
    },
    {
        title: 'Disabled',
        link: '#disabled',
        items: [
            {
                title: 'Basic',
                link: '#disabled-basic'
            },
            {
                title: 'State',
                link: '#disabled-state'
            }
        ]
    },
    {
        title: 'Interval',
        link: '#interval',
        items: [
            {
                title: 'Basic',
                link: '#interval-basic'
            }
        ]
    },
    {
        title: 'Long Press',
        link: '#long-press',
        items: [
            {
                title: 'Basic',
                link: '#long-press-basic'
            }
        ]
    },
    {
        title: 'Attributes',
        link: '#attributes'
    }
]

export default function Page() {
    const [disabled, setDisabled] = useState(true)

    return (
        <ComponentPage rightMenuItems={rightMenuItems}>
            {/* Description */}
            <div id="description">
                <h1>Button</h1>
                <p>Displays a button or a component that looks like a button.</p>
            </div>

            {/* Basic */}
            <div id="basic">
                <h2>Basic</h2>
                <CodePreview codeBlock={code_basic_basic}>
                    <Button>Button</Button>
                </CodePreview>

                <h2>asChild</h2>
                <CodePreview codeBlock={code_basic_aschild}>
                    <Button asChild>
                        <a href="#">Link</a>
                    </Button>
                </CodePreview>
            </div>

            {/* Variants */}
            <div id="variants">
                <h2>Variants</h2>

                <p>
                    The appearance can be toggled by specifying the <code>variants</code> attribute.
                </p>

                <h3 id="variants-primary">Primary</h3>
                <CodePreview codeBlock={code_variants_primary}>
                    <Button variant="primary">Primary</Button>
                </CodePreview>

                <h3 id="variants-secondary">Secondary</h3>
                <CodePreview codeBlock={code_variants_secondary}>
                    <Button variant="secondary">Secondary</Button>
                </CodePreview>

                <h3 id="variants-destructive">Destructive</h3>
                <CodePreview codeBlock={code_variants_destructive}>
                    <Button variant="destructive">Destructive</Button>
                </CodePreview>

                <h3 id="variants-outline">Outline</h3>
                <CodePreview codeBlock={code_variants_outline}>
                    <Button variant="outline">Outline</Button>
                </CodePreview>

                <h3 id="variants-ghost">Ghost</h3>
                <CodePreview codeBlock={code_variants_ghost}>
                    <Button variant="ghost">Ghost</Button>
                </CodePreview>

                <h3 id="variants-link">Link</h3>
                <CodePreview codeBlock={code_variants_link}>
                    <Button variant="link">Link</Button>
                </CodePreview>
            </div>

            {/* Size */}
            <div id="size">
                <h2>Size</h2>

                <p>
                    The size can be toggled by specifying the <code>size</code> attribute.
                </p>

                <h3 id="size-small">Small</h3>
                <CodePreview codeBlock={code_size_small}>
                    <Button size="sm">Small</Button>
                </CodePreview>

                <h3 id="size-large">Large</h3>
                <CodePreview codeBlock={code_size_large}>
                    <Button size="lg">Large</Button>
                </CodePreview>

                <h3 id="size-icon">Icon</h3>
                <CodePreview codeBlock={code_size_icon}>
                    <Button size="icon">
                        <ArrowBigDownDash />
                    </Button>
                </CodePreview>
            </div>

            {/* Disabled */}
            <div id="disabled">
                <h2>Disabled</h2>

                <h3 id="disabled-basic">Basic</h3>
                <CodePreview codeBlock={code_disabled_basic}>
                    <Button disabled>Button</Button>
                </CodePreview>

                <h3 id="disabled-state">State</h3>
                <CodePreview codeBlock={code_disabled_state}>
                    <Button disabled={disabled}>Button</Button>
                </CodePreview>
            </div>

            {/* Interval */}
            <div id="interval">
                <h2>Interval</h2>
                <p>Click and hold to repeat the clicking action.</p>

                <div>
                    <h3 id="interval-basic">Basic</h3>
                    <p>
                        The time to repeat for the <code>interval</code> attribute is in
                        milliseconds.
                    </p>

                    <CodePreview codeBlock={code_interval_basic}>
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

            {/* Long Press */}
            <div id="long-press">
                <h2>Long Press</h2>
                <p>Any callback can be invoked when the button is pressed and held.</p>

                <div>
                    <h3 id="long-press-basic">Basic</h3>
                    <p>
                        The long press time is set numerically in the <code>delay</code> attribute,
                        <code>callback</code> sets the function object to <code>delayFn</code>.
                    </p>
                    <CodePreview codeBlock={code_longpress_basic}>
                        <Button
                            delay={1000}
                            delayFn={() => {
                                console.log('Long Pressed!')
                            }}
                        >
                            Long Press Me!
                        </Button>
                    </CodePreview>
                </div>
            </div>

            {/* Attributes */}
            <div id="attributes">
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
                                <code className="text-primary">variants</code>
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
        </ComponentPage>
    )
}
