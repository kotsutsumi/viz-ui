/**
 * Container - VizUI
 *
 * This is a panel component for React.
 *
 * Kazuhiro Kotsutsumi<kotsutsumi@gmail.com>
 */
'use client'

import React from 'react'
import { forwardRef, HTMLAttributes } from 'react'

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
}

const Panel = forwardRef<HTMLDivElement, PanelProps>(
    ({ className, children, layout = 'container', ...props }, ref) => {
        const childElements = React.Children.toArray(children)

        for (const child of childElements) {
            console.log((child as any).type === Button)
            console.log((child as any).props.region)
        }

        const Renderer = layout === 'container' ? Container : 'div'

        return (
            <Renderer ref={ref} {...props} className={cn(className)}>
                {children}
            </Renderer>
        )
    }
)

Panel.displayName = 'Panel'

export { Panel }

// EOF
