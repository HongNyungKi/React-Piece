import React,{useState,useEffect} from 'react';

function Practice(){
    const [text, setText] = useState('');
    const [count, setCount] = useState(0);
    const onChangeText = (e)=>{
        console.log(e.target.value);
        setText(e.target.value);
    }
    const onChangeCount = ()=>{
        console.log('+1');
        setCount(count + 1);
    }
    useEffect(
        ()=>{(console.log('text가 렌더링 되었습니다.'))},
        [text]
    )
    useEffect(
        ()=>{console.log('count가 렌더링 되었습니다.')},
        [count]
    )

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={onChangeCount}>Click me</button>
            <input value={text} onChange={onChangeText}/>
            <div>{text}</div>
        </div>
    )
}

export default Practice ;