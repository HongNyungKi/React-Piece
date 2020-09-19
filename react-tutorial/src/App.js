import React,{useState, useRef} from "react";
import UserList from './piece/UserList';
import CreateUser from './piece/CreateUser';

function App() {
  const [users, setUsers] = useState(
      [
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
  )
  
  
  const [inputs,setInputs] =useState(
    {
      username:'',
      email:''
    }
  )
  const {username,email} = inputs

  const nextId = useRef(4);

  const onChangeFn = (e)=>{
    setInputs(
      {
        ...inputs,
      [e.target.name]:e.target.value
      }
    )
  }
  const onCreateFn = ()=>{
    const addUser = {
      id:nextId.current,
      username,
      email
    }
    setUsers(
      users.concat(addUser)
    )
    setInputs(
      {
        username:'',
        email:''
      }
    )
      nextId.current += 1 ;
  }

return(
    <div>
        <CreateUser 
        onCreateFn={onCreateFn}
        onChangeFn={onChangeFn}
        username={username}
        email={email}
        />
        <UserList users={users}/>
        
    </div>
)

}
export default App;
