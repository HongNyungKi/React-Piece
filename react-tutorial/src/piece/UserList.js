import React from 'react';

function User({person}){
    return (
        <div>
            {person.username} : {person.email}
            <button>삭제</button>
        </div>
    )
}

function UserList({userInfo}){
    return (
        <div>
            {userInfo.map(
                (user)=>(<User person={user} key={user.id}/>)
            )}
        </div>
    )
}

export default UserList;