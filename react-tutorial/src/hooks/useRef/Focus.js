import React,{useRef} from 'react';

function Focus(){
    const focusOn = useRef();
    const moveFocus = ()=>{
        focusOn.current.focus();
    }

    return(
        <>
        <input ref={focusOn}/>
        <input />
        <input />
        <input />
        <button onClick={moveFocus}>Focus이동하기</button>
        </>
    )
}

export default Focus;
