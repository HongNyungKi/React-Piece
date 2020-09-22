import React,{useState,useRef} from 'react';

function MakeList({person, onRemoveFn, onToggleFn}){
    const {username,email,id,active} = person
    return (
        <div>
            <span
                style={
                    {
                        color: active? 'green' : 'black',
                        cursor: 'pointer'
                    }
                }
                onClick={
                    ()=>onToggleFn(id)
                }
            >
                {username} : {email} 
            </span>
            <button onClick={()=>onRemoveFn(id)}>삭제</button>
        </div>
    )
}

function UserList({usersInfo,onRemoveFn,onToggleFn}){

    return (
        <div>
            {
                usersInfo.map(
                    (userInfo)=>(
                        <MakeList 
                            person={userInfo} 
                            key={userInfo.id}
                            onRemoveFn={onRemoveFn}
                            onToggleFn={onToggleFn}
                        />
                        )   
                )
            }
        </div>
    )
}

export default UserList;
