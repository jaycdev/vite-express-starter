import React from 'react'

export const add5 = (a: number) => a + 5

export const Example = () => {
  const [total, setTotal] = React.useState(0)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    setTotal(add5(value))
  }

  return (
    <div>
      <input type="text" onChange={handleInput} />
      <div data-test-id="total">{total}</div>
    </div>
  )
}
