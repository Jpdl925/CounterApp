import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const increaseCounter = () => {
        setCounter(counter+1);
    }
    const decreaseCounter = () => {
        setCounter(counter-1);
    }
  return (
    <>
    <div><h1>Counter {counter}</h1></div>
    <button onClick={decreaseCounter}>DECREASE counter</button>
    <button onClick={increaseCounter}>INCREASE counter</button>
    </>
  )
}

export default Counter