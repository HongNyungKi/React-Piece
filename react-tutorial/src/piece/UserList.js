import React,{ useEffect } from 'react';

function MakeUserList({personInfo,onRemoveFn,onToggleFn}){
    useEffect(
        ()=>{
            console.log('새로운 유저 정보가 추가되었습니다.');
            return()=>{console.log('유저 정보가 삭제되었습니다.')}
        },[]
        )
    const { username,email,id,active } = personInfo;
    return(
        <div>
            <b 
            style={
                {
                    color: active? 'green' : 'black',
                    cursor: 'pointer'
                }
            }
            onClick={()=>{onToggleFn(id)}}
            >{username}({email})</b>
            <button onClick={()=>{onRemoveFn(id)}}>삭제</button>
        </div>
    )
}

function UserList({usersInfo,onRemoveFn,onToggleFn}){
    return (
        <div>
            {usersInfo.map(
                (userInfo)=>(
                    <MakeUserList
                        personInfo={userInfo}
                        key={userInfo.id}
                        onRemoveFn={onRemoveFn}
                        onToggleFn={onToggleFn}
                        />
                     )
            )}
        </div>
    )
}

export default UserList;
