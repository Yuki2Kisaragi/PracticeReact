import { useState } from "react";

type CounterProps = {
    initialValue:number
}

// <Counter initialValue={0}/>
const Counter = (props:CounterProps) => {
    const { initialValue } = props
    
    const [count, setCount] = useState(initialValue)

    return (
        <div>
            <p> Count: {count}</p>
            <button onClick={()=> setCount(count -1)}>-</button>
            <button onClick={()=> setCount((prev) => prev + 1)}>+</button>
        </div>
    )
}

export default Counter
