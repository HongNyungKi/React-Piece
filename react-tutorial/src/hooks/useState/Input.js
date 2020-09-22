import React,{useState} from 'react';

function Input(){
    const [text, setText] = useState('');

    const onChangeFn = (e)=>{
        setText(e.target.value)
    }
    const onResetFn = ()=>{
        setText('')
    }

    return (
        <>
            <input onChange={onChangeFn} value={text}/>
            <button onClick={onResetFn}>초기화</button>
            <div>
                값: {text}
            </div>
        </>
    )
}

export default Input;