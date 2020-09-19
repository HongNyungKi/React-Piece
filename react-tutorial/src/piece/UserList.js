import React from 'react';



function User({person}){
    return(
    <div>
        {person.username} : {person.email}
    </div>
    )
}

function UserList({users}){
    
    return(
        <div>
            {
                users.map(
                    (user)=>(<User person={user} key={user.id}/>)
                )
            }
        </div>
    )
}

export default UserList;