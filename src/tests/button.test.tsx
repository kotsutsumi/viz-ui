import React from 'react'
import { expect, test, vi } from 'vitest'

import { fireEvent, render, screen } from '@testing-library/react'

import { Button } from '../components/button'
import '@testing-library/jest-dom'

test('The text must be displayed on the Button.', async () => {
    render(<Button />)

    expect(screen.getByText('Button')).toBeTruthy()
})
