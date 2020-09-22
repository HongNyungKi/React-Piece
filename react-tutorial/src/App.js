import React,{useState,useRef} from 'react';
import UserList from './piece/UserList.js';
import CreateUser from './piece/CreateUser.js';

function App(){

  const [usersInfo,setUsersInfo] = useState(
        [
            {
                id:1,
                username:'홍녕기',
                email:'hnk2017@naver.com',
                active: true
            },{
                id:2,
                username:'김철환',
                email:'kkcch9@naver.com',
                active: false
            },{
                id:3,
                username:'양현준',
                email:'akakak231@google.com',
                active: false
            }
        ]
    )
  const nextId = useRef(4)

  const [inputs, setInputs] = useState(
    {
      name:'',
      email:''
    }
  )
  const {name,email} = inputs

  const onChangeFn = (e)=>{
    setInputs(
      { 
        ...inputs,
        [e.target.name] : e.target.value
      }
    )
  }
  const onCreateFn = ()=>{
    const userInfo = {
      id:nextId.current,
      username:name,
      email
    }
    setUsersInfo(usersInfo.concat(userInfo))
    setInputs(
      {
        name:'',
        email:''
      }
    )
    nextId.current += 1;
  }
  const onRemoveFn = (id)=>{
    setUsersInfo(
      usersInfo.filter(
        info => info.id !== id
      )
    )
  }
  const onToggleFn = (id)=>{
    setUsersInfo(
      usersInfo.map(
        info => info.id ===id? {...info, active: !info.active} : info
      )
    )
  }
  return (
    <div>
      <CreateUser 
        onChangeFn = {onChangeFn}
        onCreateFn = {onCreateFn}
        name={name}
        email={email}
      />
      <UserList 
        usersInfo={usersInfo}
        onRemoveFn={onRemoveFn}
        onToggleFn={onToggleFn}
      />
    </div>
  )
}

export default App;