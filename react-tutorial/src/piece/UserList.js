import React from 'react';

const users = [
    {
        id:1,
        username:'홍녕기',
        email:'hnk2017@naver.com'
    },{
        id:2,
        username:'양현준',
        email:'akakak231@google.com'
    },{
        id:3,
        username:'김철환',
        email:'kkcch9@naver.com'
    }
]

function User({person}){
    return(
    <div>
        {person.username} : {person.email}
    </div>
    )
}

function UserList(){
    
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