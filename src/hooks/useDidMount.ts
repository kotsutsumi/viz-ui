/**
 * useDidMount - VizUI
 *
 * This hook is used for the initialization process to address the issue of
 * useEffect being called twice during development since React18.
 *
 * Kazuhiro Kotsutsumi<kotsutsumi@gmail.com>
 */
import { useEffect, useRef } from 'react'

// useDidMount
const useDidMount = (callback: () => void) => {
    // executed reference
    const executed = useRef(false)

    // useEffect
    useEffect(() => {
        // if not executed
        if (!executed.current) {
            // set executed
            executed.current = true

            // return callback result
            return callback()
        }
    }, [callback])
}

// export
export default useDidMount

// EOF
