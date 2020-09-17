import React from 'react';

function Hello({name,color,isSpecial}){
    return (
    <div style={{color}}>
        {/* {isSpecial ? <span>#</span> : null} 안녕하세요 {name} 씨. */}
        {isSpecial && <span>#</span>} 안녕하세요 {name} 씨.
    </div>
    )
}

Hello.defaultProps = {
    name: '이름없음',
    color: 'red'
}

export default Hello;