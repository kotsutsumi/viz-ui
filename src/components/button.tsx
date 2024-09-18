import { ButtonHTMLAttributes, forwardRef, MutableRefObject } from 'react'
import React from 'react'
import { tv, VariantProps } from 'tailwind-variants'

import { ark } from '@ark-ui/react'

const buttonVariants = tv({
    base: `
        disabled:opacity-50
        disabled:pointer-events-none
        focus-visible:outline-none
        focus-visible:ring-1
        focus-visible:ring-ring
        font-medium
        inline-flex
        items-center
        justify-center
        rounded-md
        text-sm
        transition-colors
        whitespace-nowrap
    `,

    variants: {
        variant: {
            default: `
                bg-primary
                hover:bg-primary/90
                shadow
                text-primary-foreground
            `,
            destructive: `
                bg-destructive
                hover:bg-destructive/90
                shadow-sm
                text-destructive-foreground
            `,
            outline: `
                bg-background
                border
                border-input
                hover:bg-accent
                hover:text-accent-foreground
                shadow-sm
            `,
            secondary: `
                bg-secondary
                hover:bg-secondary/80
                shadow-sm
                text-secondary-foreground
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
            `,
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
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
})

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
        <ark.button
            {...props}
            className={buttonVariants({
                variant,
                size,
                className
            })}
            ref={ref}
        />
    )
})

Button.displayName = 'Button'

export { Button }

// EOF
