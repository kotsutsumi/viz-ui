import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: () => (
        <div className="prose prose-xl">
            <ul>
                <li>
                    <a href="/button">Button</a>
                </li>
            </ul>
        </div>
    )
})
