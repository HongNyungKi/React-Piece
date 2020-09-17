import React,{useState} from 'react';

function Inputs(){
    const [inputs,setInputs] = useState(
        {
            person:'이름',
            nickName:'닉네임'
        }
    )
    const {person,nickName} = inputs;
    
    const onChange = (e)=>{
        setInputs(
            {
                ...inputs,
            [e.target.name] : e.target.value
            }
        )
    }
    const onReset = ()=>{
        setInputs(
            {
                person:'이름',
                nickName:'닉네임'
            }
        )
    }

    return (
        <div>
            <input placeholder='이름' name='person' onChange={onChange}/>
            <input placeholder='닉네임' name='nickName' onChange={onChange}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값:</b>{person} ({nickName})
            </div>
        </div>
    )
}

export default Inputs;