/**
 * Container - VizUI
 *
 * This is a panel component for React.
 *
 * Kazuhiro Kotsutsumi<kotsutsumi@gmail.com>
 */
'use client'
import { ChevronUp, ChevronDown, X } from 'lucide-react'
import React from 'react'
import { forwardRef, HTMLAttributes } from 'react'

import { Collapsible } from '@ark-ui/react'

import cn from '../lib/cn'
import { Button } from './button'
import { Container, ContainerProps } from './container'

export enum PanelLayout {
    Container = 'container',
    Accordion = 'accordion', // AccordionView
    Absolute = 'absolute', // AbsoluteView
    Border = 'border', // BorderView
    Card = 'card', // CardView
    Anchor = 'anchor'
}

export interface PanelProps extends HTMLAttributes<HTMLDivElement>, ContainerProps {
    layout?: string
    title?: string
    closeable?: boolean
    closeFn?: () => void
    collapsible?: boolean
}

const Panel = forwardRef<HTMLDivElement, PanelProps>(
    (
        {
            className,
            children,
            layout = 'container',
            title = undefined,
            closeable = false,
            closeFn = () => {},
            collapsible = false,
            ...props
        },
        ref
    ) => {
        const childElements = React.Children.toArray(children)

        for (const child of childElements) {
            // console.log((child as any).type === Button)
            // console.log((child as any).props.region)
            // ;(child as any).props.collapsible = true
        }

        const Renderer = Container

        const padding = layout === 'container' ? 'p-4' : 'p-0'

        const [collapsed, setCollapsed] = React.useState(false)

        return (
            <div className="border">
                {title && (
                    <div className="flex h-10 p-2 text-base font-bold bg-gray-200 border-b text-muted-foreground">
                        <div className="flex-1">{title}</div>
                        <div>
                            {collapsible && (
                                <Button
                                    className="w-6 h-6 p-0"
                                    onClick={() => {
                                        setCollapsed(!collapsed)
                                    }}
                                >
                                    {collapsed ? <ChevronUp /> : <ChevronDown />}
                                </Button>
                            )}
                            {closeable && (
                                <Button className="w-6 h-6 p-0" onClick={closeFn}>
                                    <X />
                                </Button>
                            )}
                        </div>
                    </div>
                )}
                <Renderer
                    ref={ref}
                    {...props}
                    className={cn(padding, collapsed ? 'hidden' : 'block', className)}
                >
                    {children}
                </Renderer>
            </div>
        )
    }
)

Panel.displayName = 'Panel'

export { Panel }

// EOF
