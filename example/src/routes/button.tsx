import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@kotsutsumi/viz-ui'

export const Route = createFileRoute('/button')({
    component: () => (
        <div className="prose prose-xl">
            <h1>Button</h1>
            <Button />
        </div>
    )
})
