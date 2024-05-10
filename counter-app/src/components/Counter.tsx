import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const increaseCounter = () => {
        setCounter(counter+1);
    }
    const resetCounter = () => {
        setCounter(0);
    }
    const decreaseCounter = () => {
        setCounter(counter-1);
    }
  return (
    <>
    <div><h1>Counter {counter}</h1></div>
    <button onClick={decreaseCounter}>-</button>
    <button onClick={resetCounter}>RESET</button>
    <button onClick={increaseCounter}>+</button>
    </>
  )
}

export default Counter