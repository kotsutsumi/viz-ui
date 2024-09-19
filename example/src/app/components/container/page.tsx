'use client'

import { title } from 'process'

import { ComponentPage } from '@/components/ComponentPage'
import { CodePreview } from '@/components/CodePreview'

import { Button, Container } from '../../../../../src'

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
                <h1>Container</h1>
                <p>Provides container functionality for layout placement of components.</p>
            </div>

            {/* Basic */}
            <div id="basic">
                <h2>Basic</h2>
                <CodePreview code={''}>
                    <Container>
                        <Button>Button A</Button>
                        <Button>Button B</Button>
                        <Button>Button C</Button>
                    </Container>
                </CodePreview>
            </div>

            {/* Horizontal */}
            <div id="basic">
                <h2>Horizontal</h2>
                <CodePreview code={''}>
                    <Container direction="horizontal">
                        <Button>Button A</Button>
                        <Button>Button B</Button>
                        <Button>Button C</Button>
                    </Container>
                </CodePreview>
            </div>

            {/* Gap */}
            <div id="basic">
                <h2>Gap</h2>

                <h3>Horizontal</h3>
                <CodePreview code={''}>
                    <Container gap={4} direction="horizontal">
                        <Button>Button A</Button>
                        <Button>Button B</Button>
                        <Button>Button C</Button>
                    </Container>
                </CodePreview>

                <h3>Vertical</h3>
                <CodePreview code={''}>
                    <Container gap={4}>
                        <Button>Button A</Button>
                        <Button>Button B</Button>
                        <Button>Button C</Button>
                    </Container>
                </CodePreview>
            </div>

            {/* Align */}
            <div id="align">
                <h2>Align</h2>

                <h3>Horizontal Left</h3>

                <CodePreview code={''}>
                    <Container gap={4} direction="horizontal" align="left">
                        <Button>Button A</Button>
                        <Button>Button B</Button>
                        <Button>Button C</Button>
                    </Container>
                </CodePreview>

                <h3>Horizontal Center</h3>

                <CodePreview code={''}>
                    <Container gap={4} direction="horizontal" align="center">
                        <Button>Button A</Button>
                        <Button>Button B</Button>
                        <Button>Button C</Button>
                    </Container>
                </CodePreview>

                <h3>Horizontal Right</h3>
                <CodePreview code={''}>
                    <Container gap={4} direction="horizontal" align="right">
                        <Button>Button A</Button>
                        <Button>Button B</Button>
                        <Button>Button C</Button>
                    </Container>
                </CodePreview>

                <h3>Vertical Left</h3>

                <CodePreview code={''}>
                    <Container gap={4} direction="vertical" align="left">
                        <Button>Button A</Button>
                        <Button>Button B</Button>
                        <Button>Button C</Button>
                    </Container>
                </CodePreview>

                <h3>Vertical Center</h3>

                <CodePreview code={''}>
                    <Container gap={4} direction="vertical" align="center">
                        <Button>Button A</Button>
                        <Button>Button B</Button>
                        <Button>Button C</Button>
                    </Container>
                </CodePreview>

                <h3>Vertical Right</h3>
                <CodePreview code={''}>
                    <Container gap={4} direction="vertical" align="right">
                        <Button>Button A</Button>
                        <Button>Button B</Button>
                        <Button>Button C</Button>
                    </Container>
                </CodePreview>
            </div>

            {/* Valign */}
            <div id="valign">
                <h2>Valign</h2>

                <h3>Horizontal Top</h3>

                <CodePreview code={''}>
                    <div className="h-64 bg-slate-100">
                        <Container gap={4} direction="horizontal" valign="top">
                            <Button>Button A</Button>
                            <Button>Button B</Button>
                            <Button>Button C</Button>
                        </Container>
                    </div>
                </CodePreview>

                <h3>Horizontal Center</h3>

                <CodePreview code={''}>
                    <div className="h-64 bg-slate-100">
                        <Container gap={4} direction="horizontal" valign="center">
                            <Button>Button A</Button>
                            <Button>Button B</Button>
                            <Button>Button C</Button>
                        </Container>
                    </div>
                </CodePreview>

                <h3>Horizontal Bottom</h3>
                <CodePreview code={''}>
                    <div className="h-64 bg-slate-100">
                        <Container gap={4} direction="horizontal" valign="bottom">
                            <Button>Button A</Button>
                            <Button>Button B</Button>
                            <Button>Button C</Button>
                        </Container>
                    </div>
                </CodePreview>

                <h3>Vertical Top</h3>

                <CodePreview code={''}>
                    <div className="h-64 bg-slate-100">
                        <Container gap={4} direction="vertical" valign="left">
                            <Button>Button A</Button>
                            <Button>Button B</Button>
                            <Button>Button C</Button>
                        </Container>
                    </div>
                </CodePreview>

                <h3>Vertical Center</h3>

                <CodePreview code={''}>
                    <div className="h-64 bg-slate-100">
                        <Container gap={4} direction="vertical" valign="center">
                            <Button>Button A</Button>
                            <Button>Button B</Button>
                            <Button>Button C</Button>
                        </Container>
                    </div>
                </CodePreview>

                <h3>Vertical Bottom</h3>
                <CodePreview code={''}>
                    <div className="h-64 bg-slate-100">
                        <Container gap={4} direction="vertical" valign="bottom">
                            <Button>Button A</Button>
                            <Button>Button B</Button>
                            <Button>Button C</Button>
                        </Container>
                    </div>
                </CodePreview>
            </div>

            {/* Align Valign */}
            <div id="align-valign">
                <h2>Align Valign</h2>

                <p>
                    Of course, it is also possible to use a combination of <code>align</code> and{' '}
                    <code>valign</code>.
                </p>

                <h3>Vertical Right Top</h3>
                <CodePreview code={''}>
                    <div className="h-64 bg-slate-100">
                        <Container gap={4} direction="vertical" align="right" valign="top">
                            <Button>Button A</Button>
                            <Button>Button B</Button>
                            <Button>Button C</Button>
                        </Container>
                    </div>
                </CodePreview>

                <h3>Vertical Right Center</h3>
                <CodePreview code={''}>
                    <div className="h-64 bg-slate-100">
                        <Container gap={4} direction="vertical" align="right" valign="center">
                            <Button>Button A</Button>
                            <Button>Button B</Button>
                            <Button>Button C</Button>
                        </Container>
                    </div>
                </CodePreview>

                <h3>Vertical Right Bottom</h3>
                <CodePreview code={''}>
                    <div className="h-64 bg-slate-100">
                        <Container gap={4} direction="vertical" align="right" valign="bottom">
                            <Button>Button A</Button>
                            <Button>Button B</Button>
                            <Button>Button C</Button>
                        </Container>
                    </div>
                </CodePreview>
            </div>
        </ComponentPage>
    )
}
