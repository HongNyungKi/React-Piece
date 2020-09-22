import React from 'react';

function CreateUser({name,email,onChangeFn,onCreateFn}){
    return (
        <div>
            <input 
                placeholder='이름을 입력하세요'
                name='name'
                onChange={onChangeFn}
                value={name}
            />
            <input 
                placeholder='이메일을 입력하세요'
                name='email'
                onChange={onChangeFn}
                value={email}
            />
            <button onClick={onCreateFn}>추가하기</button>
        </div>
    )
}

export default CreateUser;

//1. input에 작성한 내용을 추가하기 버튼을 눌러 usersinfo 객체에 추가하기
