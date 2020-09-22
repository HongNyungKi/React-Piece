<<<<<<< HEAD
=======
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
>>>>>>> 528c0aed9722ef8a08101226b4b36f1dd3235490
