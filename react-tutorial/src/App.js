import React,{useState} from 'react';
import Inputs from './hooks/useState/Inputs.js';

function App(){
  const [inputs,setInputs] = useState(
      {
          username:'계정명',
          email:'이메일'
      }
  )
  const {username, email} = inputs;

  const onChangeFn = (e)=>{
      setInputs(
          {
              ...inputs,
              [e.target.name] : e.target.value
          }
      )
  }
  const onResetFn = ()=>{
    setInputs(
      {
        username:'계정명',
        email:'이메일'
      }
    )
  }
  return (
    <>
      <Inputs 
        username={username}
        email={email}
        onChangeFn={onChangeFn}
        onResetFn={onResetFn}
      />
    </>
  )
}

export default App;
