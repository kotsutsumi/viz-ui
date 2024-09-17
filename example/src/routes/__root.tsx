import * as React from 'react'

import { Button } from '@kotsutsumi/viz-ui'
import { Outlet, createRootRoute } from '@tanstack/react-router'

import Header from '../components/Header'

export const Route = createRootRoute({
    component: () => (
        <React.Fragment>
            <div className="flex w-full flex-col">
                {/* Header */}
                <Header />

                <div>Hello "__root"!</div>
                <h1 className="text-3xl font-bold underline">Hello world!</h1>
                <Button />
                <Outlet />
            </div>
        </React.Fragment>
    )
})
