import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { GenericComponent, useGenericHook } from '../packages/core/core'

describe('GenericComponent', () => {
  it('renders its content', () => {
    render(<GenericComponent />)
    expect(screen.getByText('GenericComponent')).toBeInTheDocument()
  })
})

describe('useGenericHook', () => {
  it('returns the expected value', () => {
    expect(useGenericHook()).toBe('GenericHook')
  })
})
