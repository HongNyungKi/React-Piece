import React from 'react';

function CreateUser({onChangeFn,onCreateFn}){
    return (
        <>
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
        <button onClick={onCreateFn}>추가하기</button>
        </>
    )
}

export default CreateUser;
