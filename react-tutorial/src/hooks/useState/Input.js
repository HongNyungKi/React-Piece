import React,{useState} from 'react';

function Input(){
    const [text,setText] = useState('');
    const onChange = (e)=>{
        console.log(e.target.value);
        setText(e.target.value);
    }
    const onReset = ()=>{
        console.log('reset');
        setText('');
    }

    return (
        <div>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값:</b> {text}
            </div>
        </div>
    )
}

export default Input;