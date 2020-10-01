import React,{ useState,useRef,useMemo } from 'react';
import UserList from './piece/UserList';
import CreateUserInfo from './piece/CreateUserInfo';

function countActiveUsers(users){
    console.log('활성사용자를 탐색합니다.')
    return (
      users.filter(user => user.active).length
    )
  }

function App(){
  const [usersInfo, setUsersInfo] = useState(
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
  const nextId = useRef(4);
  const [inputs, setInputs] = useState(
    {
      username:'',
      email:''
    }
  )
  const {username,email} = inputs;
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
      id: nextId.current,
      username,
      email
    }
    setUsersInfo(
      usersInfo.concat(userInfo)
    )
    setInputs(
      {
        username:'',
        email:''
      }
    )
    nextId.current += 1
  }
  const onRemoveFn = (id)=>{
    setUsersInfo(
      usersInfo.filter( info => info.id !== id )
    )
  }
  const onToggleFn = (id)=>{
    setUsersInfo(
      usersInfo.map(
        info => info.id === id ? {...info, active: !info.active} : info
      )
    )
  }
  const count = useMemo(()=>countActiveUsers(usersInfo),[usersInfo])

  return (
    <div>
      <CreateUserInfo 
        username={username}
        email={email}
        onChangeFn={onChangeFn}
        onCreateFn={onCreateFn}
        />
      <UserList 
        usersInfo={usersInfo}
        onRemoveFn={onRemoveFn}
        onToggleFn={onToggleFn}
      />
      <div>활성 사용자 수: {count}</div>
    </div>
  )
}

export default App;
