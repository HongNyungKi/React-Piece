import React from 'react';

function User({person}){
    return(
        <div>
            {person.username} : {person.email}
        </div>
    )
}

function UserList({usersInfo}){
    
    return (
        <div>
            {
                usersInfo.map(
                    (userInfo)=>(<User person={userInfo} key={userInfo.id}/>)
                )
            }
        </div>
    )
}

export default UserList;