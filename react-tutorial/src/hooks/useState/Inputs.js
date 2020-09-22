import React,{useState} from 'react';

function Inputs(){
    const [inputs, setInputs] = useState(
        {
            name:'',
            email:''
        }
    )
    const {name,email} = inputs

    const onChangeFn = (e)=>{
        setInputs(
            {
                ...inputs,
                [e.target.name] : e.target.value
            }
        )
    }
    const onResetFn = ()=>{
        setInputs(
            {
            name:'',
            email:''
        }
        )
    }

    return (
        <>
        <input 
            name='name'
            placeholder='이름을 입력하세요'
            onChange={onChangeFn}
            value={name}
            />
        <input 
            name='email'
            placeholder='이메일을 입력하세요'
            onChange={onChangeFn}
            value={email}
            />
        <button onClick={onResetFn}>초기화</button>
        <div>
            {name}:{email}
        </div>
        </>
    )
}

export default Inputs;
