import React from 'react';

function CreateUserInfo({username,email,onChangeFn,onCreateFn}){
    return (
        <div>
            <input 
                name='username'
               value={username}
               placeholder='이름을 입력하세요'
               onChange={onChangeFn}
            />
            <input 
                name='email'
                value={email}
                placeholder='이메일을 입력하세요'
                onChange={onChangeFn}
            />
            <button onClick={onCreateFn}>추가하기</button>
        </div>
    )
}

export default CreateUserInfo;