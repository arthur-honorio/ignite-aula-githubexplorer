import {useState} from "react"

export default function Counter () {
    const [counter, setCounter] = useState(0)
    const increment = () => setCounter(counter +1)


    return (
        <>
            <h1>{counter}</h1>
            <button type="button" onClick={increment}>Increment</button>
        </>
    )


}