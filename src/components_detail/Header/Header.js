import React from 'react';
import './Header.css'

const MyheaderD=(props)=>{

    var otherSet=()=>{
       alert("待后续开发")
    }

    return (
        <div className="Header">
            <h3 id="title">{props.title}</h3>
            <img id="more" src="more.png" alt="更多设置" onClick={otherSet}></img>
        </div>
    )
}


export default MyheaderD;