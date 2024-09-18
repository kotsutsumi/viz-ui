/**
 * cn - VizUI
 * 
 * A simple utility function to merge class names.
 *
 * Kazuhiro Kotsutsumi<kotsutsumi@gmail.com>
 */
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export default function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// EOF
