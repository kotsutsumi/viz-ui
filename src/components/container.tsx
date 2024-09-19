/**
 * Container - VizUI
 *
 * This is a container component for React.
 *
 * Kazuhiro Kotsutsumi<kotsutsumi@gmail.com>
 */
import React from 'react'
import { forwardRef, HTMLAttributes } from 'react'

import cn from '../lib/cn'

enum Align {
    Left = 'left',
    Center = 'center',
    Right = 'right'
}

enum Valign {
    Top = 'top',
    Center = 'center',
    Bottom = 'bottom'
}

enum Direction {
    Vertical = 'vertical',
    Horizontal = 'horizontal'
}

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    direction?: string
    gap?: number
    align?: string
    valign?: string
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
    (
        {
            children,
            direction = Direction.Vertical,
            gap = 0,
            align = Align.Left,
            valign = Valign.Top,
            ...props
        },
        ref
    ) => {
        const cls = ['flex', 'w-full', 'h-full', 'flex-wrap']

        if (direction === Direction.Horizontal) {
            cls.push('flex-row')
        } else {
            cls.push('flex-col')
        }

        if (direction === Direction.Horizontal) {
            if (align === Align.Left) {
                cls.push(`justify-start`)
            } else if (align === Align.Center) {
                cls.push(`justify-center`)
            } else if (align === Align.Right) {
                cls.push(`justify-end`)
            }
        } else if (direction === Direction.Vertical) {
            if (align === Align.Left) {
                cls.push(`content-start`)
            } else if (align === Align.Center) {
                cls.push(`content-center`)
            } else if (align === Align.Right) {
                cls.push(`content-end`)
            }
        }

        // if (valign === Valign.Top) {
        //     cls.push(`justify-start`)
        // } else if (valign === Valign.Center) {
        //     cls.push(`justify-center`)
        // } else if (valign === Valign.Bottom) {
        //     cls.push(`justify-end`)
        // }

        if (gap > 0) {
            cls.push(`gap-${gap}`)
        }

        return (
            <div ref={ref} {...props} className={cn(cls)}>
                {children}
            </div>
        )
    }
)

Container.displayName = 'Container'

export { Container }

// EOF
