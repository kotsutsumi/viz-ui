import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@kotsutsumi/viz-ui'

export const Route = createFileRoute('/button')({
    component: () => (
        <div>
            Hello /button!
            <Button />
        </div>
    )
})
