'use client'

import { ComponentPage } from '@/components/ComponentPage'
import { CodePreview } from '@/components/CodePreview'

import { Button, Container } from '../../../../../src'
import code_align_horizontal_center from './code/align_horizontal_center.txt'
import code_align_horizontal_left from './code/align_horizontal_left.txt'
import code_align_horizontal_right from './code/align_horizontal_right.txt'
import code_align_valign_vertical_right_bottom from './code/align_valign_vertical_right_bottom.txt'
import code_align_valign_vertical_right_center from './code/align_valign_vertical_right_center.txt'
import code_align_valign_vertical_right_top from './code/align_valign_vertical_right_top.txt'
import code_align_vertical_center from './code/align_vertical_center.txt'
import code_align_vertical_left from './code/align_vertical_left.txt'
import code_align_vertical_right from './code/align_vertical_right.txt'
import code_basic from './code/basic.txt'
import code_gap_horizontal from './code/gap_horizontal.txt'
import code_gap_vertical from './code/gap_vertical.txt'
import code_horizontal from './code/horizontal.txt'
import code_valign_horizontal_bottom from './code/valign_horizontal_bottom.txt'
import code_valign_horizontal_center from './code/valign_horizontal_center.txt'
import code_valign_horizontal_top from './code/valign_horizontal_top.txt'
import code_valign_vertical_bottom from './code/valign_vertical_bottom.txt'
import code_valign_vertical_center from './code/valign_vertical_center.txt'
import code_valign_vertical_top from './code/valign_vertical_top.txt'

const rightMenuItems = [
    {
        title: 'Description',
        link: '#description'
    },
    {
        title: 'Basic',
        link: '#basic'
    },
    {
        title: 'Horizontal',
        link: '#horizontal'
    },
    {
        title: 'Gap',
        link: '#gap',
        items: [
            {
                title: 'Horizontal',
                link: '#gap-horizontal'
            },
            {
                title: 'Vertical',
                link: '#gap-vertical'
            }
        ]
    },
    {
        title: 'Align',
        link: '#align',
        items: [
            {
                title: 'Horizontal Left',
                link: '#align-horizontal-left'
            },
            {
                title: 'Horizontal Center',
                link: '#align-horizontal-center'
            },
            {
                title: 'Horizontal Right',
                link: '#align-horizontal-right'
            },
            {
                title: 'Vertical Left',
                link: '#align-vertical-left'
            },
            {
                title: 'Vertical Center',
                link: '#align-vertical-center'
            },
            {
                title: 'Vertical Right',
                link: '#align-vertical-right'
            }
        ]
    },
    {
        title: 'Valign',
        link: '#valign',
        items: [
            {
                title: 'Horizontal Top',
                link: '#valign-horizontal-top'
            },
            {
                title: 'Horizontal Center',
                link: '#valign-horizontal-center'
            },
            {
                title: 'Horizontal Bottom',
                link: '#valign-horizontal-bottom'
            },
            {
                title: 'Vertical Top',
                link: '#valign-vertical-top'
            },
            {
                title: 'Vertical Center',
                link: '#valign-vertical-center'
            },
            {
                title: 'Vertical Bottom',
                link: '#valign-vertical-bottom'
            }
        ]
    },
    {
        title: 'Align Valign',
        link: '#align-valign',
        items: [
            {
                title: 'Vertical Right Top',
                link: '#align-valign-vertical-right-top'
            },
            {
                title: 'Vertical Right Center',
                link: '#align-valign-vertical-right-center'
            },
            {
                title: 'Vertical Right Bottom',
                link: '#align-valign-vertical-right-bottom'
            }
        ]
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
                <CodePreview codeBlock={code_basic}>
                    <Container>
                        <Button>Button A</Button>
                        <Button>Button B</Button>
                        <Button>Button C</Button>
                    </Container>
                </CodePreview>
            </div>

            {/* Horizontal */}
            <div id="horizontal">
                <h2>Horizontal</h2>
                <CodePreview codeBlock={code_horizontal}>
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

                <h3 id="gap-horizontal">Horizontal</h3>
                <CodePreview codeBlock={code_gap_horizontal}>
                    <Container gap={4} direction="horizontal">
                        <Button>Button A</Button>
                        <Button>Button B</Button>
                        <Button>Button C</Button>
                    </Container>
                </CodePreview>

                <h3 id="gap-vertical">Vertical</h3>
                <CodePreview codeBlock={code_gap_vertical}>
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

                <h3 id="align-horizontal-left">Horizontal Left</h3>

                <CodePreview codeBlock={code_align_horizontal_left}>
                    <Container gap={4} direction="horizontal" align="left">
                        <Button>Button A</Button>
                        <Button>Button B</Button>
                        <Button>Button C</Button>
                    </Container>
                </CodePreview>

                <h3 id="align-horizontal-center">Horizontal Center</h3>

                <CodePreview codeBlock={code_align_horizontal_center}>
                    <Container gap={4} direction="horizontal" align="center">
                        <Button>Button A</Button>
                        <Button>Button B</Button>
                        <Button>Button C</Button>
                    </Container>
                </CodePreview>

                <h3 id="align-horizontal-right">Horizontal Right</h3>
                <CodePreview codeBlock={code_align_horizontal_right}>
                    <Container gap={4} direction="horizontal" align="right">
                        <Button>Button A</Button>
                        <Button>Button B</Button>
                        <Button>Button C</Button>
                    </Container>
                </CodePreview>

                <h3 id="align-vertical-left">Vertical Left</h3>
                <CodePreview codeBlock={code_align_vertical_left}>
                    <Container gap={4} direction="vertical" align="left">
                        <Button>Button A</Button>
                        <Button>Button B</Button>
                        <Button>Button C</Button>
                    </Container>
                </CodePreview>

                <h3 id="align-vertical-center">Vertical Center</h3>
                <CodePreview codeBlock={code_align_vertical_center}>
                    <Container gap={4} direction="vertical" align="center">
                        <Button>Button A</Button>
                        <Button>Button B</Button>
                        <Button>Button C</Button>
                    </Container>
                </CodePreview>

                <h3 id="align-vertical-right">Vertical Right</h3>
                <CodePreview codeBlock={code_align_vertical_right}>
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

                <h3 id="valign-horizontal-top">Horizontal Top</h3>
                <CodePreview codeBlock={code_valign_horizontal_top}>
                    <div className="h-64 bg-slate-100">
                        <Container gap={4} direction="horizontal" valign="top">
                            <Button>Button A</Button>
                            <Button>Button B</Button>
                            <Button>Button C</Button>
                        </Container>
                    </div>
                </CodePreview>

                <h3 id="valign-horizontal-center">Horizontal Center</h3>
                <CodePreview codeBlock={code_valign_horizontal_center}>
                    <div className="h-64 bg-slate-100">
                        <Container gap={4} direction="horizontal" valign="center">
                            <Button>Button A</Button>
                            <Button>Button B</Button>
                            <Button>Button C</Button>
                        </Container>
                    </div>
                </CodePreview>

                <h3 id="valign-horizontal-bottom">Horizontal Bottom</h3>
                <CodePreview codeBlock={code_valign_horizontal_bottom}>
                    <div className="h-64 bg-slate-100">
                        <Container gap={4} direction="horizontal" valign="bottom">
                            <Button>Button A</Button>
                            <Button>Button B</Button>
                            <Button>Button C</Button>
                        </Container>
                    </div>
                </CodePreview>

                <h3 id="valign-vertical-top">Vertical Top</h3>
                <CodePreview codeBlock={code_valign_vertical_top}>
                    <div className="h-64 bg-slate-100">
                        <Container gap={4} direction="vertical" valign="top">
                            <Button>Button A</Button>
                            <Button>Button B</Button>
                            <Button>Button C</Button>
                        </Container>
                    </div>
                </CodePreview>

                <h3 id="valign-vertical-center">Vertical Center</h3>
                <CodePreview codeBlock={code_valign_vertical_center}>
                    <div className="h-64 bg-slate-100">
                        <Container gap={4} direction="vertical" valign="center">
                            <Button>Button A</Button>
                            <Button>Button B</Button>
                            <Button>Button C</Button>
                        </Container>
                    </div>
                </CodePreview>

                <h3 id="valign-vertical-bottom">Vertical Bottom</h3>
                <CodePreview codeBlock={code_valign_vertical_bottom}>
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

                <h3 id="align-valign-vertical-right-top">Vertical Right Top</h3>
                <CodePreview codeBlock={code_align_valign_vertical_right_top}>
                    <div className="h-64 bg-slate-100">
                        <Container gap={4} direction="vertical" align="right" valign="top">
                            <Button>Button A</Button>
                            <Button>Button B</Button>
                            <Button>Button C</Button>
                        </Container>
                    </div>
                </CodePreview>

                <h3 id="align-valign-vertical-right-center">Vertical Right Center</h3>
                <CodePreview codeBlock={code_align_valign_vertical_right_center}>
                    <div className="h-64 bg-slate-100">
                        <Container gap={4} direction="vertical" align="right" valign="center">
                            <Button>Button A</Button>
                            <Button>Button B</Button>
                            <Button>Button C</Button>
                        </Container>
                    </div>
                </CodePreview>

                <h3 id="align-valign-vertical-right-bottom">Vertical Right Bottom</h3>
                <CodePreview codeBlock={code_align_valign_vertical_right_bottom}>
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
