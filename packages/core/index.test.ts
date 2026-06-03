import { describe, expect, it } from 'vitest'

import { VERSION } from './index'
import { version } from '../../package.json'

describe('VERSION', () => {
  it('is exported and matches package.json', () => {
    expect(VERSION).toBe(version)
    expect(VERSION).toMatch(/^\d+\.\d+\.\d+/)
  })
})
