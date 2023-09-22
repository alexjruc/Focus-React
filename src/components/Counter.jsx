import { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const handleSet20 = () => {
        setCounter(20)
    }
    const handleAdd = () => {
        setCounter(counter + 1)
    }
    const handleMultiply = () => {
        setCounter(counter * 5)
    }
    const handleLess = () => {
        setCounter(counter - 2)
    }
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleSet20}>20</button>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleMultiply}>x5</button>
            <button onClick={handleLess}>-2</button>
        </div>
    )
}
export default Counter