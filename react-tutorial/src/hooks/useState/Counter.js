import React,{useState} from 'react';

function Counter(){
    
    const [number, setNumber] = useState(0) ;
    const IncreaseFn = ()=>{
        console.log('up') ;
        setNumber(
            number + 1 
        )
    }
    const DecreaseFn = ()=>{
        console.log('down') ;
        setNumber(
            number - 1 
        )
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={IncreaseFn}>+1</button>
            <button onClick={DecreaseFn}>-1</button>
        </div>
    )
}

export default Counter;
