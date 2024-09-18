/**
 * Button - VizUI
 *
 * This is a button component for React.
 *
 * Kazuhiro Kotsutsumi<kotsutsumi@gmail.com>
 */
import { ButtonHTMLAttributes, forwardRef, MutableRefObject, useState } from 'react'
import React from 'react'
import { tv, VariantProps } from 'tailwind-variants'

import { ark } from '@ark-ui/react'

import cn from '../lib/cn'

const buttonVariants = tv({
    base: `
        text-sm
        font-medium
        inline-flex
        items-center
        justify-center
        focus-visible:outline-none
        focus-visible:ring-1
        focus-visible:ring-ring
        transition-colors
        whitespace-nowrap
        disabled:opacity-50
        disabled:pointer-events-none
        select-none
    `,

    variants: {
        variant: {
            default: `
                bg-gray-200
                hover:bg-gray-100
                text-muted-foreground
                border
            `,
            primary: `
                bg-primary
                hover:bg-primary/80
                text-primary-foreground
            `,
            secondary: `
                bg-secondary
                hover:bg-secondary/80
                text-secondary-foreground
            `,
            destructive: `
                bg-destructive
                hover:bg-destructive/90
                text-destructive-foreground
            `,
            outline: `
                bg-background
                border
                border-input
                hover:bg-accent
                hover:text-accent-foreground
            `,
            ghost: `
                hover:bg-accent
                hover:text-accent-foreground
            `,
            link: `
                hover:underline
                text-primary
                underline-offset-4
            `
        },
        size: {
            default: `
                h-9
                px-4
                py-2
            `
            /*
            sm: `
                h-8
                px-3
                rounded-md
                text-xs
            `,
            lg: `
                h-10
                px-8
                rounded-md
            `,
            icon: `
                size-9
            `
            */
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
})

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
    interval?: number
    onInterval?: (
        event: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>
    ) => void
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, interval = undefined, ...props }, ref) => {
        //

        // effected class names
        const [effectedClassName, setEffectedClassName] = useState('')

        // interval id
        let intervalId: NodeJS.Timeout | undefined

        // onClick handler
        const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            if (props.onClick) {
                props.onClick(event)
            }
        }

        const startInterval = (
            event: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>
        ) => {
            if (interval === undefined) {
                return
            }

            if (intervalId === undefined) {
                intervalId = setInterval(() => {
                    if (props.onInterval) {
                        props.onInterval(event)
                    } else {
                        onClick(event as React.MouseEvent<HTMLButtonElement>)
                    }
                }, interval)
            }
        }

        const stopInterval = (
            event: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>
        ) => {
            if (intervalId !== undefined) {
                clearInterval(intervalId)
                intervalId = undefined
            }
        }

        // onMouseDown handler
        const onMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
            // start interval
            startInterval(event)

            if (props.onMouseDown) {
                props.onMouseDown(event)
            }

            // set effected class name
            setEffectedClassName('hover:bg-gray-200')
        }

        // onMouseUp handler
        const onMouseUp = (event: React.MouseEvent<HTMLButtonElement>) => {
            // stop interval
            stopInterval(event)

            if (props.onMouseUp) {
                props.onMouseUp(event)
            }

            // reset effected class name
            setEffectedClassName('')
        }

        // onMouseLeave handler
        const onMouseLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
            // stop interval
            stopInterval(event)

            if (props.onMouseLeave) {
                props.onMouseLeave(event)
            }

            // reset effected class name
            setEffectedClassName('')
        }

        // onTouchStart handler
        const onTouchStart = (event: React.TouchEvent<HTMLButtonElement>) => {
            // start interval
            startInterval(event)

            if (props.onTouchStart) {
                props.onTouchStart(event)
            }

            // set effected class name
            setEffectedClassName('hover:bg-gray-200')
        }

        // onTouchEnd handler
        const onTouchEnd = (event: React.TouchEvent<HTMLButtonElement>) => {
            // stop interval
            stopInterval(event)

            if (props.onTouchEnd) {
                props.onTouchEnd(event)
            }

            // reset effected class name
            setEffectedClassName('')
        }

        // ----------------------------------------------------------------------------------------

        return (
            <ark.button
                {...props}
                className={cn(
                    buttonVariants({
                        variant,
                        size,
                        className
                    }),
                    effectedClassName
                )}
                ref={ref}
                onClick={onClick}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseLeave}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            />
        )
    }
)

Button.displayName = 'Button'

export { Button }

// EOF
