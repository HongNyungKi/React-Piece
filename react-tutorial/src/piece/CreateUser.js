<<<<<<< HEAD
=======
import React from 'react';

function CreateUser({username,email,onChangeFn,onCreateFn}){
    return (
        <div>
            <input 
            name='username'
            placeholder='계정명'
            onChange={onChangeFn}
            value={username}
            />
            <input 
            name='email'
            placeholder='이메일'
            onChange={onChangeFn}
            value={email}
            />
            <button onClick={onCreateFn}>추가하기</button>
        </div>
        
    )
}

export default CreateUser;
>>>>>>> 528c0aed9722ef8a08101226b4b36f1dd3235490
