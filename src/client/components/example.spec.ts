import {describe, it, expect} from 'vitest'
import {add5} from '@/client/components/example'

describe('Input', () => {
  it('add5', () => {
    expect(add5(5)).toBe(10)
  })
})
