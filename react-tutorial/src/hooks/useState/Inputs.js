import React,{useState} from 'react';

function Inputs({username,email,onChangeFn,onResetFn}){

    return (
        <div>
            <input 
                name='username'
                placeholder='계정명을 입력하세요'
                onChange={onChangeFn}
                
            />
            <input 
                name='email'
                placeholder='이메일을 입력하세요'
                onChange={onChangeFn}
            />
            <button onClick={onResetFn}>리셋하기</button>
            <div>
                {username} : {email}
            </div>
        </div>
    )
}

export default Inputs;
